import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function ContactMessages() {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    api.get("/admin/contact").then((res) => setMessages(res.data.messages));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Contact Messages</h1>
      <p className="mt-1 text-slate-400">
        Submissions from the website's Contact page.
      </p>

      <div className="mt-8 space-y-4">
        {messages?.map((m) => (
          <div
            key={m._id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-slate-100 font-medium">{m.name}</span>
                <span className="text-slate-500 mx-2">·</span>
                <a
                  href={`mailto:${m.email}`}
                  className="text-teal-400 hover:underline"
                >
                  {m.email}
                </a>
              </div>
              <span className="text-xs text-slate-500">
                {new Date(m.createdAt).toLocaleString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            {m.subject && (
              <div className="mt-2 text-sm font-medium text-slate-300">
                {m.subject}
              </div>
            )}
            <p className="mt-2 text-sm text-slate-400 whitespace-pre-wrap">
              {m.message}
            </p>
          </div>
        ))}

        {messages?.length === 0 && (
          <p className="text-slate-500 text-center py-10">No messages yet.</p>
        )}
        {messages === null && (
          <p className="text-slate-500 text-center py-10">Loading...</p>
        )}
      </div>
    </div>
  );
}
