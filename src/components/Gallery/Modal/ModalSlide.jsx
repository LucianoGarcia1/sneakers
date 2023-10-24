import { useSlide } from "@/hooks/useSlide";
import Image from "next/image";
import { SlideThumb } from "../SlideThumb";
import { useState } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const ModalSlide = ({ setActive }) => {
  const [count, setCount] = useState(0);
  const [img, clickImg] = useSlide();
  const countImages = 4;

  const prevCount = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;

      if (newCount < 0) {
        setTimeout(() => {
          clickImg(countImages - 1);
        }, 0);
        return countImages - 1;
      } else {
        clickImg(newCount);
        return newCount;
      }
    });
  };
  const nextCount = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount === countImages) {
        setTimeout(() => {
          clickImg(0);
        }, 0);
        return 0;
      } else {
        clickImg(newCount);
        return newCount;
      }
    });
  };

  return (
    <div className="w-full h-full 2xl:h-screen absolute left-0 top-0  bottom-0 bg-opacity-80 bg-zinc-900 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full gap-8">
        <button
          onClick={() => setActive(false)}
          className="text-4xl text-white"
        >
          <AiOutlineCloseCircle />
        </button>
        <div className="w-full flex items-center justify-center gap-8">
          <button onClick={prevCount} className="text-4xl text-white">
            <BiSkipPrevious />
          </button>

          <Image
            className="rounded-2xl w-1/3 h-72 md:h-auto object-cover"
            src={img}
            alt="Product"
          />
          <button onClick={nextCount} className="text-4xl text-white">
            <BiSkipNext />
          </button>
        </div>

        <div className="lg:w-1/3 w-3/5">
          <SlideThumb clickImg={clickImg} />
        </div>
      </div>
    </div>
  );
};
