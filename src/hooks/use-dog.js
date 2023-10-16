import { useContext } from "react";
import { DogContext } from "../contexts/DogContext";

export default function useDog() {
  return useContext(DogContext);
}
