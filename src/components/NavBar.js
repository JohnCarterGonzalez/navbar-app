import React, { useContext } from 'react';
import NameContext from '../context/Context.js';

const style = {
  background: "purple", 
  display: "flex",
  padding: "20px", 
  alignItems: "center", 
  justifyContent: "flex-end", 
  color: "white",
};

export default () => {
  const { name } = useContext(NameContext);

  return <div style={style}> Hi {name}!</div>
};
