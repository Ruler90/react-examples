import React, { createContext, useState } from 'react';

export const FruitsContext = createContext();

const FruitsContextProvider = (props) => {
  const [fruits, setFruits] = useState([]);

  return (
    <FruitsContext.Provider value={{ fruits, setFruits }}>
      { props.children }
    </FruitsContext.Provider>
  );
};

export default FruitsContextProvider;
