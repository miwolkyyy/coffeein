import { CiDiscount1 } from "react-icons/ci";
import Search from "./Search";
import MenuVariant from "./MenuVariant";

interface HeroProps {
  selectedVariant: string;
  onVariantChange: (variant: string) => void;
}

function Hero({ selectedVariant, onVariantChange }: HeroProps) {
  return (
    <>
      <div className="w-full min-h-[80dvh] flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl font-semibold text-center">
            Need caffeine?
            <br /> come to coffeein.
          </h1>
          <a href="#menu" className="flex items-center gap-1 btn btn-secondary btn-sm transition-all">
            <CiDiscount1 /> 50% on several items
          </a>
        </div>
        <div className="space-y-2 flex justify-center items-center flex-col">
          <Search />
          <MenuVariant selected={selectedVariant} onChange={onVariantChange} />
        </div>
      </div>
    </>
  );
}

export default Hero;
