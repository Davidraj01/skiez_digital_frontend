import React, { useEffect, useState } from "react";
import { Plus, Trash2, X } from "lucide-react";
import { api, assetUrl } from "@/lib/api";
import ImagePicker from "./components/ImagePicker";

const EMPTY_FORM = { caption: "", platform: "", order: 0, published: true };

export default function SocialManager() {
  const [posts, setPosts] = useState(null);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function load() {
    api.get("/admin/social-posts").then((res) => setPosts(res.data.posts));
  }

  useEffect(load, []);

  function openNew() {
    setForm(EMPTY_FORM);
    setFile(null);
    setError("");
    setEditing({});
  }

  function openEdit(post) {
    setForm({
      caption: post.caption,
      platform: post.platform,
      order: post.order,
      published: post.published,
    });
    setFile(null);
    setError("");
    setEditing(post);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!editing._id && !file) {
      setError("A poster image is required.");
      return;
    }
    setSaving(true);
    setError("");

    const fd = new FormData();
    fd.append("caption", form.caption);
    fd.append("platform", form.platform);
    fd.append("order", form.order);
    fd.append("published", form.published);
    if (file) fd.append("image", file);

    try {
      if (editing._id) {
        await api.put(`/admin/social-posts/${editing._id}`, fd);
      } else {
        await api.post("/admin/social-posts", fd);
      }
      setEditing(null);
      load();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(post) {
    if (!confirm("Delete this poster? This can't be undone.")) return;
    await api.delete(`/admin/social-posts/${post._id}`);
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Social Posters</h1>
          <p className="mt-1 text-slate-400">
            Shown in the creative gallery on the Social Media Marketing page.
          </p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2.5 font-semibold text-slate-950 hover:bg-teal-400 transition"
        >
          <Plus size={18} /> Add poster
        </button>
      </div>

      <div className="mt-8 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {posts === null &&
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-56 rounded-2xl border border-slate-800 bg-slate-900/40 animate-pulse" />
          ))}

        {posts?.length === 0 && (
          <p className="text-slate-500 col-span-full">No posters yet. Add your first one.</p>
        )}

        {posts?.map((post) => (
          <div key={post._id} className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden group">
            <button className="block w-full text-left" onClick={() => openEdit(post)}>
              <img src={assetUrl(post.image)} alt={post.caption} className="h-40 w-full object-cover" />
            </button>
            <div className="p-3">
              <p className="text-sm text-slate-300 truncate">{post.caption || "Untitled"}</p>
              <div className="mt-2 flex items-center justify-between">
                {!post.published && (
                  <span className="text-[11px] uppercase tracking-wide rounded-full bg-slate-800 px-2 py-0.5 text-slate-400">
                    Hidden
                  </span>
                )}
                <button
                  onClick={() => handleDelete(post)}
                  className="ml-auto rounded-lg p-1.5 text-red-400 hover:bg-red-500/10 transition"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setEditing(null)}>
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">{editing._id ? "Edit poster" : "Add poster"}</h2>
              <button type="button" onClick={() => setEditing(null)} className="text-slate-500 hover:text-slate-300">
                <X size={20} />
              </button>
            </div>

            <ImagePicker existingImage={editing.image} file={file} onChange={setFile} label="Poster image" />

            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Caption</label>
              <input
                value={form.caption}
                onChange={(e) => setForm({ ...form, caption: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Platform (optional)</label>
              <input
                placeholder="Instagram, LinkedIn, Facebook..."
                value={form.platform}
                onChange={(e) => setForm({ ...form, platform: e.target.value })}
                className={inputClass}
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm text-slate-300 mb-1.5">Display order</label>
                <input
                  type="number"
                  value={form.order}
                  onChange={(e) => setForm({ ...form, order: e.target.value })}
                  className={inputClass}
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-300 pt-6">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) => setForm({ ...form, published: e.target.checked })}
                  className="rounded border-slate-700"
                />
                Visible on site
              </label>
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-lg bg-teal-500 py-2.5 font-semibold text-slate-950 hover:bg-teal-400 transition disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 outline-none focus:border-teal-500";
