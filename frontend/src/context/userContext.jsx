import { createContext, useState } from "react";

const INITIAL_STATE = {};
export const UserContext = createContext({});

export const CreateContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
