import React, { useState } from 'react';
import NavBar from './components/NavBar.js';
import FormWrapper from './components/FormWrapper.js';
import Context from "./context/Context.js";

function App() {
  const [ name, setName ] = useState("");

  <div>
    <Context.Provider value= {{ name, setName }}>
      <NavBar />
      <FormWrapper />
    </Context.Provider> 
  </div>;
}

export default App;
