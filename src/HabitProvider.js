// HabitProvider.js
import React, { createContext, useReducer } from "react";
import HabitReducer from "./HabitReducer";

export const HabitContext = createContext();

const initialState = {
  habits: [],
  archive: []
};

function HabitProvider({ children }) {
  const [state, dispatch] = useReducer(HabitReducer, initialState);

  return (
    <HabitContext.Provider value={{ state, dispatch }}>
      {children}
    </HabitContext.Provider>
  );
}

export default HabitProvider;
