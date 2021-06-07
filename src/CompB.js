import React, { useContext } from "react";
import CompC from "./CompC";
import { DataContext } from "./dataContext";
function CompB() {
  const value = useContext(DataContext);
  return (
    <div>
      {value.map((value) => (
        <>
          <h1>Name is {value.name}</h1>
        </>
      ))}
      <CompC />
    </div>
  );
}

export default CompB;
