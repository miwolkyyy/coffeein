"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { Data } from "@/Data/type";
import { coffeeData } from "@/Data/Data";
import Modal from "./Modal";

interface MenuProps {
  filterType: string;
}

function Menu({ filterType }: MenuProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Data | null>(null);
  const searchTerm = useSelector((state: any) => state.search.searchTerm || "");

  const openModal = (product: Data) => {
    setSelectedProduct(product);
    setModal(true);
  };

  const filteredData = filterType && filterType !== "all" ? coffeeData.filter((item) => item.type === filterType).sort((a, b) => a.name.localeCompare(b.name)) : coffeeData;

  const searchedData = searchTerm ? filteredData.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : filteredData;
  return (
    <>
      <ul id="menu" className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 px-4 py-7 transition-all">
        <Card data={searchedData} openModal={openModal} />
      </ul>
      <Modal modal={modal} setModal={setModal} product={selectedProduct} />
    </>
  );
}

export default Menu;
