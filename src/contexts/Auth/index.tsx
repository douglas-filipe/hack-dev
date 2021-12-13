import { createContext, useContext } from "react";
import { AuthProviderData, ContextProp } from "../../types/AuthContext";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: ContextProp) => {
  const userId = "Teste";
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYzOTE0MDI5OSwianRpIjoiNDRiNTIxMjgtMmU5My00YmM3LThlOGUtZDIwODE0Mjc3ZTZjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6OSwibmFtZSI6ImVzdGV2YW4iLCJlbWFpbCI6ImVzdGV2YW5AbWFpbC5jb20iLCJwb2ludHMiOjAsImF2YXRhcl9pZCI6bnVsbCwiYWRkcmVzc19pZCI6bnVsbCwiZXZlbnRfaWQiOm51bGx9LCJuYmYiOjE2MzkxNDAyOTksImV4cCI6MTY0MDQzNjI5OX0.XXqn_N0DripEJ6RL6VNuQ3v9KpTN9Os3NUZM6CAkHO4";

  return (
    <AuthContext.Provider value={{ userId, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
