"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Barista from "@/components/Barista";
import Locations from "@/components/Locations";

export default function Home() {
  const [selectedVariant, setSelectedVariant] = useState<string>("all");

  return (
    <>
      <div className="w-full min-h-[250dvh] bg-primary">
        <Hero selectedVariant={selectedVariant} onVariantChange={setSelectedVariant} />
        <Menu filterType={selectedVariant} />
        <Barista />
        <Locations />
      </div>
    </>
  );
}
