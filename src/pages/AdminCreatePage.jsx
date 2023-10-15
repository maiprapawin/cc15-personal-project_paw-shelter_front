import { Link } from "react-router-dom";
import Button from "../features/auth/Button";

export default function AdminCreatePage() {
  return (
    <div className="bg-[#FDE047] h-[1200px] ">
      <Link to="/admin">
        <Button bg="bg-[#0369A1]" text="text-white" action="Back" />
      </Link>
      <h1 className="font-bold text-6xl text-[#7E22CE] text-center pt-16">
        CREATE A DOG POST{" "}
      </h1>
    </div>
  );
}
