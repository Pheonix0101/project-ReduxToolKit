import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div>
        <h1>Manage Your Todos Here</h1>
      </div>

      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
