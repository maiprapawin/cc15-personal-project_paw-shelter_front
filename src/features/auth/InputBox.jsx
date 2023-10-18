export default function InputBox({
  placeholder,
  type = "text",
  margin = "my-4",
  value,
  onChange,
  name,
  hasError,
  accept,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${margin} px-[16px] py-[18px] block  w-full rounded-md outline-none border focus:ring ${
        hasError
          ? "border-[#E11D48] focus:ring-[#E11D48]"
          : // : "border-yellow-400 focus:ring-yellow-400"
            " border-[#0284C7] focus:ring-[#0284C7]"
      }`}
      value={value}
      onChange={onChange}
      name={name}
      accept={accept}
    />
  );
}
