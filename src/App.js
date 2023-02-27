import React from 'react';
import { RedBorder } from './components/RedBorder';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <RedBorder>
          My React app
        </RedBorder>
      </div>
    );
  }
}

export default App;
