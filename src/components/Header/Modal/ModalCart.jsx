import { Button } from "@/components/Button/Button";

export const ModalCart = () => {
  return (
    <div
      className="md:w-96 min-h-60
      flex flex-col gap-4
      absolute top-[100px] md:left-auto right-5 left-5
      px-5 py-10
    bg-white border border-stone-200 rounded-[5px]
    transition duration-75 ease-in
    "
    >
      <div className="border-b border-slate-300 pb-5">
        <h3 className="text-base font-bold">Cart</h3>
      </div>

      <div>conteudo</div>
      <Button>Checkout</Button>
    </div>
  );
};
