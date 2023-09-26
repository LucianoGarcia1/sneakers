export const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="bg-orange-500 text-white w-full py-3 px-4 rounded-[5px] font-semibold font"
    >
      {children}
    </button>
  );
};
