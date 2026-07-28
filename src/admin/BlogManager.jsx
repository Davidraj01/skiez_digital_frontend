import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";
import { api } from "@/lib/api";

export default function BlogManager() {
  const [posts, setPosts] = useState(null);

  function load() {
    api.get("/admin/posts").then((res) => setPosts(res.data.posts));
  }

  useEffect(load, []);

  async function handleDelete(post) {
    if (!confirm(`Delete "${post.title}"? This can't be undone.`)) return;
    await api.delete(`/admin/posts/${post._id}`);
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <p className="mt-1 text-slate-400">Published posts appear on skiezdigital.com/blog.</p>
        </div>
        <Link
          to="/admin/blog/new"
          className="flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2.5 font-semibold text-slate-950 hover:bg-teal-400 transition"
        >
          <Plus size={18} /> New post
        </Link>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-slate-400">
            <tr>
              <th className="text-left font-medium px-4 py-3">Title</th>
              <th className="text-left font-medium px-4 py-3">Category</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
              <th className="text-left font-medium px-4 py-3">Updated</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {posts?.map((post) => (
              <tr key={post._id}>
                <td className="px-4 py-3 text-slate-100 max-w-xs truncate">{post.title}</td>
                <td className="px-4 py-3 text-slate-400">{post.category}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-[11px] uppercase tracking-wide rounded-full px-2 py-0.5 ${
                      post.status === "published"
                        ? "bg-teal-500/10 text-teal-300"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-400">
                  {new Date(post.updatedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    {post.status === "published" && (
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:bg-slate-800 transition"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                    <Link
                      to={`/admin/blog/${post._id}`}
                      className="rounded-lg border border-slate-700 p-2 text-slate-200 hover:bg-slate-800 transition"
                    >
                      <Pencil size={15} />
                    </Link>
                    <button
                      onClick={() => handleDelete(post)}
                      className="rounded-lg border border-slate-700 p-2 text-red-400 hover:bg-red-500/10 transition"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {posts?.length === 0 && <p className="text-slate-500 text-center py-10">No posts yet.</p>}
        {posts === null && <p className="text-slate-500 text-center py-10">Loading...</p>}
      </div>
    </div>
  );
}
