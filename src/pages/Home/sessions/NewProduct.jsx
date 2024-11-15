import React from "react";
import Button from "../../../components/Button";

function NewProduct() {
  return (
    <div className="w-full relative text-white my-4">
      <img
        src="https://lynvn.com/cdn/shop/files/20241114_HOMEPAGE_DT_LYNVN_GARETH-DIAMOND_2000X550_8a1251bf-9077-4446-bf94-a69af95dfa40.jpg?v=1731473684&width=1800"
        alt="new Product"
      />
      <div className="absolute top-0 right-0 w-full md:w-1/2 flex flex-col justify-center items-end p-4 h-full">
        <label className="uppercase text-[10px] md:text-[12px]">
          the new definition of the Gareth bag
        </label>
        <label className="text-xl md:text-3xl font-bold tracking-widest my-4">
          DIAMOND BUCKET
        </label>
        <Button
          label={"VIEW PRODUCT"}
          className={
            "text-white text-[12px] px-2 py-1 bg-transparent hover:border-b border-white transition-all duration-300 ease-in-out"
          }
        />
      </div>
    </div>
  );
}

export default NewProduct;
