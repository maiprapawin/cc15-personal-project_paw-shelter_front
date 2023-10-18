import MenuItem from "./MenuItem";

const menus = [
  { id: 1, to: "/", name: "Home" },
  { id: 2, to: "/how-to-adopt", name: "How to Adopt" },
];

export default function Menu() {
  return (
    <nav className="flex items-center text-[20px] gap-6">
      {menus.map((el) => (
        <MenuItem key={el.id} to={el.to} name={el.name} />
      ))}
    </nav>
  );
}
