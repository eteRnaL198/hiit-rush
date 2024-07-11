import { getStoredData } from "@/services/localstorage";
import { MusicData } from "@/utils/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_MUSIC_ID } from "@/utils/constants";

const useMusicSettings = () => {
  const [id, setId] = useState(DEFAULT_MUSIC_ID);
  const router = useRouter();
  useEffect(() => {
    const storedSettings = getStoredData<MusicData>("music");
    if (!storedSettings) return;
    setId(storedSettings.id);
  }, [router]);

  return { id, setId };
};

export default useMusicSettings;
