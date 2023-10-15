import { Link } from "react-router-dom";

export default function DogCardFooter() {
  return (
    <>
      <div className=" bg-[#BAE6FD] text-center pt-3 pb-6 rounded-b-md">
        <Link to="/how-to-adopt">
          <button className="bg-[#FB7185] text-[#FDE047] font-semibold px-[18px] py-[11px] rounded-[999px] text-lg">
            Adopt Me
          </button>
        </Link>
      </div>
    </>
  );
}
