import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function ApplicationsList() {
  const [applications, setApplications] = useState(null);

  useEffect(() => {
    api.get("/admin/applications").then((res) => setApplications(res.data.applications));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Applications</h1>
      <p className="mt-1 text-slate-400">
        Careers, internship and trainee submissions from the Careers page. Resumes are emailed directly to HR and aren't stored here.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-slate-400">
            <tr>
              <th className="text-left font-medium px-4 py-3">Name</th>
              <th className="text-left font-medium px-4 py-3">Contact</th>
              <th className="text-left font-medium px-4 py-3">Category</th>
              <th className="text-left font-medium px-4 py-3">Role</th>
              <th className="text-left font-medium px-4 py-3">Applied</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {applications?.map((a) => (
              <tr key={a._id}>
                <td className="px-4 py-3 text-slate-100">{a.name}</td>
                <td className="px-4 py-3 text-slate-400">
                  <div>{a.email}</div>
                  <div>{a.phone}</div>
                </td>
                <td className="px-4 py-3 text-slate-400 capitalize">{a.category}</td>
                <td className="px-4 py-3 text-slate-400">{a.roleTitle || "—"}</td>
                <td className="px-4 py-3 text-slate-400">
                  {new Date(a.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {applications?.length === 0 && (
          <p className="text-slate-500 text-center py-10">No applications yet.</p>
        )}
        {applications === null && (
          <p className="text-slate-500 text-center py-10">Loading...</p>
        )}
      </div>
    </div>
  );
}
