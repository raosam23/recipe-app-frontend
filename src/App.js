import Form from "./components/Form";
import Title from "./components/Title";
import DishState from "./context/Dish/DishState";

function App() {
  return (
    <>
      <DishState>
        <Title />
        <Form />
      </DishState>
    </>
  );
}

export default App;
