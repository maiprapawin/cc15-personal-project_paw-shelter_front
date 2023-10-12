import { useState } from "react";
import ButtonYellow from "./ButtonYellow";
import InputBox from "./InputBox";
import Joi from "joi";
import InputErrorMessage from "./InputErrorMessage";
import { useAuth } from "../../hooks/use-auth";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }).required(), //tlds: false = แก้ error สามารถรองรับได้ทุกอีเมล เช่น .com .net .org ก็ได้
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
  isAdmin: Joi.boolean(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false }); //abortEarly false เพื่อ validate ทุกตัว ไม่ใช่แค่ firstName ไม่ผ่านแล้วจบ
  // console.dir(error);
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result; //ถ้าไม่มี error จะ return undefined ถ้ามี error จะ return error obj ที่มี key เป็นเช่น {firstName:..., lastName:...}
  }
};

export default function SignupForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});
  const { register } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    //กดปุ่ม submit = เรียกใช้ fn นี้เพื่อ validate input
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    //จากนั้นต้อง send req ไปที่ server
    register(input); //registerInputObject ใน AuthContext
  };

  return (
    <form
      className="bg-[#A855F7] p-[87px] h-[640px] w-[601px] mx-auto  rounded-[12px]"
      onSubmit={handleSubmitForm}
    >
      <div className=" mb-24">
        <h1 className="text-[48px] font-bold text-[#FDE047]">Sign Up</h1>
        <h2 className="text-white text-[20px]">
          Your new best friend is waiting for you!
        </h2>
        <div className="flex gap-4">
          <div>
            <InputBox
              placeholder="First Name"
              margin={"mt-4"}
              value={input.firstName}
              onChange={handleChangeInput}
              name="firstName"
              hasError={error.firstName}
            />
            {error.firstName && <InputErrorMessage message={error.firstName} />}
          </div>
          <div>
            <InputBox
              placeholder="Last Name"
              margin={"mt-4"}
              value={input.lastName}
              onChange={handleChangeInput}
              name="lastName"
              hasError={error.lastName}
            />
            {error.lastName && <InputErrorMessage message={error.lastName} />}
          </div>
        </div>
        <InputBox
          placeholder="Email"
          value={input.email}
          onChange={handleChangeInput}
          name="email"
          hasError={error.email}
        />
        {error.email && <InputErrorMessage message={error.email} />}

        <InputBox
          type="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChangeInput}
          name="password"
          hasError={error.password}
        />
        {error.password && <InputErrorMessage message={error.password} />}

        <InputBox
          type="password"
          placeholder="Confirm Password"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          name="confirmPassword"
          hasError={error.confirmPassword}
        />
        {error.confirmPassword && (
          <InputErrorMessage message={error.confirmPassword} />
        )}
        <br />
        <div className="flex justify-center">
          <ButtonYellow action="Sign Up" />
        </div>
      </div>
    </form>
  );
}
