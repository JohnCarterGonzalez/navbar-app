import React, { useState } from 'react';
import NameContext from '../context/Context.js';

export default ({ children }) => {
  const [name, setName ] = useState("");

  return (
    <NameContext.Provider value={{ name, setName }}>{children}</NameContext.Provider>
  );
}
