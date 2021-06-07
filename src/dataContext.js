import React, { createContext } from "react";

const DataContext = createContext();

const DataProvider = (props) => {
  const data = [
    {
      name: "John",
    },
    {
      name: "jonny",
    },
    {
      name: "james",
    },
    {
      name: "dev",
    },
  ];

  return (
    <>
      <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
    </>
  );
};

export { DataContext };
export { DataProvider };
