import ButtonPinkLong from "../features/auth/ButtonPinkLong";
import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-2 w-full h-full">
      <LoginContent />
      <div className="flex flex-col justify-center items-center bg-[#7DD3FC]">
        <LoginForm />
        <div className="mt-10">
          <ButtonPinkLong text="No account yet?" action="Sign Up" />
        </div>
      </div>
    </div>
  );
}
