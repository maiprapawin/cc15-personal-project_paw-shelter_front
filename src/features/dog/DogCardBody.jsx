import DogCardFooter from "./DogCardFooter";

export default function DogCardBody({ name, gender, breed, description }) {
  return (
    <>
      <div className="bg-[#A855F7] text-white font-bold flex justify-center items-center h-[46px] text-[24px]">
        {name}
      </div>
      <div className="bg-[#BAE6FD] h-[180px]  text-[#A855F7] text-[24px] text-center">
        <div className="font-bold pt-6">{gender}</div>
        <div className="font-bold">{breed}</div>
        <div className="">{description}</div>
      </div>
      <DogCardFooter />
    </>
  );
}
