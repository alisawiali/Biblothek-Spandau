import React, { createContext, useState } from "react";

const INITIAL_STATE = {};
export const UserHookContext = createContext({});

export const CreateContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserHookContext.Provider value={{ user, setUser }}>
      {children}
    </UserHookContext.Provider>
  );
};
