import { Link } from "react-router-dom";
import Button from "../features/auth/Button";
import { useState } from "react";
import useDog from "../hooks/use-dog";
import InputBox from "../features/auth/InputBox";

export default function AdminCreatePage() {
  const { createDog } = useDog();

  const [input, setInput] = useState({
    dogImage: "",
    dogName: "",
    gender: "",
    breed: "",
    description: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInput({ ...input, dogImage: file });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDog(input);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#FDE047]">
      <div className="flex justify-center items-end mb-4">
        <div className="mb-[8px] mr-6">
          <Link to="/admin">
            <Button bg="bg-[#0369A1]" text="text-white" action="Back" />
          </Link>
        </div>
        <h1 className="font-bold text-6xl text-[#7E22CE] text-center pt-16">
          CREATE A DOG POST
        </h1>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-md mb-20">
            <InputBox
              type="file"
              accept="image/*"
              name="dogImage"
              onChange={handleImageChange}
            />
            <InputBox
              type="text"
              placeholder="Name"
              name="dogName"
              value={input.dogName}
              onChange={handleChangeInput}
            />
            <InputBox
              type="text"
              placeholder="Gender (MALE or FEMALE only)"
              name="gender"
              value={input.gender}
              onChange={handleChangeInput}
            />
            <InputBox
              type="text"
              placeholder="Breed"
              name="breed"
              value={input.breed}
              onChange={handleChangeInput}
            />
            <InputBox
              type="text"
              placeholder="Description"
              name="description"
              value={input.description}
              onChange={handleChangeInput}
            />
            <div className="text-center">
              <Button
                bg="bg-[#0369A1]"
                text="text-white"
                action="Save"
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
