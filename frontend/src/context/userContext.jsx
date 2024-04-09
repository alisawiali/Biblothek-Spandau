import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../url";
const INITIAL_STATE = {};
export const UserHookContext = createContext({});

export const CreateContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await axios.get(`${URL}/api/auth/refetch`, {
        // Mit 'withCredentials: true' teilen wir dem Browser mit, Cookies im Anfrageheader einzuschließe
        withCredentials: true,
      });
      console.log("USER IS", res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Verwende useEffect, um die getUser-Funktion aufzurufen, wenn die Komponente montiert wird
  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserHookContext.Provider value={{ user, setUser }}>
      {children}
    </UserHookContext.Provider>
  );
};
