"use client";

import Image from "next/image";
import { useSlide } from "@/hooks/useSlide";
import { SlideThumb } from "./SlideThumb";
import { useState } from "react";
import { ModalSlide } from "./Modal/ModalSlide";

export const Gallery = () => {
  const [active, setActive] = useState(false);
  const [img, clickImg] = useSlide();
  const handleActiveModal = () => {
    if (window.innerWidth >= 768) {
      setActive((prev) => !prev);
    }
  };
  return (
    <div className="md:max-w-md w-full flex flex-col gap-8 mb-8 md:mb-0">
      <Image
        className="rounded-2xl h-72 md:h-auto object-cover md:cursor-pointer hover:scale-105 transition-transform"
        src={img}
        alt="Product"
        onClick={handleActiveModal}
      />

      <SlideThumb clickImg={clickImg} />

      {active && <ModalSlide setActive={setActive}/>}
    </div>
  );
};
