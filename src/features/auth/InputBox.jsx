export default function InputBox({
  placeholder,
  type = "text",
  margin = "my-4",
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${margin} px-[16px] py-[18px] block  w-full rounded-md`}
      value={value}
      onChange={onChange}
    />
  );
}
