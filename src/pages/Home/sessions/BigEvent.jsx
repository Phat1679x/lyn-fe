import Button from "../../../components/Button";
import WarningSlick from "../../../components/WarningSlick";

function BigEvent() {
  const data = [
    {
      id: 1,
      span: (
        <div className="text-center text-white font-medium text-[10px] md:text-[16px] mx-4 md:mx-0">
          MIỄN PHÍ VẬN CHUYỂN TẤT CẢ ĐƠN HÀNG
        </div>
      ),
    },
    {
      id: 2,
      span: (
        <div className="text-center text-white font-medium text-[10px] md:text-[16px] mx-4 md:mx-0">
          MIỄN PHÍ VẬN CHUYỂN TẤT CẢ ĐƠN HÀNG
        </div>
      ),
    },
    {
      id: 3,
      span: (
        <div className="text-center text-white font-medium text-[10px] md:text-[16px] mx-4 md:mx-0">
          MIỄN PHÍ VẬN CHUYỂN TẤT CẢ ĐƠN HÀNG
        </div>
      ),
    },
    {
      id: 4,
      span: (
        <div className="text-center text-white font-medium text-[10px] md:text-[16px] mx-4 md:mx-0">
          MIỄN PHÍ VẬN CHUYỂN TẤT CẢ ĐƠN HÀNG
        </div>
      ),
    },
  ];
  return (
    <div className="w-full ">
      <Button
        label={
          <img src="https://lynvn.com/cdn/shop/files/20241111_HERO_DT_LYNVN_DDAY11.11_2000X750_e695a3c7-cddd-485b-8017-9352643461e9.gif?v=1730965767&width=2000"></img>
        }
      />
      <div className="w-full bg-red-500">
        <WarningSlick
          data={data}
          auto={true}
          speed={4000}
          show={3}
          scroll={1}
          cssEase="linear"
        />
      </div>
    </div>
  );
}

export default BigEvent;
