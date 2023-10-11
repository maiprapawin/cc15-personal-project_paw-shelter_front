export default function SignupContent() {
  const sectionStyle = {
    backgroundImage:
      "url(https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
    height: "100vh",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // position: "relative",
  };

  return (
    <div className=" h-full w-full" style={sectionStyle}>
      <h2 className="mt-24 ml-20 font-bold text-7xl text-[#7E22CE]">
        Adoption is
        <br /> a loving option
      </h2>
    </div>
  );
}
