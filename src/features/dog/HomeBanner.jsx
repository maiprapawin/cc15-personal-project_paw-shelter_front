export default function HomeBanner() {
  const sectionStyle = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1597633611385-17238892d086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)",
    height: "75vh",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      className="flex flex-col justify-start text-center pt-28 gap-4"
      style={sectionStyle}
    >
      <h1 className="font-bold text-6xl text-[#7E22CE]">HELLO HOOMAN!</h1>
      <h2 className="font-bold text-4xl text-[#A855F7]">
        We are waiting for a new loving home
        <br />
        Please adopt us
      </h2>
    </div>
  );
}
