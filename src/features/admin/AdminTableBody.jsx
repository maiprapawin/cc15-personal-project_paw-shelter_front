export default function AdminTableBody({ dogObj = "null", button }) {
  return (
    <tbody>
      <tr className="border border-[#A855F7] bg-slate-200">
        <td>{dogObj.dogImage}</td>
        <td>{dogObj.dogName}</td>
        <td>{dogObj.gender}</td>
        <td>{dogObj.breed}</td>
        <td>{dogObj.description}</td>
        <td>{button}</td>
      </tr>
    </tbody>
  );
}
