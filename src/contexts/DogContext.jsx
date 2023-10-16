// import { useParams } from "react-router-dom";
import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const DogContext = createContext();

export default function DogContextProvider({ children }) {
  // const { dogId } = useParams();
  const [allDogs, setAllDogs] = useState([]);
  // const [oneDog, setOneDog] = useState({
  //   dogName: "",
  //   gender: "",
  //   breed: "",
  //   description: "",
  // });

  // 1. CREATE dog
  const createDog = async (newDogData) => {
    try {
      const res = await axios.post("/dog/create", newDogData);
      setAllDogs((prev) => [...prev, res.data.dog]); //เพิ่มข้อมูล dog ใหม่ โดยไม่กระทบ dogs เดิม (prev = current allDogs state)
    } catch (err) {
      console.log(err);
    }
  };

  // 2. READ/GET
  // 2.1 Read all dogs
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

  // 2.2 Read one dog
  // useEffect(() => {
  //   const readOneDog = async () => {
  //     try {
  //       const res = axios.get(`/dog/read/${dogId}`);
  //       setOneDog(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   readOneDog();
  // }, [dogId]); //ทำงานเมื่อมีการเปลี่ยนแปลงของ dogId

  // 3. UPDATE dog
  const updateDog = async (updatedDogData) => {
    try {
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
      setAllDogs({ ...allDogs, ...res.dogData }); //อัพเดทข้อมูล dog จากที่มีอยู่
      console.log(formData);
    } catch (err) {
      console.log(err);
    }
  };

  // const updateDog = async (updatedDogData) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("id", updatedDogData.id);
  //     formData.append("dogName", updatedDogData.dogName);
  //     formData.append("gender", updatedDogData.gender);
  //     formData.append("breed", updatedDogData.breed);
  //     formData.append("description", updatedDogData.description);

  //     if (updatedDogData.dogImage) {
  //       formData.append("dogImage", updatedDogData.dogImage);
  //     }

  //     const res = await axios.patch(
  //       `/dog/update/${updatedDogData.id}`,
  //       formData
  //     );

  //     // Assuming the response contains the updated dog data
  //     const updatedDog = res.data.dog;

  //     // Update the dogs in your state based on the updated dog's ID
  //     const updatedDogs = allDogs.map((dog) =>
  //       dog.id === updatedDog.id ? updatedDog : dog
  //     );

  //     // Update the state with the new dogs array
  //     setAllDogs(updatedDogs);

  //     console.log(formData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
    // oneDog,
    // setOneDog,
    createDog,
    updateDog,
    deleteDog,
  };

  return (
    <DogContext.Provider value={sharedObj}>{children}</DogContext.Provider>
  );
}
