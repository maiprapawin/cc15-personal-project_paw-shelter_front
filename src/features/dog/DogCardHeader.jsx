import { AiFillHeart } from "react-icons/ai";

export default function DogCardHeader({ image }) {
  return (
    <>
      <div className=" flex justify-end text-[30px] bg-red-300 text-white">
        <AiFillHeart />
      </div>

      <img
        src={`${image}`}
        alt=""
        className="h-[260px] w-[340px] rounded-t-md "
      />
    </>
  );
}
