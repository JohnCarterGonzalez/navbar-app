import React, {useContext} from 'react';
import Context from './../context/Context.js'; 
import { Form, Button } from 'react-bootstrap';

const NavForm = () => {
  
  const context = useContext(Context);
  let inputName = "";

  const handleNameChange = e => {
    inputName = e.target.value;
  };

  const handleClickSetName = e => {
    context.setName(inputName);
    e.target.value = "";
  };


  return (
    <Form className = "mb-3">

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Bob Smith" defaultValue="" handleNameChange={ handleNameChange }/>
      </Form.Group>

      <Button variant="primary" type="submit" handleClickSetName={ handleClickSetName }>
        Submit
      </Button>

    </Form> 

  );
}
export default NavForm;
