export default function Background({ details, backgroundImage }) {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "100vh",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="h-full w-full" style={sectionStyle}>
      {details}
    </div>
  );
}
