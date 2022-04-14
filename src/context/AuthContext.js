import { useContext, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const initialData = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };
  const [loginInfo, setloginInfo] = useState(initialData);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.encodedToken);
      setUserLoggedIn(true);
      navigate("/homePage");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <AuthContext.Provider
      value={{ loginHandler, loginInfo, setloginInfo, isUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
