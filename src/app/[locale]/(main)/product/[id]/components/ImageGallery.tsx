import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { EffectFade, Thumbs } from "swiper/modules";
import { KuiIconButton } from "@/components/kui";
import Image from "next/image";
import clsx from "clsx";

interface ImageGalleryProps {
  images: string[];
  productName: string;
  currentImage: string | undefined;
}

export default function ImageGallery({
  images,
  productName,
  currentImage,
}: ImageGalleryProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const mainSwiperRef = useRef<SwiperType | null>(null);

  const slideTo = (index: number) => {
    if (mainSwiperRef.current && !mainSwiperRef.current.destroyed) {
      mainSwiperRef.current.slideTo(index);
    }
  };

  // When the 'color' option is changed, find the index of the image with the current color and slide to it
  useEffect(() => {
    if (currentImage) {
      slideTo(images.indexOf(currentImage));
    }
  }, [currentImage]);

  return (
    <div>
      <div className="relative">
        {/* Custom icon button */}
        <KuiIconButton
          onClick={() => slideTo(activeSlideIndex - 1)}
          variant="filled"
          disabled={activeSlideIndex === 0}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10"
        >
          <FiChevronLeft />
        </KuiIconButton>
        <KuiIconButton
          onClick={() => slideTo(activeSlideIndex + 1)}
          variant="filled"
          disabled={activeSlideIndex === images.length - 1}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10"
        >
          <FiChevronRight />
        </KuiIconButton>

        {/* The main swiper */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          effect={"fade"}
          modules={[EffectFade, Thumbs]}
          className="mb-2"
          onSlideChange={(swiper) => {
            setActiveSlideIndex(swiper.activeIndex);
          }}
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt={productName}
                className="rounded"
                width={900}
                height={900}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail */}
      <div className="flex flex-wrap gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx(
              "w-12 sm:w-16 h-12 sm:h-16 rounded cursor-pointer transition-colors border-2 rounded cursor-pointer transition-colors overflow-hidden",
              index === activeSlideIndex
                ? "border-kui-primary"
                : "border-kui-border/50 hover:opacity-80"
            )}
            onClick={() => slideTo(index)}
          >
            <Image
              src={image}
              alt={image}
              className="object-contain"
              width={60}
              height={60}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
