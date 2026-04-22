"use client";
import React, { useState } from "react";
import { Data } from "@/Data/type";
import Option from "./Option";
import Size from "./Size";

interface ModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: Data | null;
}

function Modal({ modal, setModal, product }: ModalProps) {
  const [count, setCount] = useState<number>(1);
  const [size, setSize] = useState<string>("M");
  const [sugar, setSugar] = useState<string>("less");

  const handleSumbit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const orderData = {
      product: product?.name ?? "unknown",
      size,
      sugar: product?.type === "dessert" ? "n/a" : sugar,
      quantity: count,
      img: product?.img ?? ",",
      total: product ? product.price * count : 0,
    };

    const dataNow = JSON.parse(localStorage.getItem("order") || "[]");

    const updated = [...dataNow, orderData];
    localStorage.setItem("order", JSON.stringify(updated));
    resetForm();
  };

  const resetForm = () => {
    setCount(1);
    setSize("M");
    setSugar("less");
    setModal(false);
  };

  return (
    <>
      <dialog id="my_modal_2" className={`modal ${modal ? "modal-open" : ""}`}>
        <div className={`modal-box ${modal ? "animate-fadeIn" : "animate-fadeOut"} `}>
          {product && (
            <>
              <h3 className="font-bold text-lg text-center">{product.name}</h3>
              <div className="flex gap-3  py-4">
                <div className="w-1/2 h-full flex flex-col">
                  <figure className="">
                    <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
                  </figure>
                  {product.comp && (
                    <div className="mb-3">
                      <h4 className="font-semibold">Ingredients:</h4>
                      <ul className="list-disc list-inside">
                        {product.comp.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className=" h-full w-1/2 space-y-0.5">
                  <Size selectedSize={size} onChange={setSize} />
                  <Option product={product} selectedSugar={sugar} onChange={setSugar} />
                  <div className="flex items-center gap-3 justify-center border-2 rounded-lg w-fit mx-auto p-1 mt-2">
                    <button disabled={count <= 1} className="btn btn-secondary btn-sm rounded-sm disabled:bg-disabled" onClick={() => setCount(Math.max(1, count - 1))}>
                      -
                    </button>
                    <p>{count}</p>
                    <button className="btn btn-secondary btn-sm rounded-sm" onClick={() => setCount(count + 1)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="mx-auto">
                <p className="py-4 text-center">Harga: Rp {product.price.toLocaleString("id-ID")}</p>
                <button className="btn btn-secondary w-full" onClick={handleSumbit}>
                  order
                </button>
              </div>
            </>
          )}
        </div>
        <form method={"dialog"} className="modal-backdrop">
          <button onClick={() => setModal(false)}>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
