import { AudioPlayer } from "../../../../styled_components";
import { MediaArrayProps } from "../../../../../types";

function Audio({ mediaArray }: MediaArrayProps) {
  return (
    <>
      {mediaArray.map((audio) => (
        <AudioPlayer
          controls={true}
          autoPlay={false}
          height={"400px"}
          width={"100%"}
          src={audio.path}
        />
      ))}
    </>
  );
}

export default Audio;
