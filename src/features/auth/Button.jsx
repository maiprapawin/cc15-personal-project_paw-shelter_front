export default function Button({
  bg = "bg-[#FDE047]",
  text = "text-[#5B21B6]",
  action,
  onClick,
  padding = "px-[18px] py-[8px]",
}) {
  return (
    <button
      className={`${bg} ${text} ${padding} rounded-md font-semibold`}
      onClick={onClick}
    >
      {action}
    </button>
  );
}
