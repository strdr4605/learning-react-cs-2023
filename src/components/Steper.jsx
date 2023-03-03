import React from "react";
import Button from "./Button";

export default class Steper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  decrement() {
    const newStep = this.state.step - 1;
    this.setState({ step: newStep });
    this.props.onChange(newStep);
  }

  increment() {
    const newStep = this.state.step + 1;
    this.setState({ step: newStep });
    this.props.onChange(newStep);
  }

  render() {
    const showIncButton =
      this.props.maxValue === undefined ||
      this.state.step < this.props.maxValue;

    return (
      <div className="border border-2 border-blue-400 p-2 m-2">
        <h1>Step: {this.state.step}</h1>
        {this.state.step > 1 && (
          <Button onClick={() => this.decrement()}>
            -{this.props.step || 1}
          </Button>
        )}
        {showIncButton ? (
          <Button onClick={() => this.increment()}>
            +{this.props.step || 1}
          </Button>
        ) : (
          <span>Max value reached</span>
        )}
      </div>
    );
  }
}
