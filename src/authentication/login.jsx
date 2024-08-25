import { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyError,
  notifyInfo,
  notifyRedir,
  notifySuccess,
} from "../utils/toastNotifications";
import "../styles/register.css";

const Login = () => {
  const bgColor = localStorage.getItem("color") || "rgba(37, 117, 17, 1)"; // Fallback color
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const URL = "http://localhost:8080/api/bime/auth/register";
    let item = { username, email, password };

    if (username !== "" && email !== "" && password !== "") {
      const response = await axios
        .post(URL, item)
        .then((res) => res.data)
        .catch((error) => error);

      if (response.name === "AxiosError") {
        notifyError("Register failed. Try logging in.");
      } else {
        notifySuccess(response.message);
        localStorage.setItem("username", response.username);
        setTimeout(() => {
          notifyRedir("We sent a verification link to your email.");
        }, 2000);
      }
    } else {
      notifyInfo("Please fill in the form below!");
    }
  };

  return (
    <div
      className="reg-main min-h-screen w-full flex items-center justify-center "
      style={{ width: "100vw" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-50 p-6 rounded-lg w-80 sm:w-96 shadow-md"
      >
        <h1 className={"text-center text-2xl mb-4 text-grey-800"}>Doeet.</h1>
        <button
          type="button"
          className="w-full flex items-center justify-center py-2 mb-4 text-lg text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <svg
            className="w-5 h-5 mr-2 outline-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.15 0 5.83 1.09 8 3.13l6-6c-3.61-3.36-8.31-5.36-14-5.36-8.09 0-14.89 5.28-17.33 12.57l6.86 5.33C10.62 14.98 16.94 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.62 24.98c0-1.11-.1-2.18-.26-3.23H24v6.09h12.75c-.52 2.67-2.08 4.94-4.25 6.41l6.62 5.14c3.87-3.55 6.1-8.78 6.1-14.41z"
            />
            <path
              fill="#FBBC05"
              d="M7.66 28.31c-.98-2.86-.98-5.96 0-8.82L.8 13.36C-1.06 17.23-1.06 22.77.8 26.64l6.86-5.33z"
            />
            <path
              fill="#34A853"
              d="M24 48c5.97 0 11-1.93 14.67-5.27l-6.62-5.14c-2.04 1.39-4.6 2.23-8.05 2.23-7.08 0-13.19-4.71-15.37-11.35L.8 26.64C3.21 33.92 11.17 39.5 20.58 39.5c5.28 0 9.78-1.61 13.35-4.34l6.86 5.33C35.4 44.1 30 48 24 48z"
            />
          </svg>
          Continue with Google
        </button>
        
        <input
          className="w-full p-2 mb-4 text-center text-black bg-transparent border border-white rounded-lg outline-none placeholder-green-900 placeholder-bold"
          type="email"
          placeholder="youremail@...com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="w-full p-2 mb-4 text-center text-black bg-transparent border border-white rounded-lg outline-none placeholder-green-900 placeholder-bold"
          type="password"
          maxLength={8}
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className={`w-full py-2 text-lg text-white rounded-lg bg-${bgColor} outline-none hover:scale-105 transform transition`}
          type="submit"
        >
          Sign Up
        </button>
        <ToastContainer />
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-green-900">
            login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
