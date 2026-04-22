"use client";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";

function Navbar() {
  const qtt = JSON.parse(localStorage.getItem("order") || "[]").reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);

  return (
    <>
      <div className="w-[85dvw] md:w-[65dvw] bg-secondary px-4 py-1.5 flex justify-between items-center mx-auto mt-2 rounded-xl sticky top-2 left-0 z-20">
        <Link href={"/cart"} className="text-primary flex items-center relative">
          <h1 className="text-2xl">coffeein</h1>
          <SiBuymeacoffee size={22} className="rotate-6 mt-0.5" />
          <span className="absolute -top-1 -right-2.5  text-red-600 bg-base-100 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">{qtt}</span>
        </Link>
        {/* md and xl */}
        <ul className="text-primary  gap-2.5 capitalize font-semibold  hidden md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#menu">Menu</Link>
          </li>
          <li>
            <Link href="#location">Location</Link>
          </li>
        </ul>
        <div className="md:block hidden">
          .<button className="btn btn-sm capitalize text-base">order now</button>
        </div>
        {/*  */}
        <div className="navbar-end md:hidden">
          <div className="dropdown border">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <IoMenu className="text-primary" size={24} />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow w-fit px-3.5">
              <li className="text-[20px] capitalize">
                <Link href="/">home</Link>
              </li>
              <li className="text-[20px] capitalize">
                <Link href="#menu">menu</Link>
              </li>
              <li className="text-[20px] capitalize">
                <Link href="#location">location</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
