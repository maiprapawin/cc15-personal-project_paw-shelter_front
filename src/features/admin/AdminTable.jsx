// import { useEffect, useState } from "react";
import AdminTableBody from "./AdminTableBody";
import AdminTableHeader from "./AdminTableHeader";
// import axios from "axios";
import Button from "../auth/Button";
import useDog from "../../hooks/use-dog";

export default function AdminTable() {
  // const [allDogs, setAllDogs] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("dog/read")
  //     .then((res) => {
  //       setAllDogs(res.data.dogs);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const { allDogs } = useDog();

  return (
    <table>
      <AdminTableHeader
        button={<Button bg="bg-[#0369A1]" text="text-white" action="Create" />}
      />
      {allDogs.map((el) => (
        <AdminTableBody key={el.id} dogObj={el} />
      ))}
    </table>
  );
}
