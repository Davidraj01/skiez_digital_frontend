import React, { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, ExternalLink, X } from "lucide-react";
import { api, assetUrl } from "@/lib/api";
import ImagePicker from "./components/ImagePicker";

const EMPTY_FORM = {
  title: "",
  category: "",
  description: "",
  techStack: "",
  liveLink: "",
  order: 0,
  published: true,
};

export default function WorksManager() {
  const [works, setWorks] = useState(null);
  const [editing, setEditing] = useState(null); // work object, or {} for new
  const [form, setForm] = useState(EMPTY_FORM);
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function load() {
    api.get("/admin/works").then((res) => setWorks(res.data.works));
  }

  useEffect(load, []);

  function openNew() {
    setForm(EMPTY_FORM);
    setFile(null);
    setError("");
    setEditing({});
  }

  function openEdit(work) {
    setForm({
      title: work.title,
      category: work.category,
      description: work.description,
      techStack: work.techStack.join(", "),
      liveLink: work.liveLink || "",
      order: work.order,
      published: work.published,
    });
    setFile(null);
    setError("");
    setEditing(work);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("category", form.category);
    fd.append("description", form.description);
    fd.append("techStack", form.techStack);
    fd.append("liveLink", form.liveLink);
    fd.append("order", form.order);
    fd.append("published", form.published);
    if (file) fd.append("image", file);

    try {
      if (editing._id) {
        await api.put(`/admin/works/${editing._id}`, fd);
      } else {
        await api.post("/admin/works", fd);
      }
      setEditing(null);
      load();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(work) {
    if (!confirm(`Delete "${work.title}"? This can't be undone.`)) return;
    await api.delete(`/admin/works/${work._id}`);
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Selected Works</h1>
          <p className="mt-1 text-slate-400">Shown in the "Selected Works" section on the homepage.</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2.5 font-semibold text-slate-950 hover:bg-teal-400 transition"
        >
          <Plus size={18} /> Add work
        </button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {works === null &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-64 rounded-2xl border border-slate-800 bg-slate-900/40 animate-pulse" />
          ))}

        {works?.length === 0 && (
          <p className="text-slate-500 col-span-full">No projects yet. Add your first one.</p>
        )}

        {works?.map((work) => (
          <div key={work._id} className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
            <img src={assetUrl(work.image)} alt={work.title} className="h-40 w-full object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-white truncate">{work.title}</h3>
                {!work.published && (
                  <span className="shrink-0 text-[11px] uppercase tracking-wide rounded-full bg-slate-800 px-2 py-0.5 text-slate-400">
                    Hidden
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-400">{work.category}</p>
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => openEdit(work)}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 py-2 text-sm text-slate-200 hover:bg-slate-800 transition"
                >
                  <Pencil size={14} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(work)}
                  className="rounded-lg border border-slate-700 p-2 text-red-400 hover:bg-red-500/10 transition"
                >
                  <Trash2 size={16} />
                </button>
                {work.liveLink && (
                  <a
                    href={work.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:bg-slate-800 transition"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
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
            className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">
                {editing._id ? "Edit work" : "Add work"}
              </h2>
              <button type="button" onClick={() => setEditing(null)} className="text-slate-500 hover:text-slate-300">
                <X size={20} />
              </button>
            </div>

            <ImagePicker existingImage={editing.image} file={file} onChange={setFile} label="Project image" />

            <Field label="Title">
              <input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className={inputClass}
              />
            </Field>

            <Field label="Category">
              <input
                required
                placeholder="e.g. Service Platform"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className={inputClass}
              />
            </Field>

            <Field label="Description">
              <textarea
                required
                rows={3}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className={inputClass}
              />
            </Field>

            <Field label="Tech stack (comma separated)">
              <input
                placeholder="React, Node.js, Tailwind"
                value={form.techStack}
                onChange={(e) => setForm({ ...form, techStack: e.target.value })}
                className={inputClass}
              />
            </Field>

            <Field label="Live link">
              <input
                value={form.liveLink}
                onChange={(e) => setForm({ ...form, liveLink: e.target.value })}
                className={inputClass}
              />
            </Field>

            <div className="flex items-center gap-4">
              <Field label="Display order" className="flex-1">
                <input
                  type="number"
                  value={form.order}
                  onChange={(e) => setForm({ ...form, order: e.target.value })}
                  className={inputClass}
                />
              </Field>

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

function Field({ label, children, className = "" }) {
  return (
    <div className={className}>
      <label className="block text-sm text-slate-300 mb-1.5">{label}</label>
      {children}
    </div>
  );
}
