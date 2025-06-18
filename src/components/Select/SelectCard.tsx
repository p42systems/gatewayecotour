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

import { MarkerListItemProps } from "../../types";

function SelectCard({ marker, selected, shouldScroll }: MarkerListItemProps) {
  const [, setLocation] = useLocation();
  const updateSelectedMarker = useSetAtom(updateSelectedMarkerAtom);
  const [markerMeasureRef, markerBounds] = useMeasure({
    scroll: true,
    polyfill: ResizeObserver,
  });
  const markerRef = useRef<HTMLLIElement>(null);

  useLayoutEffect(() => {
    // Goals: If the marker isn't in view, scroll it into view but only if it's selected
    // Note: markerBounds propperties will be all be zero when the component is first mounted.

    // If both the top and bottom values are 0, this means the bounds haven't been set yet. This means
    // that the component was just mounted. Therefore, if both the values are 0 and the marker is selected
    // then the view should scroll to the marker. The bahavior should be set to "auto" to avoid the scroll
    // animation scrolling really fast to the marker which is pretty confusing to users and jaring.
    if (markerBounds.top === 0 && markerBounds.bottom === 0 && selected) {
      // WARNING: Block set to "start" or when alignToTop is true, the flex container does some
      // unexpected things. The elements before the scrollable area disappear when the
      // scrollIntoView function is called. Not exactly sure why this happends. So please
      // avoid using those options until the reason for this bahavior is worked out.
      markerRef.current?.scrollIntoView({
        behavior: "auto",
        block: "center", // Reminder: Don't use "start", see the above comment
        inline: "nearest",
      });
    } else if (
      selected &&
      shouldScroll(markerBounds.top, markerBounds.bottom)
    ) {
      markerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center", // Reminder: Don't use "start", see the above comment
        inline: "nearest",
      });
    }
  }, [selected]);

  return (
    <SelectCardContainer
      aria-label={marker.name}
      aria-selected={selected}
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
