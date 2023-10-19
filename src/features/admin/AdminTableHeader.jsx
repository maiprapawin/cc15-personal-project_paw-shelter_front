export default function AdminTableHeader({ button = null }) {
  return (
    <thead>
      <tr className="bg-[#A855F7] text-white">
        <th>Dog Image</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Breed</th>
        <th>Description</th>
        <th>{button}</th>
      </tr>
    </thead>
  );
}
