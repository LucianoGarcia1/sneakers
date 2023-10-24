"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModalCart } from "./Modal/ModalCart";
import Logo from "../../../public/assets/images/logo.svg";
import Cart from "../../../public/assets/images/icon-cart.svg";
import Profile from "../../../public/assets/images/image-avatar.png";
import Menu from "../../../public/assets/images/icon-menu.svg";
import Close from "../../../public/assets/images/icon-close.svg";

export const Header = () => {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState("hidden");
  const handlehover = () => {
    setModal((prev) => !prev);
    setMenu("hidden");
  };

  const handlemenu = () => {
    setModal(false);

    if (menu === "hidden") {
      setMenu("flex");
    } else if (menu === "flex") {
      setMenu("hidden");
    }
  };

  return (
    <header
      className="w-full
     flex space-x-2 justify-between items-center py-10 md:border-b md:border-slate-300 relative"
    >
      <nav className="flex gap-6 space-x-2 md:gap-12 justify-center items-center">
        <button className="md:hidden" onClick={handlemenu}>
          <Image
            src={menu === "hidden" ? Menu : Close}
            alt="menu"
            className="w-4 h-auto transition duration-75 ease-in"
          />
        </button>

        <Image src={Logo} alt="Sneakers" priority />

        <ul
          className={`
            md:flex md:flex-row md:gap-8 md:static md:bg-transparent
            md:py-0  
            absolute top-[100px] right-0 w-full py-10
            ${menu} 
            bg-orange-500 text-center flex-col gap-4
            transition duration-75 ease-in
          `}
        >
          <li>
            <Link
              href="#"
              className="md:text-slate-500 hover:text-zinc-900 text-white"
            >
              Collections
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="md:text-slate-500 hover:text-zinc-900 text-white"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="md:text-slate-500 hover:text-zinc-900 text-white"
            >
              Wormen
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="md:text-slate-500 hover:text-zinc-900 text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="md:text-slate-500 hover:text-zinc-900  text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center items-center md:gap-12 gap-6">
        <button type="button" onClick={handlehover}>
          <Image src={Cart} alt="Cart" className="w-5 h-auto" />
        </button>
        <Image
          src={Profile}
          alt="Profile"
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div>

      {modal && <ModalCart />}
    </header>
  );
};
