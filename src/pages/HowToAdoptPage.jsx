import AdoptionBanner from "../features/dog/AdoptionBanner";
import AdoptionCard from "../features/dog/AdoptionCard";

const process = [
  {
    id: 1,
    number: "01",
    process: "Look for a suitable dog",
    detail: "Browse our online gallery of dogs in need of a loving home",
  },
  {
    id: 2,
    number: "02",
    process: "Fill out our pre-adoption form",
    detail: "Please click here to complete the form",
  },
  {
    id: 3,
    number: "03",
    process: "Pre-adoption form review and interview",
    detail:
      "Our shelter representative will review your pre-adoption form and get back to you within 1-3 working days for the interview",
  },
  {
    id: 4,
    number: "04",
    process: "Arrange a meeting for you and your future best friend!",
    detail:
      "We will arrange a meeting for you and your companion to ensure fit",
  },
  {
    id: 5,
    number: "05",
    process: "Finalize paperwork ",
    detail: "We would require some more essential information from you",
  },
  {
    id: 6,
    number: "06",
    process: "Take your new friend home",
    detail:
      "If you have passed all processes, you can enjoy a smooth transition with your new pawesome friend!",
  },
];

export default function HowToAdoptPage() {
  return (
    <div>
      <AdoptionBanner />
      <div className="bg-[#7DD3FC]">
        <h2 className="text-[#7E22CE] font-bold text-[48px] text-center pt-12">
          How to Adopt a Dog
        </h2>
        <div className="grid grid-cols-3 p-20 pt-0">
          {process.map((el) => (
            <AdoptionCard
              key={el.id}
              number={el.number}
              process={el.process}
              detail={el.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
