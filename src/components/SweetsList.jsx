import React, { useContext } from 'react';
// import { SweetsContext } from '../contexts/SweetsContext';
import { FruitsAndSweetsContext } from '../contexts/FruitsAndSweetsContext';

const SweetsList = () => {
  const { sweets, setSweets } = useContext(FruitsAndSweetsContext);

  const allSweets = sweets.map((sweet, i) => (
    <li key={i}>{sweet}</li>
  ));

  return (
    <>
      <button type="button" className="btn-pink" onClick={() => setSweets([...sweets, 'chocolate'])}>Add 1 chocolate</button>
      <button type="button" className="btn-pink" onClick={() => setSweets([...sweets, 'lollipop'])}>Add 1 lollipop</button>
      <button type="button" className="btn-pink" onClick={() => setSweets([...sweets, 'cookie'])}>Add 1 cookie</button>
      <p>My sweets:</p>
      <ul>{allSweets}</ul>
    </>
  );
};

export default SweetsList;
