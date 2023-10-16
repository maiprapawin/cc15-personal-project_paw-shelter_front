export default function AdminTableHeader({ button = null }) {
  return (
    <thead>
      <tr>
        <th>dogImage</th>
        <th>dogName</th>
        <th>gender</th>
        <th>breed?</th>
        <th>description?</th>
        <th>{button}</th>
      </tr>
    </thead>
  );
}
