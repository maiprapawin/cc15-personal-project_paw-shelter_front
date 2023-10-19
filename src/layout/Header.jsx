import { FaPaw } from "react-icons/fa";
import Menu from "./Menu";
import Button from "../features/auth/Button";
import useAuth from "../hooks/use-auth";

export default function Header() {
  const { logout } = useAuth();

  return (
    <header className="flex justify-between bg-[#FB7185] text-white font-bold h-[80px] sticky top-0">
      <div className="flex ml-4">
        <div className=" bg-white text-[32px] rounded-full text-black p-3 m-auto mr-4">
          <FaPaw />
        </div>
        <div className="leading-[26px] m-auto">
          <h1 className="text-[28px]">Paw Shelter</h1>
          <h3 className="text-[16px]">a shelter for homeless dogs</h3>
        </div>
      </div>
      <div className="flex items-center gap-20">
        <Menu />
        <div onClick={logout} className="pr-3">
          <Button action="Log Out" />
        </div>
      </div>
    </header>
  );
}
