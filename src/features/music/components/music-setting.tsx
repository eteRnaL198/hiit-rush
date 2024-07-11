import Button from "@/components/button";
import TextInput from "@/components/text-input";
import { updateStorage } from "@/services/localstorage";
import useMusicSettings from "../helper/useMusicSettings";
import { MusicData } from "@/utils/types";

const MusicSetting = () => {
  const { id, setId } = useMusicSettings();

  return (
    <div className="p-6 rounded-xl shadow-lg">
      <div className="flex justify-around mb-4">
        <p>Playlist ID</p>
        <TextInput value={id} setValue={setId} />
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
