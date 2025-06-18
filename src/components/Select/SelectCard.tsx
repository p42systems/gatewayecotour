import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { mergeRefs } from "react-merge-refs";
import { useLayoutEffect, useRef } from "react";
import { useSetAtom } from "jotai";
import { useLocation } from "wouter";

import {
  SelectCardContainer,
  SelectCardContent,
  CardHeader,
  CardAddress,
  TourSelectButton,
} from "../styled_components";
import { updateSelectedMarkerAtom } from "../../atoms";

import { SelectCardItemProps } from "../../types";

function SelectCard({ marker }: SelectCardItemProps) {
  const [, setLocation] = useLocation();
  const updateSelectedMarker = useSetAtom(updateSelectedMarkerAtom);
  const [markerMeasureRef] = useMeasure({
    scroll: true,
    polyfill: ResizeObserver,
  });
  const markerRef = useRef<HTMLLIElement>(null);

  return (
    <SelectCardContainer
      aria-label={marker.name}
      ref={mergeRefs([markerRef, markerMeasureRef])}
    >
      <SelectCardContent>
        <CardHeader>{marker.name}</CardHeader>
        {marker.address ? <CardAddress>{marker.address}</CardAddress> : <></>}
        <TourSelectButton
          aria-label={`Start tour at ${marker.name} `}
          title={`Start tour at ${marker.name}`}
          tabIndex={0}
          onClick={() => {
            updateSelectedMarker(marker.id);
            setLocation("/tour");
          }}
        >
          Start Tour
        </TourSelectButton>
      </SelectCardContent>
    </SelectCardContainer>
  );
}

export default SelectCard;
