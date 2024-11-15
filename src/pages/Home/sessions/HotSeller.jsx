import React, { useState, useEffect } from "react";
import SimpleSlick from "../../../components/SimpleSlick";
import CardProduct from "../../../components/CardProduct";
import Button from "../../../components/Button";

function HotSeller() {
  const bags = [
    {
      id: 1,
      code: "LL24FBS385",
      name: "Rosetta Shoulder Bag - Black",
      price: "1.950.200 ₫",
      imgMain:
        "https://lynvn.com/cdn/shop/files/LL24FBS385_BLK000_1_c8e85050-774a-457d-895a-c2a1f784e695.jpg?v=1724865119&width=300",
      img1: "https://lynvn.com/cdn/shop/files/LL24FBS385_BLK000_2_36494200-3500-4b3c-8bbb-56a2ff1d16ec.jpg?v=1724865119&width=300",
      img2: "https://lynvn.com/cdn/shop/files/LL24FBS385_BLK000_3_2b6ec3c8-65a2-4fa9-9807-9c78fbe3253e.jpg?v=1724865119&width=300",
      imgReview1:
        "https://lynvn.com/cdn/shop/files/20241114_HOMEPAGE_BOTH_LYNVN_SISTHESEASON_1080X1080_8515dbb7-30c8-476d-8729-12bb3a709529.jpg?v=1731473684&width=1000",
    },
    {
      id: 2,
      code: "LL23FBF134",
      name: "Serena M Crossbody Bag - Black",
      price: "2.048.200 ₫",
      imgMain:
        "https://lynvn.com/cdn/shop/files/LL23FBF134_BLK000_1_e13b8a74-8ecd-4dc6-867e-6cf91970b8ca.jpg?v=1691032242&width=300",
      img1: "https://lynvn.com/cdn/shop/files/LL23FBF134_BLK000_2_a58f54ee-1872-4dd4-beed-0628430220e8.jpg?v=1691032242&width=300",
      img2: "https://lynvn.com/cdn/shop/files/LL23FBF134_BLK000_3_93646ad2-cad6-4cfc-9358-3037f89c8884.jpg?v=1691032242&width=300",
      imgReview1:
        "https://lynvn.com/cdn/shop/files/20241114_HOMEPAGE_BOTH_LYNVN_SISTHESEASON_1080X1080_8515dbb7-30c8-476d-8729-12bb3a709529.jpg?v=1731473684&width=1000",
    },
    {
      id: 3,
      code: "LL23FBS215",
      name: "Raff S Crossbody Bag - Ivory",
      price: "2.048.200 ₫",
      imgMain:
        "https://lynvn.com/cdn/shop/files/LL23FBS215_WHT600_1_872f2351-4357-4d73-9242-696eab4150f9.jpg?v=1693848222&width=300",
      img1: "https://lynvn.com/cdn/shop/files/LL23FBS215_WHT600_2_dbaa1423-b5d2-47b4-9d81-4a2f6aeaa7fd.jpg?v=1693848222&width=300",
      img2: "https://lynvn.com/cdn/shop/files/LL23FBS215_WHT600_3_9e4e77a7-7540-4f87-b4d3-e4d993902bca.jpg?v=1693848222&width=300",
      imgReview1:
        "https://lynvn.com/cdn/shop/files/20241114_HOMEPAGE_BOTH_LYNVN_SISTHESEASON_1080X1080_8515dbb7-30c8-476d-8729-12bb3a709529.jpg?v=1731473684&width=1000",
    },
  ];

  const [desktop, setDesktop] = useState(true);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setDesktop(false);
        setMobile(true);
      } else {
        setDesktop(true);
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // Kiểm tra kích thước màn hình khi component được mount
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [desktop, mobile]);

  const data = bags.map((bag) => ({
    id: bag.id,
    span: (
      <div className="px-0 md:px-20 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 ">
          <img src={bag.imgReview1} alt="imgReview" className="w-full" />
        </div>
        {desktop && (
          <Button
            label={
              <>
                <CardProduct
                  title={bag.name}
                  content={bag.price}
                  imageUrl={bag.imgMain}
                  onHoverImage={bag.img1}
                />
              </>
            }
            className="bg-transparent w-1/2 justify-center"
          />
        )}
        {mobile && (
          <Button
            label={"VIEW PRODUCT"}
            className={
              "text-white text-sm my-3 py-2 w-full justify-center tracking-widest"
            }
          />
        )}
      </div>
    ),
  }));

  return (
    <div className="px-4 md:px-20 flex flex-col items-center justify-center my-10">
      <label className="uppercase font-bold tracking-widest text-2xl my-10">
        Must-Have of the Moment
      </label>
      <div className="w-full ">
        <SimpleSlick data={data} auto={true} fade={true} arrows={desktop} />
      </div>
    </div>
  );
}

export default HotSeller;
