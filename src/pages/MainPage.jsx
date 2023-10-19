import { Link } from "react-router-dom";
import Background from "../features/auth/Background";
import Button from "../features/auth/Button";

export default function MainPage() {
  return (
    <Background
      backgroundImage="https://images.unsplash.com/photo-1597633611385-17238892d086?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      details={
        <div className="flex items-center pt-36">
          <div className="flex flex-col m-auto justify-center items-center">
            <div className="text-[92px] font-extrabold text-[#7E22CE] leading-[85px]">
              Welcome to <br />
              Paw Shelter
            </div>
            <br />
            <br />
            <div className="text-center text-[38px] text-[#7E22CE] leading-[48px]">
              Join us in giving a loving home <br /> to countless dogs in need
              of a second chance
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-[36px] mr-[7rem] mt-28">
            <Link to="/signup">
              <Button
                bg="bg-[#0EA5E9]"
                text="text-white"
                action="Sign Up"
                padding="px-[30px] py-[14px]"
              />
            </Link>
            <Link to="/login">
              <Button
                bg="bg-[#FB7185]"
                text="text-white"
                action="Log In"
                padding="px-[48px] py-[14px]"
              />
            </Link>
          </div>
        </div>
      }
    />
  );
}
