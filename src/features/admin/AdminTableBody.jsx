import Button from "../auth/Button";

export default function AdminTableBody({ dogObj }) {
  return (
    <tbody>
      <tr>
        <td>{dogObj.dogImage}</td>
        <td>{dogObj.dogName}</td>
        <td>{dogObj.gender}</td>
        <td>{dogObj.breed}</td>
        <td>{dogObj.description}</td>
        <td>
          <Button bg="bg-[#00B633]" text="text-white" action="Edit" />
          <Button bg="bg-[#FD0000]" text="text-white" action="Delete" />
        </td>
      </tr>
    </tbody>
  );
}
