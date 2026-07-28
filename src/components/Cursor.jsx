"use client";
import useCanvasCursor from "./ui/CursorFollower";
const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas className="pointer-events-none fixed inset-0 z-[99999]" id="canvas" />;
};
export default CanvasCursor;
