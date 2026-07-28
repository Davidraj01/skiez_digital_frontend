import React, { useEffect, useRef } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link as LinkIcon,
  Heading2,
  Quote,
  RemoveFormatting,
} from "lucide-react";

const BUTTONS = [
  { icon: Bold, command: "bold", label: "Bold" },
  { icon: Italic, command: "italic", label: "Italic" },
  { icon: Underline, command: "underline", label: "Underline" },
  { icon: Heading2, command: "formatBlock", value: "H3", label: "Heading" },
  { icon: Quote, command: "formatBlock", value: "BLOCKQUOTE", label: "Quote" },
  { icon: List, command: "insertUnorderedList", label: "Bullet list" },
  { icon: ListOrdered, command: "insertOrderedList", label: "Numbered list" },
];

export default function RichTextEditor({ value, onChange }) {
  const ref = useRef(null);
  const lastValue = useRef(value);

  useEffect(() => {
    if (ref.current && value !== lastValue.current) {
      ref.current.innerHTML = value || "";
      lastValue.current = value;
    }
  }, [value]);

  function emit() {
    const html = ref.current.innerHTML;
    lastValue.current = html;
    onChange(html);
  }

  function exec(command, cmdValue) {
    document.execCommand(command, false, cmdValue);
    ref.current?.focus();
    emit();
  }

  function addLink() {
    const url = prompt("Link URL");
    if (url) exec("createLink", url);
  }

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-950 overflow-hidden">
      <div className="flex flex-wrap items-center gap-1 border-b border-slate-800 bg-slate-900/60 p-2">
        {BUTTONS.map((btn) => (
          <button
            key={btn.label}
            type="button"
            title={btn.label}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec(btn.command, btn.value)}
            className="rounded p-1.5 text-slate-400 hover:bg-slate-800 hover:text-teal-300 transition"
          >
            <btn.icon size={16} />
          </button>
        ))}
        <button
          type="button"
          title="Link"
          onMouseDown={(e) => e.preventDefault()}
          onClick={addLink}
          className="rounded p-1.5 text-slate-400 hover:bg-slate-800 hover:text-teal-300 transition"
        >
          <LinkIcon size={16} />
        </button>
        <button
          type="button"
          title="Clear formatting"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => exec("removeFormat")}
          className="rounded p-1.5 text-slate-400 hover:bg-slate-800 hover:text-teal-300 transition"
        >
          <RemoveFormatting size={16} />
        </button>
      </div>

      <div
        ref={(node) => {
          ref.current = node;
          if (node && !node.innerHTML && value) node.innerHTML = value;
        }}
        contentEditable
        suppressContentEditableWarning
        onInput={emit}
        className="prose prose-invert prose-sm max-w-none min-h-[160px] px-4 py-3 text-slate-100 outline-none [&_a]:text-teal-400"
      />
    </div>
  );
}
