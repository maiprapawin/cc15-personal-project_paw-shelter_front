// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import DogContextProvider from "./contexts/DogContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <DogContextProvider>
      <App />
    </DogContextProvider>
  </AuthContextProvider>
);
