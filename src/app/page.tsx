"use client";

import Timer from "@/features/timer/timer";
import Main from "@/components/main";
import Video from "@/features/video/video";

export default function Home() {
  return (
    <Main>
      <Video />
      <Timer />
    </Main>
  );
}
