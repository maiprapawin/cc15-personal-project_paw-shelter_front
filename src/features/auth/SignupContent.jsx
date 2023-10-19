import Background from "./Background";

export default function SignupContent() {
  return (
    <Background
      backgroundImage="https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      details={
        <h2 className="mt-24 ml-20 font-bold text-7xl text-[#7E22CE]">
          Adoption is
          <br /> a loving option
        </h2>
      }
    />
  );
}
