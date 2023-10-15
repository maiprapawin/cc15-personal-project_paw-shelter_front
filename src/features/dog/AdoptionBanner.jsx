export default function AdoptionBanner() {
  const sectionStyle = {
    backgroundImage:
      "url(https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
    height: "75vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      className="flex flex-col justify-start text-center pt-32 gap-4"
      style={sectionStyle}
    >
      <h1 className="font-bold text-6xl text-[#7E22CE]">ADOPTION PROCESS</h1>
    </div>
  );
}
