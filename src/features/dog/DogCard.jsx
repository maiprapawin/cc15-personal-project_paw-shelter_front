import { Link } from "react-router-dom";

export default function DogCard() {
  return (
    <div className="w-[325px] h-[520px] m-12">
      <img className="h-[260px] w-[325px] bg-green-400"></img>
      <div className="bg-[#A855F7] text-white font-bold flex justify-center items-center h-[46px] text-[24px]">
        Name
      </div>
      <div className="bg-[#BAE6FD] h-[260px]  text-[#A855F7] text-[24px] text-center">
        <div className="font-bold pt-6">Gender</div>
        <div className="font-bold">Breed</div>
        <div className="">Lorem ipsum dolor sit amet consectetur </div>
        <div className="text-center pt-3">
          <Link to="/how-to-adopt">
            <button className="bg-[#FB7185] text-[#FDE047] font-semibold px-[18px] py-[11px] rounded-[999px] text-lg">
              Adopt Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
