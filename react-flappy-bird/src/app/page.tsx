"use client";
import Bird from "@/components/Bird";
import Image from "next/image";
import { useBirdSlice } from "@/state/useBirdSlice";
import { useGameLoopSlice } from "@/state/useGameLoopSlice";
import { useEffect } from "react";

export default function Home() {
  const { fly } = useBirdSlice();
  const {} = useGameLoopSlice();

  return (
    <div
      onClick={() => fly()}
      onKeyDown={(e) => e.key == " " && fly()}
      tabIndex={0}
      className="bg-sky-400 min-h-dvh"
    >
      <Bird />
    </div>
  );
}
