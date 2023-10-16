import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const DogContext = createContext();

export default function DogContextProvider({ children }) {
  const [allDogs, setAllDogs] = useState([]);

  // 1. CREATE dog
  const createDog = async (newDogData) => {
    const res = await axios.post("/dog/create", newDogData);
    setAllDogs((prev) => [...prev, res.data.dog]); //เพิ่มข้อมูล dog ใหม่ โดยไม่กระทบ dogs เดิม (prev = current allDogs state)
  };
  // 2. READ/GET all dogs
  useEffect(() => {
    axios
      .get("dog/read")
      .then((res) => {
        setAllDogs(res.data.dogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 3. UPDATE dog
  const updateDog = async (dogData) => {
    const res = await axios.patch("/dog/update", dogData);
    setAllDogs({ ...allDogs, ...res.dogData }); //อัพเดทข้อมูล dog จากที่มีอยู่
  };

  // 4. DELETE dog
  const deleteDog = async (dogId) => {
    const res = await axios.delete(`/dog/${dogId}`);
    if (res.status === 200) {
      setAllDogs((prev) => prev.filter((dog) => dog.id !== dogId)); //เอาเฉพาะ dogs ที่ไม่ใช่ dogId ที่ req มา
    }
  };

  const sharedObj = { allDogs, createDog, updateDog, deleteDog };

  return (
    <DogContext.Provider value={sharedObj}>{children}</DogContext.Provider>
  );
}
