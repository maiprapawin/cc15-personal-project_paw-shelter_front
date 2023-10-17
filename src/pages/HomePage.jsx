import DogCard from "../features/dog/DogCard";
import HomeBanner from "../features/dog/HomeBanner";
import useDog from "../hooks/use-dog";

export default function HomePage() {
  const { allDogs } = useDog();
  // console.log(allDogs);
  return (
    <div>
      <HomeBanner />
      <div className="bg-[#FDE047]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[#F43F5E] font-bold text-[32px] text-center pt-12">
            Available Dogs for Adoption
          </h2>
          <div className="grid grid-cols-3 pb-28">
            {allDogs.map((el) => (
              <DogCard key={el.id} dogObj={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
