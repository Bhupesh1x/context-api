import React, { useContext } from "react";
import CompB from "./CompB";
import { DataContext } from "./dataContext";

function CompA() {
  const value = useContext(DataContext);
  return (
    <div className="compA">
      {value.map((value) => (
        <>
          <h1>Name is {value.name}</h1>
        </>
      ))}
      <CompB />
    </div>
  );
}

export default CompA;
