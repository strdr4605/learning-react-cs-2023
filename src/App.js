import React from 'react';
import RedBorder from './components/RedBorder';

import './App.css';
import ClickButton from './components/ClickBotton';
import Counter from './components/Counter';
import Steper from './components/Steper';

class App extends React.Component {
  render() {
    return (
      <div className="flex">
        <Counter />
        <Steper maxValue={3}/>
      </div>
    );
  }
}

export default App;
