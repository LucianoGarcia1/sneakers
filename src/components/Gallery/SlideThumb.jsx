import Image from "next/image";
import Thumb1 from "../../../public/assets/images/thumb/thumb01.jpg";
import Thumb2 from "../../../public/assets/images/thumb/thumb02.jpg";
import Thumb3 from "../../../public/assets/images/thumb/thumb03.jpg";
import Thumb4 from "../../../public/assets/images/thumb/thumb04.jpg";

export const SlideThumb = ({ clickImg }) => {
  return (
    <div className="w-full flex gap-4 md:gap-8">
      <button onClick={() => clickImg(0)}>
        <Image
          className="rounded-xl object-cover md:h-20 transition-all hover:border-4 hover:p-1 border-orange-500"
          src={Thumb1}
          alt="thumb"
        />
      </button>
      <button onClick={() => clickImg(1)}>
        <Image
          className="rounded-xl object-cover md:h-20 transition-all hover:border-4 hover:p-1 border-orange-500"
          src={Thumb2}
          alt="thumb"
        />
      </button>
      <button onClick={() => clickImg(2)}>
        <Image
          className="rounded-xl object-cover md:h-20 transition-all hover:border-4 hover:p-1 border-orange-500"
          src={Thumb3}
          alt="thumb"
        />
      </button>
      <button onClick={() => clickImg(3)}>
        <Image
          className="rounded-xl object-cover md:h-20 transition-all hover:border-4 hover:p-1 border-orange-500"
          src={Thumb4}
          alt="thumb"
        />
      </button>
    </div>
  );
};
