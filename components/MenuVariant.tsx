"use client";
import { FaCoffee } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { VscCoffee } from "react-icons/vsc";

interface MenuVariantProps {
  selected: string;
  onChange: (value: string) => void;
}

function MenuVariant({ selected, onChange }: MenuVariantProps) {
  return (
    <>
      <div className="tabs tabs-border">
        <label className="tab">
          <input type="radio" name="option" checked={selected === "all"} onChange={() => onChange("all")} />
          <p className="text-xl font-bold">All</p>
        </label>
        <label className="tab">
          <input type="radio" name="option" checked={selected === "coffee"} onChange={() => onChange("coffee")} />
          <FaCoffee size={24} />
        </label>
        <label className="tab">
          <input type="radio" name="option" checked={selected === "iced_coffee"} onChange={() => onChange("iced_coffee")} />
          <SiBuymeacoffee size={24} />
        </label>
        <label className="tab">
          <input type="radio" name="option" checked={selected === "tea"} onChange={() => onChange("tea")} />
          <VscCoffee size={24} />
        </label>
        <label className="tab">
          <input type="radio" name="option" checked={selected === "dessert"} onChange={() => onChange("dessert")} />
          <GiCakeSlice size={24} />
        </label>
      </div>
    </>
  );
}

export default MenuVariant;
