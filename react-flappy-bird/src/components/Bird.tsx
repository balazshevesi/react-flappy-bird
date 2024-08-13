import { useBirdSlice } from "@/state/useBirdSlice";

export default function Bird() {
  const { position, fly } = useBirdSlice();

  return (
    <div className="flex justify-center items-end min-h-dvh w-full">
      <div
        className="bg-amber-400 size-8 relative"
        style={{ bottom: position }}
      >
        bird
      </div>
    </div>
  );
}
