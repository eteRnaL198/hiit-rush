"use client";

import Timer from "@/features/timer/components/timer";
import Main from "@/components/main";
import Video from "@/features/video/components/video";

export default function Home() {
  return (
    <Main>
      <Video />
      <Timer />
    </Main>
  );
}
