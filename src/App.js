import React from 'react';
import RedBorder from './components/RedBorder';

import './App.css';
import ClickButton from './components/ClickBotton';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <div className="flex">
        <Counter step={1} />
        <Counter />
        <Counter step={4} />
        <Counter step={434} />
      </div>
    );
  }
}

export default App;
