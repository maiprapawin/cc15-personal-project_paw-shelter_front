import { Link } from "react-router-dom";
import ButtonPinkLong from "../features/auth/ButtonPinkLong";
import SignupContent from "../features/auth/SignupContent";
import SignupForm from "../features/auth/SignupForm";

export default function SignupPage() {
  return (
    <div className="grid grid-cols-2 w-full h-full">
      <SignupContent />
      <div className="flex flex-col justify-center items-center bg-[#7DD3FC]">
        <SignupForm />
        <div className="mt-10">
          <Link to="/login">
            <ButtonPinkLong text="Already have an account?" action="Log In" />
          </Link>
        </div>
      </div>
    </div>
  );
}
