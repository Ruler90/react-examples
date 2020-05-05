import React, { createContext, useState } from 'react';

export const SweetsContext = createContext();

const SweetsContextProvider = (props) => {
  const [sweets, setSweets] = useState([]);

  return (
    <SweetsContext.Provider value={{ sweets, setSweets }}>
      { props.children }
    </SweetsContext.Provider>
  );
};

export default SweetsContextProvider;
