import React from 'react';
import RedBorder from './components/RedBorder';

import './App.css';
import ClickButton from './components/ClickBotton';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
