import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../url";
const INITIAL_STATE = {};
export const UserHookContext = createContext({});

export const CreateContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  // Funktion zum Abrufen des Benutzers vom Server zum refrecht
  const getUser = async () => {
    try {
      const res = await axios.get(`${URL}/api/auth/refetch`, {
        withCredentials: true,
      });
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
