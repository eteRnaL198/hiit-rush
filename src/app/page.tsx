"use client";

import Timer from "@/features/timer/timer";
import Main from "@/layouts/main";
import Bgm from "@/features/bgm/bgm";

export default function Home() {
  return (
    <Main>
      <Bgm />
      <Timer />
    </Main>
  );
}
