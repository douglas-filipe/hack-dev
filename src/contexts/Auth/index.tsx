import { createContext, useContext, useState } from "react";
import {
  AuthProviderData,
  ContextProp,
  DataForm,
} from "../../types/AuthContext";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: ContextProp) => {
  const [userId, setUserId] = useState<string>(
    localStorage.getItem("@hack-dev/userId") || ""
  );
  const [token, setToken] = useState<string>(
    localStorage.getItem("@hack-dev/token") || ""
  );

  const reqLogin = async (data: DataForm) => {};

  return (
    <AuthContext.Provider
      value={{ setToken, userId, reqLogin, token, setUserId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
