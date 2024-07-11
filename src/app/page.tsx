"use client";

import Timer from "@/features/timer/components/timer";
import Main from "@/components/main";
import Music from "@/features/music/components/music";

export default function Home() {
  return (
    <Main>
      <Music />
      <Timer />
    </Main>
  );
}
