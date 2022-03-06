import React, { createContext, useContext, useState, useEffect } from "react";

interface MainContextProps {
  children: React.ReactNode;
}

interface DefaultState {
  previousInvestment: object;
  setPreviousInvestment: () => void;
}

const defaultState = {
  previousInvestment: {},
  setPreviousInvestment: () => {},
};

export const mainContext = createContext(defaultState as DefaultState);

export const MainContext = ({ children }: MainContextProps) => {
  const [previousInvestment, setPreviousInvestment] = useState(
    defaultState.previousInvestment
  );

  return (
    <mainContext.Provider
      value={{
        previousInvestment,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export function useMainContext() {
  return useContext(mainContext);
}