import {useState} from 'react';
import Form from './components/Form';
import Title from './components/Title';

function App() {
  const [dishName, setDishName] = useState("");
  return (
    <>
      <Title />
      <Form dishName = {dishName} setDishName = {setDishName} />
      <br />
    </>
  );
}

export default App;
