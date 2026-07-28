import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Newspaper,
  Image as ImageIcon,
  FileText,
  Mail,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { useAuth } from "./AuthContext";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/works", label: "Selected Works", icon: Briefcase },
  { to: "/admin/blog", label: "Blog Posts", icon: Newspaper },
  { to: "/admin/social", label: "Social Posters", icon: ImageIcon },
  { to: "/admin/applications", label: "Applications", icon: FileText },
  { to: "/admin/contact", label: "Contact Messages", icon: Mail },
];

export default function AdminLayout() {
  const { username, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/admin/login", { replace: true });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-slate-800 bg-slate-900/60 transform transition-transform md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800">
          <div className="font-black text-lg">
            SKIEZ <span className="text-teal-400">Admin</span>
          </div>
          <button className="md:hidden text-slate-400" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="p-3 space-y-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-teal-500/10 text-teal-300 border border-teal-500/20"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
                }`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 inset-x-0 p-3 border-t border-slate-800 space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800/60 hover:text-slate-100 transition"
          >
            <ExternalLink size={18} />
            View site
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-300 transition"
          >
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 min-w-0">
        <header className="h-16 flex items-center justify-between px-5 border-b border-slate-800 md:justify-end">
          <button className="md:hidden text-slate-300" onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>
          <div className="text-sm text-slate-400">
            Signed in as <span className="text-slate-200">{username}</span>
          </div>
        </header>

        <main className="p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
