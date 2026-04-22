"use client";
import { Data } from "@/Data/type";

interface OptionProps {
  product: Data;
  selectedSugar: string;
  onChange: (value: string) => void;
}

function Option({ product, selectedSugar, onChange }: OptionProps) {
  return (
    <>
      <h1 className="text-lg">sugar</h1>
      {product.type !== "dessert" && (
        <div className="tabs tabs-box tabs-sm bg-secondary  flex-row flex-nowrap w-full h-full">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab  text-primary checked:text-secondary w-full "
            aria-label="normal"
            value="normal"
            checked={selectedSugar === "normal"}
            onChange={(e) => onChange(e.currentTarget.value)}
          />
          <input
            type="radio"
            name="my_tabs_2"
            className="tab  text-primary checked:text-secondary w-full"
            aria-label="less"
            value="less"
            checked={selectedSugar === "less"}
            onChange={(e) => onChange(e.currentTarget.value)}
          />
          <input
            type="radio"
            name="my_tabs_2"
            className="tab  text-primary checked:text-secondary w-full"
            aria-label="no sugar"
            value="no"
            checked={selectedSugar === "no"}
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </div>
      )}
    </>
  );
}

export default Option;
