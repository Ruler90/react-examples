import React from 'react';
import './scss/App.css';
import ExampleClassComponent from './components/ExampleClassComponent';
import FruitsList from './components/FruitsList';
// import FruitsContextProvider from './contexts/FruitContext';
// import SweetsContextProvider from './contexts/SweetsContext';
import SweetsList from './components/SweetsList';
import FruitsAndSweetsContextProvider from './contexts/FruitsAndSweetsContext';

const App = () => {
  const spanText = 'This is React App template';

  return (
    <div className="App">
      {/* <FruitsContextProvider>
        <FruitsList />
      </FruitsContextProvider>
      <SweetsContextProvider>
        <SweetsList />
      </SweetsContextProvider> */}
      <FruitsAndSweetsContextProvider>
        <FruitsList />
        <div className="horizontal-line" />
        <SweetsList />
      </FruitsAndSweetsContextProvider>

      <div className="horizontal-line" />
      <ExampleClassComponent />

      <div className="horizontal-line" />
      <span>{spanText}</span>
    </div>
  );
};

export default App;
