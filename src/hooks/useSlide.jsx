import { useState } from "react";
import Product1 from "../../public/assets/images/product/product01.jpg";
import Product2 from "../../public/assets/images/product/product02.jpg";
import Product3 from "../../public/assets/images/product/product03.jpg";
import Product4 from "../../public/assets/images/product/product04.jpg";

export const useSlide = () => {
  const images = [Product1, Product2, Product3, Product4];
  const [img, setImg] = useState(images[0]);

  const slideclick = (index) => {
    setImg(images[index]);
  };

  return [img, slideclick];
};
