import { Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useScreenDetector } from "../../../../../hooks/useScreenDetector";

import {
  SlideTitle,
  SlideDescription,
  DetailsImage,
  DetailsCarousel,
  DetailsCarouselImage,
  CarouselDotGroup,
  CarouselButtonFirst,
  CarouselButtonBack,
  CarouselButtonNext,
  CarouselButtonLast,
} from "../../../../styled_components";

import { MediaArrayProps } from "../../../../../types";

function Images({ mediaArray }: MediaArrayProps) {
  const { isMobile } = useScreenDetector();

  return (
    <>
      {mediaArray.length === 1 ? (
        <DetailsImage
          src={mediaArray[0].path ?? undefined}
          alt={mediaArray[0].imageAlt ?? undefined}
        />
      ) : (
        <DetailsCarousel
          visibleSlides={isMobile ? 1 : 2}
          totalSlides={mediaArray.length}
          naturalSlideWidth={300}
          naturalSlideHeight={400}
          isIntrinsicHeight
        >
          <Slider>
            {mediaArray.map((image, index) => {
              return (
                <Slide tag="div" index={index} key={index}>
                  {image.title ? (
                    <SlideTitle>
                      <span className="img-description-span">
                        {image.title}
                      </span>
                    </SlideTitle>
                  ) : null}
                  <DetailsCarouselImage
                    src={image.path}
                    alt={image.imageAlt ?? undefined}
                    hasMasterSpinner={true}
                  />
                  {image.description ? (
                    <SlideDescription>
                      {image.description.map((item: string, index: number) => (
                        <span key={index} className="img-description-span">
                          {item}
                        </span>
                      ))}
                    </SlideDescription>
                  ) : null}
                </Slide>
              );
            })}
          </Slider>
          {mediaArray.length > 2 || isMobile ? (
            <>
              <CarouselDotGroup />
              <CarouselButtonFirst>First</CarouselButtonFirst>
              <CarouselButtonBack>Back</CarouselButtonBack>
              <CarouselButtonNext>Next</CarouselButtonNext>
              <CarouselButtonLast>Last</CarouselButtonLast>
            </>
          ) : null}
        </DetailsCarousel>
      )}
    </>
  );
}

export default Images;
