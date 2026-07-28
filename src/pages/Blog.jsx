// src/pages/Blog.jsx
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api, assetUrl } from "@/lib/api";

const PER_PAGE = 6;

export default function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => setPosts(res.data.posts))
      .catch(() => setPosts([]));
  }, []);

  const allCategories = Array.from(new Set((posts || []).map((p) => p.category))).sort();
  const allTags = Array.from(new Set((posts || []).flatMap((p) => p.tags))).sort();

  useEffect(() => {
    document.title = "Skiez Digital Marketing & Growth Insights Blog";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Read the Skiez Digital blog for practical tips on digital marketing, social media marketing, web development, ads and content strategies that support steady online growth for businesses."
    );

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.skiezdigital.com/blog";
  }, []);


  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const cat = searchParams.get("cat") || "All";
  const tag = searchParams.get("tag") || "All";
  const page = Number(searchParams.get("page") || 1);

  const filtered = (posts || []).filter((p) => {
    const matchesQ =
      !q ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase());
    const matchesCat = cat === "All" || p.category === cat;
    const matchesTag = tag === "All" || p.tags.includes(tag);
    return matchesQ && matchesCat && matchesTag;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const visible = filtered.slice(start, start + PER_PAGE);

  const setParam = (key, val) => {
    const next = new URLSearchParams(searchParams);
    if (val === "All" || val === "" || val === null) next.delete(key);
    else next.set(key, String(val));
    if (["q", "cat", "tag"].includes(key)) next.delete("page");
    setSearchParams(next);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Skiez Digital Blog
          </h1>
          <p className="mt-2 text-gray-600">
            Pragmatic guides on SEO, web engineering, and growth.
          </p>

          {/* Controls */}
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <input
              value={q}
              onChange={(e) => setParam("q", e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <select
              value={cat}
              onChange={(e) => setParam("cat", e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>All</option>
              {allCategories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              value={tag}
              onChange={(e) => setParam("tag", e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>All</option>
              {allTags.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-3 md:px-6 py-10">
        {posts === null ? (
          <p className="text-gray-600">Loading posts...</p>
        ) : visible.length === 0 ? (
          <p className="text-gray-600">No posts match your filters.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <article
                key={p._id}
                className="group rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition"
              >
                <Link to={`/blog/${p.slug}`} className="block">
                  <div className="h-44 w-full overflow-hidden rounded-t-2xl">
                    <img
                      src={assetUrl(p.image)}
                      alt={p.title}
                      className="h-full w-full object-cover group-hover:scale-[1.02] transition"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-100">
                        {p.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(p.publishedAt || p.createdAt)} · {p.minutes} min read
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {p.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded-full bg-gray-100 text-gray-700 px-2.5 py-1"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 text-teal-700 font-medium">
                      Read more →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            <button
              onClick={() => setParam("page", Math.max(1, page - 1))}
              disabled={page === 1}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const active = n === page;
              return (
                <button
                  key={n}
                  onClick={() => setParam("page", n)}
                  className={`rounded-lg px-3 py-2 text-sm border ${
                    active
                      ? "bg-teal-600 text-white border-teal-600"
                      : "border-gray-200"
                  }`}
                >
                  {n}
                </button>
              );
            })}

            <button
              onClick={() => setParam("page", Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
