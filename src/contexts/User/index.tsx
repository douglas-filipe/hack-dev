import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { ContextProp } from "../../types/AuthContext";
import { UserData, UserProviderData } from "../../types/UserContext";
import { useAuth } from "../Auth";
import { toast } from "react-toastify";

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: ContextProp) => {
  const [user, setUser] = useState<UserData[]>([]);
  const { token, userId } = useAuth();

  const getUser = async () => {
    const response = await api.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser([response.data]);
  };

  const updateUser = async () => {
    const response = await api.patch(`/users/address/update/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
