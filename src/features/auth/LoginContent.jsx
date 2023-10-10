export default function LoginContent() {
  const sectionStyle = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2745&q=80)",
    height: "100vh",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div className=" h-full w-full" style={sectionStyle}>
      <h2 className="mt-32 ml-20 font-bold text-7xl text-[#7E22CE]">
        Adoption is
        <br /> a loving option
      </h2>
    </div>
  );
}
