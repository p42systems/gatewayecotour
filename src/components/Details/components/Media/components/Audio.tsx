import { AudioPlayer } from "../../../../styled_components";
import { MediaArrayProps } from "../../../../../types";

function Audio({ mediaArray }: MediaArrayProps) {
  return (
    <>
      {mediaArray.map((audio, index) => (
        <AudioPlayer
          key={index}
          controls={true}
          autoPlay={false}
          src={audio.path}
        />
      ))}
    </>
  );
}

export default Audio;
