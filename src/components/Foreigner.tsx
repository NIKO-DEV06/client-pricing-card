import drop from "../assets/dropdown-arrow-svgrepo-com.svg";

const Foreigner = () => {
  return (
    <>
      <div className="mt-[3rem]">
        <div className="flex gap-[0.5rem] flex-col mt-[1rem]">
          <div>
            <div className="flex text-center">
              <div className="cursor-pointer border-[3px] w-[10rem] py-[0.5rem] rounded-l-full border-[#CE4A37]">
                Foreigner
              </div>
              <div className="cursor-pointer border-[3px] w-[10rem] py-[0.5rem] rounded-r-full opacity-50 border-[#909090]">
                Native
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm pb-[1rem] text-[#9F9F9F]">Class duration</p>
            <select className="bg-white relative outline-none appearance-none justify-between rounded-xl shadow-input-shadow px-[1.5rem] py-[0.8rem] items-center w-[20rem] gap-[0.5rem]">
              <option value="">60 minutes</option>
              <option value="option1">45 minutes</option>
              <option value="option2">45 minutes</option>
              <option value="option3">45 minutes</option>
            </select>
            <img
              src={drop}
              alt="drop"
              className="h-[1.5rem] w-[1.5rem] absolute lg:left-[22rem] md:left-[20.5rem] top-[52%]"
            />
          </div>
          <div>
            <p className="text-sm pb-[1rem] text-[#9F9F9F]">Number classes</p>
            <select className="flex relative bg-white outline-none appearance-none justify-between rounded-xl shadow-input-shadow px-[1.5rem] py-[0.8rem] items-center w-[20rem] gap-[0.5rem]">
              <option value="">5 classes</option>
              <option value="option1">80 classes</option>
              <option value="option2">80 classes</option>
              <option value="option3">80 classes</option>
            </select>
            <img
              src={drop}
              alt="drop"
              className="h-[1.5rem] w-[1.5rem] absolute lg:left-[22rem] md:left-[20.5rem] top-[65%]"
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

      <div className="absolute top-[35.5%] left-[30rem] pr-[2rem]">
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
