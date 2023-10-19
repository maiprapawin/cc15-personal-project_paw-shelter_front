import { Link, useParams } from "react-router-dom";
import Button from "../features/auth/Button";
import useDog from "../hooks/use-dog";
import { useEffect, useState } from "react";
import axios from "../config/axios";
import InputBox from "../features/auth/InputBox";

export default function AdminEditPage() {
  const { dogId } = useParams();
  const { updateDog } = useDog();

  const [initialInput, setInitialInput] = useState({
    dogName: "",
    gender: "",
    breed: "",
    description: "",
  });

  useEffect(() => {
    const getOneDog = async () => {
      try {
        const res = await axios.get(`/dog/read/${dogId}`);
        const updatedDogData = res.data.existDog || {}; //เพราะมีบางอันค่าเป็น null แล้ว error
        setInitialInput(updatedDogData);
      } catch (err) {
        console.log(err);
      }
    };
    getOneDog();
  }, [dogId]); //ทำงานเมื่อมีการเปลี่ยนแปลงของ dogId

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedDogData = {
        id: dogId,
        dogImage: initialInput.dogImage,
        dogName: initialInput.dogName,
        gender: initialInput.gender,
        breed: initialInput.breed,
        description: initialInput.description,
      };
      console.log(updatedDogData);
      await updateDog(updatedDogData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeInput = (e) => {
    setInitialInput({ ...initialInput, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInitialInput({ ...initialInput, dogImage: file });
  };

  return (
    <div className="bg-[#FDE047]">
      <Link to="/admin">
        <Button bg="bg-[#0369A1]" text="text-white" action="Back" />
      </Link>
      <h1 className="font-bold text-6xl text-[#7E22CE] text-center pt-16">
        EDIT A DOG POST
      </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-center items-center h-full pb-16">
          <div className="flex justify-center gap-10 my-16">
            <div className="flex items-center mb-6">
              <img src={initialInput.dogImage} alt={initialInput.dogName} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <InputBox
                type="file"
                accept="image/*"
                name="dogImage"
                onChange={handleImageChange}
              />
              <InputBox
                type="text"
                placeholder={initialInput.dogName || "Name (required)"}
                name="dogName"
                value={initialInput.dogName}
                onChange={handleChangeInput}
              />
              <InputBox
                type="text"
                placeholder={
                  initialInput.gender ||
                  "Gender (required, MALE or FEMALE only)"
                }
                name="gender"
                value={initialInput.gender}
                onChange={handleChangeInput}
              />
              <InputBox
                type="text"
                placeholder={initialInput.breed || "Breed (optional)"}
                name="breed"
                value={initialInput.breed}
                onChange={handleChangeInput}
              />
              <InputBox
                placeholder={
                  initialInput.description || "Description (optional)"
                }
                name="description"
                value={initialInput.description}
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
        </div>
      </form>
    </div>
  );
}

{
  /* <form onSubmit={handleFormSubmit}>
  <div className="flex justify-center items-center h-full">
    <div className="w-full max-w-md">
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="dogImage"
        >
          Dog Image
        </label>
        <img src={initialInput.dogImage} alt={initialInput.dogName} />
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
          placeholder={initialInput.dogName}
          name="dogName"
          value={initialInput.dogName || ""}
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
          placeholder={initialInput.gender}
          name="gender"
          value={initialInput.gender || ""}
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
          placeholder={initialInput.breed}
          name="breed"
          value={initialInput.breed || ""}
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
          placeholder={initialInput.description}
          name="description"
          value={initialInput.description || ""}
          onChange={handleChangeInput}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button action="Save" type="submit" />
      </div>
    </div>
  </div>
</form>; */
}
