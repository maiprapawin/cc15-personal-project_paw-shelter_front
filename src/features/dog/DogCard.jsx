import DogCardBody from "./DogCardBody";
import DogCardHeader from "./DogCardHeader";

export default function DogCard({ dogObj }) {
  return (
    <div className="w-[340px] h-[520px] m-12">
      <DogCardHeader image={dogObj.dogImage} />
      <DogCardBody
        name={dogObj.dogName}
        gender={dogObj.gender}
        breed={dogObj.breed}
        description={dogObj.description}
      />
    </div>
  );
}
