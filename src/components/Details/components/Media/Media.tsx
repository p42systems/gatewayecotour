import { useAtomValue } from "jotai";

import { detailsQueryAtom } from "../../../../atoms";

import Audio from "./components/Audio";
import Video from "./components/Video";
import Images from "./components/Images";

function Media() {
  const detail = useAtomValue(detailsQueryAtom);

  const isMultipleImages = (urlObject: {
    path: string;
    type: string;
    imageAlt?: string;
    description?: string[];
    title?: string;
  }) => urlObject.type === "image";

  let mediaType: string | null;

  let urlVideo: { path: string; type: string; imageAlt?: string }[];
  let urlAudio: { path: string; type: string }[];
  let urlImages: {
    path: string;
    type: string;
    imageAlt?: string;
    title?: string;
    description?: string[];
  }[];

  let mediaPlayer;

  function fetchMediaType(
    urlArray: {
      path: string;
      type: string;
      imageAlt?: string;
      title?: string;
      description?: string[];
    }[]
  ) {
    if (!urlArray) {
      mediaType = null;
    } else if (urlArray.length === 1 && urlArray[0].type === "video") {
      mediaType = "video";
    } else if (urlArray.length === 1 && urlArray[0].type === "audio") {
      mediaType = "audio";
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
    mediaArray: { path: string; type: string; imageAlt?: string }[]
  ) {
    return <Video mediaArray={mediaArray} />;
  }

  function audio(mediaArray: { path: string; type: string }[]) {
    return <Audio mediaArray={mediaArray} />;
  }

  function images(
    mediaArray: {
      path: string;
      type: string;
      imageAlt?: string;
      description?: string[];
      title?: string;
    }[]
  ) {
    return <Images mediaArray={mediaArray} />;
  }

  function mixedMedia() {
    return (
      <>
        {urlVideo ? video(urlVideo) : <></>}
        {urlAudio ? audio(urlAudio) : <></>}
        {urlImages ? images(urlImages) : <></>}
      </>
    );
  }

  function setMediaPlayer(
    urlArray: {
      path: string;
      type: string;
      imageAlt?: string;
      description?: string[];
      title?: string;
    }[]
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
        break;
      case "mixedMedia":
        mediaPlayer = mixedMedia();
        break;
      default:
        break;
    }
  }

  function checkMedia(
    urlArray: {
      path: string;
      type: string;
      imageAlt?: string;
      description?: string[];
      title?: string;
    }[]
  ) {
    fetchMediaType(urlArray);
    setMediaPlayer(urlArray);
  }
  checkMedia(detail.url);
  return <>{mediaPlayer}</>;
}

export default Media;
