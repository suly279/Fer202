import "./App.css";

import IncreaseButton from "./component/Ex1";
import Textbox from "./component/EX2"
import ToggleVisibility from "./component/Ex3";
import TodoList from "./component/Ex4";
import ColorSwitcher from "./component/Ex5";
import SearchFilter from "./component/Ex6";
import DragAndDropList from "./component/Ex7";

function App() {
  return (
    <div className="App app-container">
      <div className="card-container">
        <IncreaseButton />
      </div>
      <div className="card-container">
        <Textbox />
      </div>
      <div className="card-container">
        <ToggleVisibility />
      </div>
      <div className="card-container">
        <TodoList />
      </div>
      <div className="card-container">
        <ColorSwitcher />
      </div>
      <div className="card-container">
        <SearchFilter />
      </div>
      <div className="card-container">
        <DragAndDropList />
      </div>
    </div>
  );
}

export default App;
