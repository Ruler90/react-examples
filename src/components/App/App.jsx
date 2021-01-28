import React from 'react';
import './App.css';
import ExampleClassComponent from '../ExampleClassComponent';
import FruitsContextProvider from '../../contexts/FruitContext';
import SweetsContextProvider from '../../contexts/SweetsContext';
import FruitsList from '../FruitsList/FruitsList';
import SweetsList from '../SweetsList/SweetsList';
// import FruitsAndSweetsContextProvider from './contexts/FruitsAndSweetsContext';
import Users from '../Users/Users';

const App = () => {
  const titleText = 'React Playground';

  return (
    <div className="App">
      <h1>{titleText}</h1>
      <div className="horizontal-line" />

      <FruitsContextProvider>
        <FruitsList />
      </FruitsContextProvider>
      <div className="horizontal-line" />

      <SweetsContextProvider>
        <SweetsList />
      </SweetsContextProvider>
      {/* <FruitsAndSweetsContextProvider>
        <FruitsList />
        <div className="horizontal-line" />
        <SweetsList />
      </FruitsAndSweetsContextProvider> */}
      <div className="horizontal-line" />

      <ExampleClassComponent />
      <div className="horizontal-line" />

      <Users />

    </div>
  );
};

export default App;
