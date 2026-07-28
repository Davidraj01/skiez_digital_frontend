// src/pages/BlogPost.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api, assetUrl } from "@/lib/api";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    setPost(undefined);
    api
      .get(`/posts/${slug}`)
      .then((res) => setPost(res.data.post))
      .catch(() => setPost(null));
  }, [slug]);

  if (post === undefined) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center p-10">
        <div className="w-8 h-8 rounded-full animate-spin border-4 border-slate-200 border-t-teal-500" />
      </main>
    );
  }

  // Not found
  if (!post) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center p-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <Link to="/blog" className="mt-4 inline-block text-teal-700">
            ← Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return <PostView post={post} slug={slug} />;
}

function PostView({ post, slug }) {
  // ----- SCROLLSPY -----
  const sections = post.sections || [];
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const headingsRef = useRef({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) {
        headingsRef.current[s.id] = el;
        obs.observe(el);
      }
    });

    return () => obs.disconnect();
  }, [slug]); // re-run when navigating between posts

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 12;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <header className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-3 md:px-6">
          <div className="pt-8 pb-6">
            <Link to="/blog" className="text-teal-700">
              ← Back to Blog
            </Link>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
              {post.title}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {formatDate(post.publishedAt || post.createdAt)} · {post.minutes} min read · By{" "}
              {post.author}
            </p>
          </div>
        </div>

        {post.image && (
          <div className="mx-auto max-w-7xl px-3 md:px-6 pb-6">
            <div className="h-64 md:h-[360px] overflow-hidden rounded-2xl">
              <img
                src={assetUrl(post.image)}
                alt={post.title}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        )}
      </header>

      {/* BODY */}
      <section className="mx-auto max-w-7xl px-3 md:px-6 py-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* TOC (left) */}
          <aside className="col-span-12 lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((s) => {
                  const active = activeId === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`block w-full text-left rounded-lg px-3 py-2 text-sm transition ${
                        active
                          ? "bg-teal-50 text-teal-800 border border-teal-100"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </nav>

              {/* Meta card */}
              <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm">
                <div className="font-medium text-gray-900">{post.category}</div>
                <div className="text-gray-600">
                  Updated {formatDate(post.updatedAt || post.publishedAt)}
                </div>
              </div>
            </div>
          </aside>

          {/* CONTENT (right) */}
          <article className="col-span-12 lg:col-span-8 xl:col-span-9">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-[26px] font-bold text-gray-900 mb-3">
                  {s.label}
                </h2>
                <div
                  className="prose prose-teal max-w-none prose-content
             prose-headings:text-gray-900 prose-p:text-gray-700
             prose-li:marker:text-gray-400
             prose-img:rounded-xl prose-img:border prose-img:border-gray-200
             prose-figcaption:text-gray-500"
                  dangerouslySetInnerHTML={{ __html: s.html }}
                />

                <hr className="my-8 border-gray-100" />
              </section>
            ))}

            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full bg-gray-100 text-gray-700 px-2.5 py-1"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Author footer */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700" />
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-600">Skiez Digital</div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
