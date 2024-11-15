import CustomSlick from "../CustomSlick";
import CardProduct from "../CardProduct";
import Button from "../Button";

function BagSlick_BestSeller() {
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
    },
  ];

  const data = bags.map((bag) => ({
    id: bag.id,
    span: (
      <div className="p-6">
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
          className="bg-transparent"
        />
      </div>
    ),
  }));

  return (
    <div className="px-20">
      <CustomSlick
        data={data}
        arrows={true}
        auto={true}
        pause={true}
        show={3}
        scroll={1}
      />
      <div className="my-4 flex items-center justify-center">
        <Button label={"VIEW ALL"} className={"text-white py-2 px-4"} />
      </div>
    </div>
  );
}

export default BagSlick_BestSeller;
