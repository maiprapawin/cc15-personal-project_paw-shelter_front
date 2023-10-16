import { Link } from "react-router-dom";
import AdminTableBody from "./AdminTableBody";
import AdminTableHeader from "./AdminTableHeader";
import Button from "../auth/Button";
import useDog from "../../hooks/use-dog";

export default function AdminTable() {
  const { allDogs } = useDog();

  return (
    <table>
      <AdminTableHeader
        button={<Button bg="bg-[#0369A1]" text="text-white" action="Create" />}
      />
      {allDogs.map((el) => (
        <AdminTableBody
          key={el.id}
          dogObj={el}
          button={
            <>
              <Link to={`/admin/edit/${el.id}`} state={el}>
                <Button bg="bg-[#00B633]" text="text-white" action="Edit" />
              </Link>
              <Button bg="bg-[#FD0000]" text="text-white" action="Delete" />
            </>
          }
        />
      ))}
    </table>
  );
}
