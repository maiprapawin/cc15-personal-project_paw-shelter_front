export default function InputBox({
  placeholder,
  type = "text",
  margin = "my-4",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${margin} px-[16px] py-[18px] block  w-full rounded-md`}
    />
  );
}
