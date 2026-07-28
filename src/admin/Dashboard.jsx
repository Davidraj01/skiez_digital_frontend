import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Newspaper, Image as ImageIcon, FileText } from "lucide-react";
import { api } from "@/lib/api";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    Promise.all([
      api.get("/admin/works"),
      api.get("/admin/posts"),
      api.get("/admin/social-posts"),
      api.get("/admin/applications"),
    ]).then(([works, posts, social, applications]) => {
      const publishedPosts = posts.data.posts.filter((p) => p.status === "published").length;
      setStats({
        works: works.data.works.length,
        posts: posts.data.posts.length,
        publishedPosts,
        drafts: posts.data.posts.length - publishedPosts,
        social: social.data.posts.length,
        applications: applications.data.applications.length,
      });
    });
  }, []);

  const cards = stats && [
    { label: "Selected works", value: stats.works, icon: Briefcase, to: "/admin/works" },
    { label: "Blog posts", value: `${stats.publishedPosts} live / ${stats.drafts} draft`, icon: Newspaper, to: "/admin/blog" },
    { label: "Social posters", value: stats.social, icon: ImageIcon, to: "/admin/social" },
    { label: "Applications received", value: stats.applications, icon: FileText, to: "/admin/applications" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      <p className="mt-1 text-slate-400">Everything that's live on skiezdigital.com, in one place.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {!stats
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 rounded-2xl border border-slate-800 bg-slate-900/40 animate-pulse" />
            ))
          : cards.map((card) => (
              <Link
                key={card.label}
                to={card.to}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-teal-500/40 transition"
              >
                <card.icon className="text-teal-400" size={22} />
                <div className="mt-3 text-2xl font-bold text-white">{card.value}</div>
                <div className="text-sm text-slate-400">{card.label}</div>
              </Link>
            ))}
      </div>
    </div>
  );
}
