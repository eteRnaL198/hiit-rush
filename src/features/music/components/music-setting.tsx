import Button from "@/components/button";
import TextInput from "@/components/text-input";
import { updateStorage } from "@/services/localstorage";
import useMusicSettings from "../helper/useMusicSettings";
import { MusicData } from "@/utils/types";

const MusicSetting = () => {
  const { id, setId } = useMusicSettings();

  return (
    <div className="p-6 rounded-xl shadow-lg">
      <div className="grid grid-cols-2 mb-4">
        <label
          className="flex justify-center items-center"
          htmlFor="playlist-id"
        >
          Playlist ID
        </label>
        <TextInput id="playlist-id" value={id} setValue={setId} />
      </div>
      <div className="mt-8 flex justify-center">
        <Button
          label="Save"
          onClick={() => {
            updateStorage<MusicData>({
              music: { id: id },
            });
          }}
        />
      </div>
    </div>
  );
};
export default MusicSetting;
