import React, { useState, createContext } from "react";

const Context = createContext();

export function DropdownProvider({ children }) {
  const [options, setOptions] = useState([]);
}
