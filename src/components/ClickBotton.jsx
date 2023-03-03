import React, { useState } from "react";

const ClickedButton = (props) => {
  const { hover, afterClickText, children } = props;
  const [clicked, setClicked] = useState(false);

    if (clicked) {
      return <h2>{afterClickText || "You clicked and liked"}</h2>;
    }

    let buttonStyle =
      "bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded";
    const hoverStyle =
      "hover:bg-blue-500 hover:text-white hover:border-transparent";

    if (hover) {
      buttonStyle = `${buttonStyle} ${hoverStyle}`;
    }

    return (
      <button
        className={buttonStyle}
        onClick={() => setClicked(true)}
      >
        {children}
      </button>
    ); 
};
export default ClickedButton;