import ButtonYellow from "./ButtonYellow";
import InputBox from "./InputBox";

export default function SignupForm() {
  return (
    <form className="bg-[#A855F7] p-[87px] h-[640px] w-[601px] mx-auto  rounded-[12px]">
      <div className=" mb-24">
        <h1 className="text-[48px] font-bold text-[#FDE047]">Sign Up</h1>
        <h2 className="text-white text-[20px]">
          Your new best friend is waiting for you!
        </h2>
        <div className="flex gap-4">
          <InputBox placeholder="First Name" margin={"mt-4"} />
          <InputBox placeholder="Last Name" margin={"mt-4"} />
        </div>
        <InputBox placeholder="Email" />
        <InputBox type="password" placeholder="Password" />
        <InputBox type="password" placeholder="Confirm Password" />
        <br />
        <div className="flex justify-center">
          <ButtonYellow name="Sign Up" />
        </div>
      </div>
    </form>
  );
}
