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
    breed: " ",
    description: " ",
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
      // const createdDogData = res.data.dog || {};
      // setInput(createdDogData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#FDE047] h-[1200px] ">
      <Link to="/admin">
        <Button bg="bg-[#0369A1]" text="text-white" action="Back" />
      </Link>
      <h1 className="font-bold text-6xl text-[#7E22CE] text-center pt-16">
        CREATE A DOG POST
      </h1>

      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-md">
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dogImage"
              >
                Dog Image
              </label>
              <InputBox
                type="file"
                accept="image/*"
                name="dogImage"
                onChange={handleImageChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dogName"
              >
                Dog Name
              </label>
              <InputBox
                type="text"
                placeholder="Name"
                name="dogName"
                value={input.dogName}
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <InputBox
                type="text"
                placeholder="MALE or FEMALE only"
                value={input.gender}
                name="gender"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="breed"
              >
                Breed
              </label>
              <InputBox
                type="text"
                placeholder="Breed"
                name="breed"
                value={input.breed || ""}
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <InputBox
                type="text"
                placeholder="Description"
                name="description"
                value={input.description || ""}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button action="Save" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
