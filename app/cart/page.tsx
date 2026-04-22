"use client";

import { CiCircleRemove } from "react-icons/ci";

export default function Cart() {
  const cartItem = JSON.parse(localStorage.getItem("order") || "[]");
  const removeItem = (id: number) => {
    const updatedCart = cartItem.filter((_: any, i: number) => i !== id);
    localStorage.setItem("order", JSON.stringify(updatedCart));
    window.location.reload();
  };
  return (
    <>
      {cartItem.map((item: any, id: number) => {
        return (
          <div key={id} className="card bg-base-200 w-72 mx-auto mt-8 shadow-lg px-2 py-1.5 bg relative">
            <CiCircleRemove size={25} className="absolute top-2 right-2 btn btn-error btn-circle btn-sm" onClick={() => removeItem(id)} />
            <h2 className="text-center font-bold uppercase">{item.product}</h2>
            <div className=" flex flex-row gap-2 py-0.5">
              <figure className="w-1/2">
                <img src={item.img} alt={item.product} className="rounded-md" />
              </figure>
              <div className="card-body">
                <p className="text-secondary">Quantity: {item.quantity}</p>
                <p className="text-secondary">Size: {item.size}</p>
                <p className="text-secondary">Sugar: {item.sugar}</p>
                <p className="text-lg font-bold">Rp{item.total.toLocaleString("id-ID")}</p>
              </div>
            </div>
            <button className="btn btn-block btn-secondary">order</button>
          </div>
        );
      })}
      <div className="w-full px-6 py-4 justify-center items-center flex flex-col mt-8">
        <h1>
          total order :<span className="font-bold">Rp{cartItem.reduce((total: number, item: any) => total + item.total, 0).toLocaleString("id-ID")}</span>
        </h1>
        <button className="btn btn-block btn-secondary">order</button>
      </div>
    </>
  );
}
