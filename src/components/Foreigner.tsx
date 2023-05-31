import drop from "../assets/dropdown-arrow-svgrepo-com.svg";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../interface/interface";
import { setPlanType } from "../store/PricingCardSlice";

const Foreigner = () => {
  const dispatch = useDispatch();
  const planType = useSelector((state: State) => state.pricingCard.plan);
  return (
    <>
      <div className="mt-[3rem]">
        <div className="flex gap-[0.5rem] flex-col mt-[1rem]">
          <div className={`flex text-center`}>
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
          </div>
          <div className="w-[20rem] relative">
            <p className="text-sm pb-[1rem] text-[#9F9F9F]">Class duration</p>
            <select className="bg-white relative outline-none appearance-none justify-between rounded-xl shadow-input-shadow px-[1.5rem] py-[0.8rem] items-center w-[20rem] gap-[0.5rem]">
              <option value={60}>60 minutes</option>
              <option value={25}>25 minutes</option>
              <option value={45}>45 minutes</option>
              <option value={90}>90 minutes</option>
            </select>
            <img
              src={drop}
              alt="drop"
              className="h-[1.5rem] w-[1.5rem] absolute top-[3.1rem] right-[1.2rem]"
            />
          </div>
          <div className="w-[20rem] relative">
            <p className="text-sm pb-[1rem] text-[#9F9F9F]">Number classes</p>
            <select className="flex relative bg-white outline-none appearance-none justify-between rounded-xl shadow-input-shadow px-[1.5rem] py-[0.8rem] items-center w-[20rem] gap-[0.5rem]">
              <option value={5}>5 classes</option>
              <option value={10}>10 classes</option>
              <option value={20}>20 classes</option>
              <option value={40}>40 classes</option>
            </select>
            <img
              src={drop}
              alt="drop"
              className="h-[1.5rem] w-[1.5rem] absolute top-[3.1rem] right-[1.2rem]"
            />
          </div>
          <div className="mt-[3rem]">
            <p className="bg-[#f3f3f3] py-[1rem] text-[#262626] pl-[4rem]">
              Flexible schedule
            </p>
            <p className="bg-white py-[1rem] text-[#262626] pl-[4rem]">
              Reschedule class
            </p>
            <p className="bg-[#f3f3f3] py-[1rem] text-[#262626] pl-[4rem]">
              Free consultations
            </p>
            <p className="bg-white py-[1rem] text-[#262626] pl-[4rem]">
              Internal credits
            </p>
            <p className="bg-[#f3f3f3] py-[1rem] text-[#262626] pl-[4rem]">
              Bonus program
            </p>
            <p className="bg-white py-[1rem] text-[#262626] pl-[4rem]">
              Referral program
            </p>
            <p className="bg-[#f3f3f3] py-[1rem] text-[#262626] pl-[4rem]">
              Total bundle costs
            </p>
          </div>
          <p className="mt-[2rem] pl-[4rem] text-[1.3rem] font-semibold">
            Or, get a trial class:
          </p>
          <div className="flex justify-left pl-[3.4rem]">
            <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[3rem] py-[0.7rem] rounded-full">
              Pay 500 ¥
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-[16rem] left-[30rem] pr-[2rem]">
        <div className="flex gap-[2.5rem]">
          <div className=" bg-white w-[20rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
            <h1 className="font-[700] text-[2.1rem]">Regular</h1>
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
            <div className="mt-[2.3rem]">
              <p className="bg-[#f3f3f3] py-[1rem] text-[#C1C1C1]">----</p>
              <p className="bg-white py-[1rem] text-[#C1C1C1]">----</p>
              <p className="bg-[#f3f3f3] py-[1rem] text-[#C1C1C1]">----</p>
              <p className="bg-white py-[1rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-[#f3f3f3] py-[1rem] text-[#C1C1C1]">----</p>
              <p className="bg-white py-[1rem] text-[#C1C1C1]">----</p>
            </div>
            <div className="bg-[#f3f3f3] py-[1.5rem] font-medium">
              <div className="flex justify-center gap-[1rem]">
                <p className="text-[#b9b9b9] line-through ">128 000 ¥</p>
                <p>76 800 ¥</p>
              </div>
            </div>
            <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
              Proceed
            </button>
          </div>

          {/* ////////// */}
          <div className="bg-white w-[20rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
            <h1 className="font-[700] text-[2.1rem]">Plus</h1>
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
            <div className="mt-[2.3rem]">
              <p className="bg-[#f3f3f3] py-[1rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-white py-[1rem]">4 times a month</p>
              <p className="bg-[#f3f3f3] py-[1rem] text-[#CE4A37]">----</p>
              <p className="bg-white py-[1rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-[#f3f3f3] py-[1rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-white py-[1rem] text-[#CE4A37]">&#10003;</p>
            </div>
            <div className="bg-[#f3f3f3] py-[1.5rem] font-medium">
              <div className="flex justify-center gap-[1rem]">
                <p className="text-[#b9b9b9] line-through ">128 000 ¥</p>
                <p>76 800 ¥</p>
              </div>
            </div>
            <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
              Proceed
            </button>
          </div>

          {/* --------------- */}
          <div className="bg-white w-[20rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
            <h1 className="font-[700] text-[2.1rem]">Flexi</h1>
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
            <div className="mt-[2.3rem]">
              <p className="bg-[#f3f3f3] py-[1rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-white py-[1rem]">No limit</p>
              <p className="bg-[#f3f3f3] py-[1rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-white py-[1rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-[#f3f3f3] py-[1rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-white py-[1rem] text-[#CE4A37]">&#10003;</p>
            </div>
            <div className="bg-[#f3f3f3] py-[1.5rem] font-medium">
              <div className="flex justify-center gap-[1rem]">
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
    </>
  );
};

export default Foreigner;
