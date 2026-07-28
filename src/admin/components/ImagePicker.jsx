import React, { useRef } from "react";
import { UploadCloud } from "lucide-react";
import { assetUrl } from "@/lib/api";

export default function ImagePicker({ label, existingImage, file, onChange }) {
  const inputRef = useRef(null);
  const preview = file ? URL.createObjectURL(file) : existingImage ? assetUrl(existingImage) : null;

  return (
    <div>
      {label && <label className="block text-sm text-slate-300 mb-1.5">{label}</label>}
      <div
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer rounded-xl border border-dashed border-slate-700 hover:border-teal-500/50 bg-slate-950 transition overflow-hidden"
      >
        {preview ? (
          <img src={preview} alt="" className="h-40 w-full object-cover" />
        ) : (
          <div className="h-40 flex flex-col items-center justify-center gap-2 text-slate-500">
            <UploadCloud size={26} />
            <span className="text-sm">Click to upload an image</span>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] || null)}
      />
    </div>
  );
}
