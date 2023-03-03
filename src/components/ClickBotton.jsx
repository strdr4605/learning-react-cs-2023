import React from "react";

export default class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    const { hover, afterClickText, children } = this.props;

    if (this.state.clicked) {
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
        onClick={() => this.setState({ clicked: true })}
      >
        {children}
      </button>
    );
  }
}
