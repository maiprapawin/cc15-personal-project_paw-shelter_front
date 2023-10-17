import { Link, useParams } from "react-router-dom";
import Button from "../features/auth/Button";
import useDog from "../hooks/use-dog";
import { useEffect, useState } from "react";
import axios from "../config/axios";
import InputBox from "../features/auth/InputBox";

export default function AdminEditPage() {
  const { dogId } = useParams();
  const { updateDog } = useDog();

  const [oneDog, setOneDog] = useState({
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
        setOneDog(updatedDogData);
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
        dogImage: oneDog.dogImage,
        dogName: oneDog.dogName,
        gender: oneDog.gender,
        breed: oneDog.breed,
        description: oneDog.description,
      };
      console.log(updatedDogData);
      await updateDog(updatedDogData);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeInput = (e) => {
    setOneDog({ ...oneDog, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setOneDog({ ...oneDog, dogImage: file });
  };

  return (
    <div className="bg-[#FDE047] h-[1200px]">
      <Link to="/admin">
        <Button bg="bg-[#0369A1]" text="text-white" action="Back" />
      </Link>
      <h1 className="font-bold text-6xl text-[#7E22CE] text-center pt-16">
        EDIT A DOG POST
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
              <img src={oneDog.dogImage} alt={oneDog.dogName} />
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
                placeholder={oneDog.dogName}
                name="dogName"
                value={oneDog.dogName || ""}
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
                placeholder={oneDog.gender}
                name="gender"
                value={oneDog.gender || ""}
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
                placeholder={oneDog.breed}
                name="breed"
                value={oneDog.breed || ""}
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
                placeholder={oneDog.description}
                name="description"
                value={oneDog.description || ""}
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
