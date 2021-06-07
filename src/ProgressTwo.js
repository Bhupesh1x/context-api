import React from "react";
import "./Progress.css";

const ProgressTwo = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-do text-sm" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default ProgressTwo;
