import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Plus, Trash2, ArrowLeft } from "lucide-react";
import { api } from "@/lib/api";
import ImagePicker from "./components/ImagePicker";
import RichTextEditor from "./components/RichTextEditor";

const EMPTY_FORM = {
  title: "",
  excerpt: "",
  author: "Skiez Digital",
  category: "",
  tags: "",
  status: "draft",
};

let sectionKey = 0;

export default function BlogEditor() {
  const { id } = useParams();
  const isNew = id === "new";
  const navigate = useNavigate();

  const [form, setForm] = useState(EMPTY_FORM);
  const [sections, setSections] = useState([{ key: sectionKey++, label: "", html: "" }]);
  const [existingImage, setExistingImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isNew) return;
    api.get(`/admin/posts/${id}`).then((res) => {
      const post = res.data.post;
      setForm({
        title: post.title,
        excerpt: post.excerpt,
        author: post.author,
        category: post.category,
        tags: post.tags.join(", "),
        status: post.status,
      });
      setSections(
        post.sections.length
          ? post.sections.map((s) => ({ key: sectionKey++, label: s.label, html: s.html }))
          : [{ key: sectionKey++, label: "", html: "" }]
      );
      setExistingImage(post.image);
      setLoading(false);
    });
  }, [id, isNew]);

  function updateSection(key, patch) {
    setSections((prev) => prev.map((s) => (s.key === key ? { ...s, ...patch } : s)));
  }

  function addSection() {
    setSections((prev) => [...prev, { key: sectionKey++, label: "", html: "" }]);
  }

  function removeSection(key) {
    setSections((prev) => prev.filter((s) => s.key !== key));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isNew && !file && !existingImage) {
      setError("A cover image is required.");
      return;
    }
    if (isNew && !file) {
      setError("A cover image is required.");
      return;
    }

    setSaving(true);
    setError("");

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("excerpt", form.excerpt);
    fd.append("author", form.author);
    fd.append("category", form.category);
    fd.append("tags", form.tags);
    fd.append("status", form.status);
    fd.append(
      "sections",
      JSON.stringify(sections.map(({ label, html }) => ({ label, html })))
    );
    if (file) fd.append("image", file);

    try {
      if (isNew) {
        const res = await api.post("/admin/posts", fd);
        navigate(`/admin/blog/${res.data.post._id}`, { replace: true });
      } else {
        await api.put(`/admin/posts/${id}`, fd);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p className="text-slate-500">Loading...</p>;
  }

  return (
    <div className="max-w-3xl">
      <button
        onClick={() => navigate("/admin/blog")}
        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 mb-4"
      >
        <ArrowLeft size={15} /> Back to posts
      </button>

      <h1 className="text-2xl font-bold text-white">{isNew ? "New post" : "Edit post"}</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <ImagePicker
          label="Cover image"
          existingImage={existingImage}
          file={file}
          onChange={setFile}
        />

        <Field label="Title">
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className={inputClass}
          />
        </Field>

        <Field label="Excerpt">
          <textarea
            required
            rows={2}
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            className={inputClass}
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Category">
            <input
              required
              placeholder="Digital Marketing"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className={inputClass}
            />
          </Field>
          <Field label="Author">
            <input
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Tags (comma separated)">
          <input
            placeholder="SEO, Content Strategy"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className={inputClass}
          />
        </Field>

        <Field label="Status">
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className={inputClass}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </Field>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-slate-200">Content sections</h2>
            <button
              type="button"
              onClick={addSection}
              className="flex items-center gap-1.5 text-sm text-teal-400 hover:text-teal-300"
            >
              <Plus size={15} /> Add section
            </button>
          </div>

          <div className="space-y-4">
            {sections.map((s, i) => (
              <div key={s.key} className="rounded-xl border border-slate-800 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    placeholder={`Section ${i + 1} heading`}
                    value={s.label}
                    onChange={(e) => updateSection(s.key, { label: e.target.value })}
                    className={`${inputClass} flex-1`}
                  />
                  {sections.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSection(s.key)}
                      className="rounded-lg p-2 text-red-400 hover:bg-red-500/10 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
                <RichTextEditor value={s.html} onChange={(html) => updateSection(s.key, { html })} />
              </div>
            ))}
          </div>
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-lg bg-teal-500 py-2.5 font-semibold text-slate-950 hover:bg-teal-400 transition disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save post"}
        </button>
      </form>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 outline-none focus:border-teal-500";

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm text-slate-300 mb-1.5">{label}</label>
      {children}
    </div>
  );
}
