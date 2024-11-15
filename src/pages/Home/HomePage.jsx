import BigEvent from "./sessions/BigEvent";
import BestSeller from "./sessions/BestSeller";
import NewProduct from "./sessions/NewProduct";
import HotSeller from "./sessions/HotSeller";
import Button from "../../components/Button";

function HomePage() {
  return (
    <div className="w-full ">
      <BigEvent />
      <BestSeller />
      <NewProduct />
      <HotSeller />
      <Button
        label={
          <>
            <img
              src="https://lynvn.com/cdn/shop/files/20241111_HOMEPAGE_DT_LYNVN_INFINITEWINTER_2000X625_721905e9-bcaa-4d05-b50b-cdf2b6faf3ab.jpg?v=1730966446&width=2000"
              alt=""
              className="w-full"
            />
          </>
        }
        className={"w-full"}
      />
      <div className="my-10 text-center">
        <label className="w-full text-3xl font-bold tracking-widest">
          FIND YOUR BENEFITS
        </label>
      </div>
      <Button
        label={
          <>
            <img
              src="https://lynvn.com/cdn/shop/files/20241114_HOMEPAGE_DT_LYNVN_SECRETSALE_2000X625_e911856a-1bf3-43ed-a8ab-d285baef5fbf.jpg?v=1731481969&width=2000"
              alt=""
              className="w-full"
            />
          </>
        }
        className={"w-full"}
      />
    </div>
  );
}

export default HomePage;
