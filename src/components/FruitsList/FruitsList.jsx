import React, { useContext, useEffect } from 'react';
import { FruitsContext } from '../../contexts/FruitContext';
// import { FruitsAndSweetsContext } from '../contexts/FruitsAndSweetsContext';
import './FruitsList.css';

const FruitsList = () => {
  const { fruits, setFruits } = useContext(FruitsContext);

  const allFruits = fruits.map((fruit, i) => (
    <li key={i}>{fruit}</li>
  ));

  useEffect(() => {
    // set up
    const logSth = setInterval(() => console.log('sth'), 1000);

    return () => {
      // clean up
      clearInterval(logSth);
    };
  });

  return (
    <>
      <button type="button" className="btn-green" onClick={() => setFruits([...fruits, 'apple'])}>Add 1 apple</button>
      <button type="button" className="btn-green" onClick={() => setFruits([...fruits, 'orange'])}>Add 1 orange</button>
      <button type="button" className="btn-green" onClick={() => setFruits([...fruits, 'lemon'])}>Add 1 lemon</button>
      <p>My fruits:</p>
      <ul>{allFruits}</ul>
    </>
  );
};

export default FruitsList;
