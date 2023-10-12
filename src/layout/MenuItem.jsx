import { Link } from "react-router-dom";

export default function MenuItem({ to, name }) {
  return (
    <Link to={to}>
      <div>{name}</div>
    </Link>
  );
}
