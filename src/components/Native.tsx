import drop from "../assets/dropdown-arrow-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { setPlanType } from "../store/PricingCardSlice";
import { State } from "../interface/interface";

const Native = () => {
  const dispatch = useDispatch();
  const planType = useSelector((state: State) => state.pricingCard.plan);
  return (
    <section className="lg:flex gap-[2rem] justify-center lg:mt-[3rem]">
      <div>
        <div className={`hidden lg:flex text-center`}>
          <div
            onClick={() => {
              dispatch(setPlanType("foreigner"));
            }}
            className={`cursor-pointer border-[3px] w-[10rem] py-[0.5rem] rounded-l-full ${
              planType === "foreigner"
                ? "border-[#CE4A37]"
                : "border-[#909090] opacity-50"
            }`}
          >
            Foreigner
          </div>
          <div
            onClick={() => {
              dispatch(setPlanType("native"));
            }}
            className={`cursor-pointer border-[3px] w-[10rem] py-[0.5rem] rounded-r-full ${
              planType === "native"
                ? "border-[#CE4A37]"
                : "border-[#909090] opacity-50"
            }`}
          >
            Native
          </div>
        </div>{" "}
        <p className="text-sm pb-[1rem] mt-[1rem] text-[#9F9F9F]">
          Class duration
        </p>
        <div className="flex gap-[0.5rem] relative w-full">
          <select className="flex outline-none appearance-none bg-white justify-between rounded-xl shadow-input-shadow px-[1.5rem] py-[0.8rem] items-center w-full gap-[0.5rem]">
            <option value="">25 minutes</option>
            <option value="option1">45 minutes</option>
            <option value="option2">45 minutes</option>
            <option value="option3">45 minutes</option>
          </select>
          <img
            src={drop}
            alt="drop"
            className="h-[1.5rem] w-[1.5rem] absolute top-[0.9rem] right-[1.5rem]"
          />
        </div>
      </div>
      <div className="overflow-x-auto lg:overflow-visible lg:overflow-x-scroll">
        <div className="mt-[1rem] pl-[2.5rem] w-[63rem]">
          <div className="flex gap-[1rem] px-[1rem] py-[1rem]">
            <div className="bg-white w-[20rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
              <h1 className="font-[700] text-[2.1rem]">5 Classes</h1>
              <hr className="border-dashed border-[#CE4A37] w-[9rem] mx-auto" />
              <div className="flex justify-center mt-[2.5rem] gap-[1rem] items-center">
                <p className="line-through text-gray-500">1600 ¥ </p>
                <p className="border-2 rounded-full px-[0.5rem] border-black">
                  -40%
                </p>
              </div>
              <h1 className="text-[#ce4a37] font-[800] text-[3.5rem] pt-[0.5rem]">
                960 ¥
              </h1>
              <p>per class</p>

              <div className="bg-[#f3f3f3] py-[1rem] font-medium mt-[1.5rem]">
                <div className="flex justify-center gap-[0.5rem]">
                  <p className="text-[#b9b9b9] line-through ">128 000 ¥</p>
                  <p>76 800 ¥</p>
                </div>
              </div>
              <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
                Proceed
              </button>
            </div>

            <div className="bg-white w-[20rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
              <h1 className="font-[700] text-[2.1rem]">5 Classes</h1>
              <hr className="border-dashed border-[#CE4A37] w-[9rem] mx-auto" />
              <div className="flex justify-center mt-[2.5rem] gap-[1rem] items-center">
                <p className="line-through text-gray-500">1600 ¥ </p>
                <p className="border-2 rounded-full px-[0.5rem] border-black">
                  -40%
                </p>
              </div>
              <h1 className="text-[#ce4a37] font-[800] text-[3.5rem] pt-[0.5rem]">
                960 ¥
              </h1>
              <p>per class</p>

              <div className="bg-[#f3f3f3] py-[1rem] font-medium mt-[1.5rem]">
                <div className="flex justify-center gap-[0.5rem]">
                  <p className="text-[#b9b9b9] line-through ">128 000 ¥</p>
                  <p>76 800 ¥</p>
                </div>
              </div>
              <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
                Proceed
              </button>
            </div>

            <div className="bg-white w-[20rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
              <h1 className="font-[700] text-[2.1rem]">5 Classes</h1>
              <hr className="border-dashed border-[#CE4A37] w-[9rem] mx-auto" />
              <div className="flex justify-center mt-[2.5rem] gap-[1rem] items-center">
                <p className="line-through text-gray-500">1600 ¥ </p>
                <p className="border-2 rounded-full px-[0.5rem] border-black">
                  -40%
                </p>
              </div>
              <h1 className="text-[#ce4a37] font-[800] text-[3.5rem] pt-[0.5rem]">
                960 ¥
              </h1>
              <p>per class</p>

              <div className="bg-[#f3f3f3] py-[1rem] font-medium mt-[1.5rem]">
                <div className="flex justify-center gap-[0.5rem]">
                  <p className="text-[#b9b9b9] line-through ">128 000 ¥</p>
                  <p>76 800 ¥</p>
                </div>
              </div>
              <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Native;
