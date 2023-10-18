import { FaPaw } from "react-icons/fa";
import Menu from "./Menu";
import Button from "../features/auth/Button";
import useAuth from "../hooks/use-auth";

export default function Header() {
  const { logout } = useAuth();

  return (
    <header className="bg-[#FB7185] flex justify-between h-[80px] sticky top-0">
      <div className="flex">
        <FaPaw />
        <div>
          <h1>Paw Shelter</h1>
          <h3>a shelter for homeless dogs</h3>
        </div>
      </div>
      <Menu />
      <div onClick={logout}>
        <Button action="Log Out" />
      </div>
    </header>
  );
}
