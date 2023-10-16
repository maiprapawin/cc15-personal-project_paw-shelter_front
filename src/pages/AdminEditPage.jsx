// import { Link, useLocation, useParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Button from "../features/auth/Button";
// import AdminTableHeader from "../features/admin/AdminTableHeader";
// import AdminTableBody from "../features/admin/AdminTableBody";
import useDog from "../hooks/use-dog";
import { useEffect, useState } from "react";
import axios from "../config/axios";

export default function AdminEditPage() {
  const { dogId } = useParams();
  const { updateDog } = useDog();

  // const currentDogData = useLocation().state || {
  //   dogName: "",
  //   gender: "",
  //   breed: "",
  //   description: "",
  // };

  // const [oneDog, setOneDog] = useState(currentDogData);

  const [oneDog, setOneDog] = useState({
    dogName: "",
    gender: "",
    breed: "",
    description: "",
  });

  useEffect(() => {
    const readOneDog = async () => {
      try {
        const res = await axios.get(`/dog/read/${dogId}`);
        const updatedDogData = res.data.existDog || {}; //เพราะมีบางอันค่าเป็น null แล้ว error
        setOneDog(updatedDogData);
      } catch (err) {
        console.log(err);
      }
    };
    readOneDog();
  }, [dogId]); //ทำงานเมื่อมีการเปลี่ยนแปลงของ dogId

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const updatedDogData = { ...oneDog };
  //     await updateDog(updatedDogData, dogId);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
              <input
                className="w-full"
                id="dogImage"
                type="file"
                accept="image/*"
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
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dogName"
                type="text"
                placeholder={oneDog.dogName}
                value={oneDog.dogName || ""}
                onChange={(e) =>
                  setOneDog({ ...oneDog, dogName: e.target.value })
                }
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="gender"
                type="text"
                placeholder={oneDog.gender}
                value={oneDog.gender || ""}
                onChange={(e) =>
                  setOneDog({ ...oneDog, gender: e.target.value })
                }
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="breed"
              >
                Breed
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="breed"
                type="text"
                placeholder={oneDog.breed}
                value={oneDog.breed || ""}
                onChange={(e) =>
                  setOneDog({ ...oneDog, breed: e.target.value })
                }
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder={oneDog.description}
                value={oneDog.description || ""}
                onChange={(e) =>
                  setOneDog({ ...oneDog, description: e.target.value })
                }
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
