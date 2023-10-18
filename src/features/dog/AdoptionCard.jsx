export default function AdoptionCard({ number, process, detail }) {
  return (
    <div className="bg-white w-[354px] h-[294px] px-[24px] py-[40px] m-8 rounded-[8px]">
      <h1 className="text-[#94A3B8] text-[48px] font-semibold">{number}</h1>
      <h3 className="text-[#A855F7] font-bold text-[20px]">{process}</h3>
      <p className="text-[#94A3B8] pt-2">{detail}</p>
    </div>
  );
}
