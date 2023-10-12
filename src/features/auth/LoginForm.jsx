import { useState } from "react";
import ButtonYellow from "./ButtonYellow";
import InputBox from "./InputBox";
import { useAuth } from "../../hooks/use-auth";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input); //credential ไปที่ AuthContext
  };

  return (
    <form
      className="bg-[#A855F7] p-[87px] h-[472px] w-[601px] mx-auto rounded-[12px]"
      onSubmit={handleSubmitForm}
    >
      <div className=" mb-24">
        <h1 className="text-[48px] font-bold text-[#FDE047]">Log In</h1>
        <h2 className="text-white tex-[20px]">
          Your new best friend is waiting for you!
        </h2>
        <InputBox
          placeholder="Email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <InputBox
          type="password"
          placeholder="Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <div className="flex justify-center">
          <ButtonYellow name="Log In" />
        </div>
      </div>
    </form>
  );
}