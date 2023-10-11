import ButtonYellow from "./ButtonYellow";
import InputBox from "./InputBox";

export default function LoginForm() {
  return (
    <form className="bg-[#A855F7] p-[87px] h-[472px] w-[601px] mx-auto  rounded-[12px]">
      <div className=" mb-24">
        <h1 className="text-[48px] font-bold text-[#FDE047]">Log In</h1>
        <h2 className="text-white tex-[20px]">
          Your new best friend is waiting for you!
        </h2>
        <InputBox placeholder="Email" />
        <InputBox type="password" placeholder="Password" />
        <br />
        <div className="flex justify-center">
          <ButtonYellow name="Log In" />
        </div>
      </div>
    </form>
  );
}
