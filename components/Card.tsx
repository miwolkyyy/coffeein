"use client";
import React from "react";
import { Data } from "@/Data/type";

interface CardProps {
  data: Data[];
  openModal: (product: Data) => void;
}

const Card: React.FC<CardProps> = ({ data, openModal }) => {
  return (
    <>
      {data
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => {
          return (
            <li key={item.id} className="card-sm bg-base-200 shadow-lg rounded-xl flex flex-col items-center justify-between">
              <figure className="p-1">
                <img src={item.img} alt={item.name} className="h-52 w-full object-cover rounded-xl  p-0.5 border-2 border-base-200 bg-transparent" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title capitalize font-bold">{item.name}</h2>
                <p>Rp {item.price.toLocaleString("id-ID")}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary border-none btn-sm mx-auto" onClick={() => openModal(item)}>
                    buy
                  </button>
                </div>
              </div>
            </li>
          );
        })}
    </>
  );
};

export default Card;
