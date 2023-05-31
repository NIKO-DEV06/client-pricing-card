import { motion } from "framer-motion";
import drop from "../assets/dropdown-arrow-svgrepo-com.svg";

const MobileForeigner = () => {
  return (
    <div className="mt-[1.5rem]">
      <div className="flex gap-[0.5rem] justify-center">
        <div className="flex bg-white justify-center rounded-xl shadow-input-shadow px-[1.5rem] py-[0.8rem] items-center w-[10rem] gap-[0.5rem]">
          <select className="bg-white outline-none appearance-none">
            <option value="">60 minutes</option>
            <option value="option1">45 minutes</option>
            <option value="option2">45 minutes</option>
            <option value="option3">45 minutes</option>
          </select>
          <img src={drop} alt="drop" className="h-[1.5rem] w-[1.5rem]" />
        </div>
        <div className="flex bg-white justify-center rounded-xl shadow-input-shadow px-[1.5rem] py-[0.8rem] items-center w-[10rem] gap-[0.5rem]">
          <select className="bg-white outline-none appearance-none">
            <option value="">5 classes</option>
            <option value="option1">80 classes</option>
            <option value="option2">80 classes</option>
            <option value="option3">80 classes</option>
          </select>
          <img src={drop} alt="drop" className="h-[1.5rem] w-[1.5rem]" />
        </div>
      </div>
      {/* -----CARDS----- */}
      <motion.div className=" pl-[2rem] overflow-x-auto">
        <motion.div className="mt-[1.5rem] flex gap-[1rem] w-[125.5rem] px-[1rem] py-[1rem]">
          <motion.div className="bg-white w-[24rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
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
            <div className="mt-[3rem]">
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#C1C1C1]">
                Flexible schedule
              </p>
              <p className="bg-white py-[0.8rem] text-[#C1C1C1]">
                Reschedule class
              </p>
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#C1C1C1]">
                Free consultations
              </p>
              <p className="bg-white py-[0.8rem]">Internal credits</p>
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#C1C1C1]">
                Bonus program
              </p>
              <p className="bg-white py-[0.8rem] text-[#C1C1C1]">
                Referral program
              </p>
            </div>
            <div className="bg-[#f3f3f3] py-[0.8rem] font-medium">
              <p>Total cost:</p>
              <div className="flex justify-center gap-[0.5rem]">
                <p className="text-[#b9b9b9] line-through ">128 000 ¥</p>
                <p>76 800 ¥</p>
              </div>
            </div>
            <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
              Proceed
            </button>
          </motion.div>
          <motion.div className="bg-white w-[24rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
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
            <div className="mt-[3rem]">
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#C1C1C1]">----</p>
              <p className="bg-white py-[0.8rem] text-[#C1C1C1]">----</p>
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#C1C1C1]">----</p>
              <p className="bg-white py-[0.8rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#C1C1C1]">----</p>
              <p className="bg-white py-[0.8rem] text-[#C1C1C1]">----</p>
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
          </motion.div>

          {/* -------- */}
          <motion.div className="bg-white w-[24rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
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
            <div className="mt-[3rem]">
              <p className="bg-[#f3f3f3] py-[0.8rem]">Flexible schedule</p>
              <p className="bg-white py-[0.8rem]">Reschedule class</p>
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#C1C1C1]">
                Free consultations
              </p>
              <p className="bg-white py-[0.8rem]">Internal credits</p>
              <p className="bg-[#f3f3f3] py-[0.8rem]">Bonus program</p>
              <p className="bg-white py-[0.8rem]">Referral program</p>
            </div>
            <div className="bg-[#f3f3f3] py-[0.8rem] font-medium">
              <p>Total cost:</p>
              <div className="flex justify-center gap-[0.5rem]">
                <p className="text-[#b9b9b9] line-through ">128 000 ¥</p>
                <p>76 800 ¥</p>
              </div>
            </div>
            <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
              Proceed
            </button>
          </motion.div>
          <motion.div className="bg-white w-[24rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
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
            <div className="mt-[3rem]">
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#CE4A37]">
                &#10003;
              </p>
              <p className="bg-white py-[0.8rem]">4 times a month</p>
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#CE4A37]">----</p>
              <p className="bg-white py-[0.8rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#CE4A37]">
                &#10003;
              </p>
              <p className="bg-white py-[0.8rem] text-[#CE4A37]">&#10003;</p>
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
          </motion.div>

          {/* ---------- */}
          <motion.div className="bg-white text-center pt-[2rem] pb-[2rem] rounded-xl w-[24rem] shadow-input-shadow">
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
            <div className="mt-[3rem]">
              <p className="bg-[#f3f3f3] py-[0.8rem]">Flexible schedule</p>
              <p className="bg-white py-[0.8rem]">Reschedule class</p>
              <p className="bg-[#f3f3f3] py-[0.8rem]">Free consultations</p>
              <p className="bg-white py-[0.8rem]">Internal credits</p>
              <p className="bg-[#f3f3f3] py-[0.8rem]">Bonus program</p>
              <p className="bg-white py-[0.8rem]">Referral program</p>
            </div>
            <div className="bg-[#f3f3f3] py-[0.8rem] font-medium">
              <p>Total cost:</p>
              <div className="flex justify-center gap-[0.5rem]">
                <p className="text-[#b9b9b9] line-through ">128 000 ¥</p>
                <p>76 800 ¥</p>
              </div>
            </div>
            <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
              Proceed
            </button>
          </motion.div>
          <motion.div className="bg-white w-[24rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
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
            <div className="mt-[3rem]">
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#CE4A37]">
                &#10003;
              </p>
              <p className="bg-white py-[0.8rem]">No limit</p>
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#CE4A37]">
                &#10003;
              </p>
              <p className="bg-white py-[0.8rem] text-[#CE4A37]">&#10003;</p>
              <p className="bg-[#f3f3f3] py-[0.8rem] text-[#CE4A37]">
                &#10003;
              </p>
              <p className="bg-white py-[0.8rem] text-[#CE4A37]">&#10003;</p>
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
          </motion.div>
        </motion.div>
      </motion.div>
      <p className="text-center mt-[2rem] text-[1.3rem] font-semibold">
        Or, get a trial class:
      </p>
      <div className="flex justify-center">
        <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
          Pay 500 ¥
        </button>
      </div>
    </div>
  );
};

export default MobileForeigner;
