import React from "react";
import "./Progress.css";

const ProgressOne = ({ done }) => {
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
      <div className="progress-done text-sm" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default ProgressOne;
