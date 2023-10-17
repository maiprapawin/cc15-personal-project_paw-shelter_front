export default function Button({
  bg = "bg-[#FDE047]",
  text = "text-[#5B21B6]",
  action,
  onClick,
}) {
  return (
    <button
      className={`${bg} ${text} px-[18px] py-[8px] rounded-md font-semibold`}
      onClick={onClick}
    >
      {action}
    </button>
  );
}
