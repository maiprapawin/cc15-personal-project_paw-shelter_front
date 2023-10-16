import { AiFillHeart } from "react-icons/ai";

export default function DogCardHeader({ image }) {
  return (
    <>
      <div className="text-[30px] text-white absolute ml-[300px] mt-2">
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
