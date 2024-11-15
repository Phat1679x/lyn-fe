import React, { useState } from "react";
import Button from "../../../components/Button";
import BagSlick_BestSeller from "../../../components/slick-group/BagSlick_BestSeller";
import WalletSlick_BestSeller from "../../../components/slick-group/WalletSlick_BestSeller";
import ShoesSlick_BestSeller from "../../../components/slick-group/ShoesSlick_BestSeller";
import AccessorySlick_BestSeller from "../../../components/slick-group/AccessorySlick_BestSeller";

function BestSeller() {
  const [openBag, setOpenBag] = useState(true);
  const [openWallet, setOpenWallet] = useState(false);
  const [openShose, setOpenShose] = useState(false);
  const [openAccessory, setOpenAccessory] = useState(false);

  const handleOpenBag = () => {
    setOpenBag(true);
    setOpenWallet(false);
    setOpenShose(false);
    setOpenAccessory(false);
  };

  const handleOpenWallet = () => {
    setOpenBag(false);
    setOpenWallet(true);
    setOpenShose(false);
    setOpenAccessory(false);
  };

  const handleOpenShoset = () => {
    setOpenBag(false);
    setOpenWallet(false);
    setOpenShose(true);
    setOpenAccessory(false);
  };

  const handleOpenAccessory = () => {
    setOpenBag(false);
    setOpenWallet(false);
    setOpenShose(false);
    setOpenAccessory(true);
  };

  return (
    <div className="flex flex-col items-center my-8">
      <label className="text-[12px] my-2 font-bold tracking-widest text-gray-700 ">
        BEST SELLER OF THE MOMENT
      </label>
      <div className="flex justify-center">
        <Button
          label={"BAGS"}
          className={`px-3 py-1 text-2xl text-black bg-transparent tracking-widest font-normal mx-4 ${
            openBag ? "border-b-2 border-black" : ""
          }`}
          onClick={handleOpenBag}
        />
        <Button
          label={"WALLETS"}
          className={`px-3 py-1 text-2xl text-black bg-transparent tracking-widest font-normal mx-4 ${
            openWallet ? "border-b-2 border-black" : ""
          }`}
          onClick={handleOpenWallet}
        />
        <Button
          label={"SHOES"}
          className={`px-3 py-1 text-2xl text-black bg-transparent tracking-widest font-normal mx-4 ${
            openShose ? "border-b-2 border-black" : ""
          }`}
          onClick={handleOpenShoset}
        />
        <Button
          label={"ACCESSORIES"}
          className={`px-3 py-1 text-2xl text-black bg-transparent tracking-widest font-normal mx-4 ${
            openAccessory ? "border-b-2 border-black" : ""
          }`}
          onClick={handleOpenAccessory}
        />
      </div>
      <div className="w-full">
        {openBag && (
          <>
            <BagSlick_BestSeller />
          </>
        )}
        {openWallet && (
          <>
            <WalletSlick_BestSeller />
          </>
        )}
        {openShose && (
          <>
            <ShoesSlick_BestSeller />
          </>
        )}
        {openAccessory && (
          <>
            <AccessorySlick_BestSeller />
          </>
        )}
      </div>
    </div>
  );
}

export default BestSeller;
