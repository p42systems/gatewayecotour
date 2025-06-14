import { useAtomValue } from "jotai";

import { detailsQueryAtom } from "../../../../atoms";

import Audio from "./components/Audio";
import Video from "./components/Video";
import Images from "./components/Images";

function Media() {
  const detail = useAtomValue(detailsQueryAtom);

  // Conditional detail.url rendering

  const isMultipleImages = (urlObject: {
    path: string;
    type: string;
    imageAlt: string;
  }) => urlObject.type === "image";

  let mediaType: string;

  let urlVideo: { path: string; type: string; imageAlt: string }[];

  let urlAudio: { path: string; type: string; imageAlt: string }[];

  let urlImages: { path: string; type: string; imageAlt: string }[];

  let mediaPlayer;

  function fetchMediaType(
    urlArray: { path: string; type: string; imageAlt: string }[]
  ) {
    if (!urlArray) {
      mediaType = "";
    } else if (urlArray.length === 1 && urlArray[0].type === "video") {
      mediaType = "video";
    } else if (urlArray.length === 1 && urlArray[0].type === "audio") {
      mediaType = "Z";
    } else if (urlArray.every(isMultipleImages)) {
      mediaType = "images";
    } else if (urlArray.length > 1 && !urlArray.every(isMultipleImages)) {
      mediaType = "mixedMedia";
      urlAudio = urlArray.filter((urlObject) => urlObject.type === "audio");
      urlVideo = urlArray.filter((urlObject) => urlObject.type === "video");
      urlImages = urlArray.filter((urlObject) => urlObject.type === "image");
    }
  }

  function video(
    mediaArray: { path: string; type: string; imageAlt: string }[]
  ) {
    return <Video mediaArray={mediaArray} />;
  }

  function audio(
    mediaArray: { path: string; type: string; imageAlt: string}[]
  ) {
    return <Audio mediaArray={mediaArray} />;
  }

  function images(
    mediaArray: { path: string; type: string; imageAlt: string }[]
  ) {
    return <Images mediaArray={mediaArray} />;
  }

  function mixedMedia() {
    return (
      <>
        {video(urlVideo)}
        {audio(urlAudio)}
        {images(urlImages)}
      </>
    );
  }

  function setMediaPlayer(
    urlArray: { path: string; type: string; imageAlt: string }[]
  ) {
    switch (mediaType) {
      case "video":
        mediaPlayer = video(urlArray);
        break;
      case "images":
        mediaPlayer = images(urlArray);
        break;
      case "audio":
        mediaPlayer = audio(urlArray);
        console.log("audio");
        break;
      case "mixedMedia":
        mediaPlayer = mixedMedia();
        break;
      default:
        break;
    }
  }

  function checkMedia(
    urlArray: { path: string; type: string; imageAlt: string }[]
  ) {
    fetchMediaType(urlArray);

    setMediaPlayer(urlArray);
  }

  checkMedia(detail.url);

  return <>{mediaPlayer}</>;
}

export default Media;
