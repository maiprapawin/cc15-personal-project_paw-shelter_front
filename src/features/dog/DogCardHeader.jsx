import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";

export default function DogCardHeader({ dogObj, image }) {
  const { id } = dogObj;
  const { authUser } = useAuth();
  const [likes, setLikes] = useState(dogObj.Likes);

  const isLiked = likes.find((el) => el.userId === authUser.id);

  const handleClickLike = async () => {
    try {
      await axios.post(`/dog/${id}/like`);

      //เช็คว่ามีการกดไลค์ dog นี้อยู่มั้ย >> ถ้ายังไม่เคยกดไลค์ ต้องเพิ่มเข้าไปใน arr ถ้าเคยกดแล้ว ให้ลบออก

      // ถ้าไลค์แล้ว เอาออก
      if (isLiked) {
        return setLikes(likes.filter((el) => el.userId !== authUser.id));
      }
      // ถ้ายังไม่ like เพิ่มค่าเข้าไป
      setLikes([...likes, { userId: authUser.id }]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        className={`text-[30px] text-white absolute ml-[300px] mt-2 ${
          isLiked ? "text-red-600" : "text-[white]"
        } `}
        onClick={handleClickLike}
      >
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
