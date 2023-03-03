import React from "react";
import Counter from "./components/Counter";
import Steper from "./components/Steper";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steperValue: 1,
    };
  }

  render() {
    return (
      <div className="flex">
        <Counter step={this.state.steperValue} />
        <Steper
          onChange={(value) => this.setState({ steperValue: value })}
          maxValue={3}
        />
      </div>
    );
  }
}

export default App;
