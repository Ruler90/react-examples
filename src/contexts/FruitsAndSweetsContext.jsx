import React, { createContext, useState } from 'react';

export const FruitsAndSweetsContext = createContext();

const FruitsAndSweetsContextProvider = (props) => {

  // It's not relevant how many states we have in context hook
  // if one of them changes, every child of context provider will re-render
  const [fruits, setFruits] = useState([]);
  const [sweets, setSweets] = useState([]);

  return (
    <FruitsAndSweetsContext.Provider value={{ fruits, setFruits, sweets, setSweets }}>
      { props.children }
    </FruitsAndSweetsContext.Provider>
  );
};

export default FruitsAndSweetsContextProvider;
