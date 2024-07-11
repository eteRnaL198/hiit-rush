"use client";

import Main from "@/components/main";
import TimerSettings from "@/features/timer/components/timer-settings";
import MusicSetting from "@/features/music/components/music-setting";

const Setting = ({}) => {
  return (
    <Main>
      <div className="flex flex-col gap-16">
        <MusicSetting />
        <TimerSettings />
      </div>
    </Main>
  );
};

export default Setting;
