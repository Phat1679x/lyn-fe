import SimpleSlick from "../SimpleSlick";

function HeadSlick() {
  const data = [
    {
      id: 1,
      span: (
        <div className="text-center text-white text-[12px] md:text-sm ">
          GIẢM 10% VỚI ĐƠN HÀNG ĐẦU TIÊN TỪ 1,800,000 VND.{" "}
          <a className="underline decoration-1" href="">
            ĐĂNG KÝ NGAY
          </a>
        </div>
      ),
    },
    {
      id: 2,
      span: (
        <div className="text-center text-white text-[12px] md:text-sm">
          TRẢI NGHIỆM MUA SẮM SANG TRỌNG VỚI THIẾT KẾ MỚI CỦA WEBSITE LYN.
        </div>
      ),
    },
  ];
  return (
    <div className="w-full p-2 bg-black">
      <SimpleSlick data={data} auto={true} fade={true} />
    </div>
  );
}

export default HeadSlick;
