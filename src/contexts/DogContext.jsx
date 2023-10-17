import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const DogContext = createContext();

export default function DogContextProvider({ children }) {
  const [allDogs, setAllDogs] = useState([]);
  const [oneDog, setOneDog] = useState({
    dogName: "",
    gender: "",
    breed: "",
    description: "",
  });

  // 1. CREATE dog
  const createDog = async (newDogData) => {
    try {
      const formData = new FormData();
      formData.append("dogImage", newDogData.dogImage);
      formData.append("dogName", newDogData.dogName);
      formData.append("gender", newDogData.gender);
      formData.append("breed", newDogData.breed);
      formData.append("description", newDogData.description);

      const res = await axios.post("/dog/create", formData);
      setAllDogs((prev) => [...prev, res.data.dog]); //เพิ่มข้อมูล dog ใหม่ โดยไม่กระทบ dogs เดิม (prev = current allDogs state)
    } catch (err) {
      console.log(err);
    }
  };

  // 2. READ/GET all dogs

  const getAllDogs = () => axios.get("dog/read");

  useEffect(() => {
    getAllDogs()
      .then((res) => {
        setAllDogs(res.data.dogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 3. UPDATE dog
  const updateDog = async (updatedDogData) => {
    try {
      // FormData API (Builtin JS API) มันจะสร้าง obj ที่มี key value เก็บข้อมูลที่เป็น binary หรือไฟล์ได้ เอาไว้สำหรับ send req ที่เป็น file
      const formData = new FormData();
      formData.append("id", updatedDogData.id);
      formData.append("dogName", updatedDogData.dogName);
      formData.append("gender", updatedDogData.gender);
      formData.append("breed", updatedDogData.breed);
      formData.append("description", updatedDogData.description);

      if (updatedDogData.dogImage) {
        formData.append("dogImage", updatedDogData.dogImage);
      }

      const res = await axios.patch(
        `/dog/update/${updatedDogData.id}`,
        formData
      );
      console.log(res.data.dog);
      setOneDog({ ...oneDog, ...res.data.dog }); //อัพเดทข้อมูล dog จากที่มีอยู่

      getAllDogs()
        .then((res) => {
          setAllDogs(res.data.dogs);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // 4. DELETE dog
  const deleteDog = async (dogId) => {
    try {
      const res = await axios.delete(`/dog/${dogId}`);
      if (res.status === 200) {
        setAllDogs((prev) => prev.filter((dog) => dog.id !== dogId)); //เอาเฉพาะ dogs ที่ไม่ใช่ dogId ที่ req มา
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sharedObj = {
    allDogs,
    oneDog,
    setOneDog,
    createDog,
    updateDog,
    deleteDog,
  };

  return (
    <DogContext.Provider value={sharedObj}>{children}</DogContext.Provider>
  );
}
