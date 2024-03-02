import React, { createContext, useState, useContext } from "react";

interface StateContextType {
  screenSize: number | undefined;
  activeMenu: boolean;
  setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
  const [activeMenu, setActiveMenu] = useState<boolean>(true);

  return (
    <StateContext.Provider
      value={{
        screenSize,
        activeMenu,
        setActiveMenu,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a ContextProvider");
  }
  return context;
};
