"use client";
import { Button } from "../Button/Button";
import { BsCart3 } from "react-icons/bs";
import { useCart } from "@/Context/useContext";

export const Details = () => {
  const { cart, setCart, count, setCount, valueBase } = useCart();
  const itemPrice = valueBase * count;
  const handleAddToCart = () => {
    const sneakersItem = {
      id: 1,
      amount: count,
      price: itemPrice,
    };

    setCart(sneakersItem);
    setCount(1);
  };

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="md:max-w-lg w-full">
      <div>
        <span className="uppercase text-orange-500  font-bold tracking-wider text-sm mc">
          SNEAKER COMPANY
        </span>
        <h1 className="text-zinc-900 text-5xl font-bold mt-4 mb-8">
          Fall Limited Edition Sneakers
        </h1>

        <p className="text-slate-500 mb-6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <p className="text-zinc-900 text-3xl font-bold mb-2 flex items-center gap-4">
          R${valueBase}.00
          <span className="text-lg bg-orange-100 text-orange-500 py-[1px] px-3 rounded">
            50%
          </span>
        </p>
        <del className="text-slate-500 font-medium">$250.00</del>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row mt-8">
        <div className="max-w-[150px] w-full py-2 px-8 flex justify-center items-center gap-5 bg-slate-100 rounded-lg">
          <button onClick={handlePrev} className="text-orange-500 text-3xl">
            -
          </button>
          <span className="text-zinc-900 text-base">{count}</span>
          <button onClick={handleCount} className="text-orange-500 text-3xl">
            +
          </button>
        </div>

        <Button click={handleAddToCart}>
          <BsCart3 className="text-2xl" /> Add to cart
        </Button>
      </div>
    </div>
  );
};
