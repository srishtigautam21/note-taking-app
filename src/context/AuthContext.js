import { useContext, createContext } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
