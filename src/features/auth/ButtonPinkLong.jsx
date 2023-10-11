export default function ButtonPinkLong({ text, action }) {
  return (
    <button className="bg-[#FB7185] px-[48px] py-[14px] rounded-[16px] text-white">
      {text} <span className="text-[#FDE047] font-semibold">{action}</span>
    </button>
  );
}
