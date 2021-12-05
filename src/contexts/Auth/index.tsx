import { createContext, useContext } from "react";
import { AuthProviderData, ContextProp } from "../../types/AuthContext";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: ContextProp) => {
  const userId = "Teste";

  return (
    <AuthContext.Provider value={{ userId }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
