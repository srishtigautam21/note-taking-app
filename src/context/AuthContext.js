import { useContext, createContext, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { loginToast } from "../utils/toastify";
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = {
    email: "",
    password: "",
  };
  let from = location.state?.from?.pathname || "/homePage";

  const [loginInfo, setloginInfo] = useState(initialData);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setUserLoggedIn(true);
      navigate(from, { replace: true });
      loginToast("Login Successful");
    } catch (e) {
      console.error(e);
    }
  };

  const logOut = () => {
    localStorage.clear();
    setUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ loginHandler, loginInfo, setloginInfo, isUserLoggedIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
