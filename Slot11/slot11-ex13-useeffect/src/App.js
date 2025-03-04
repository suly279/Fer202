import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";  
import "./App.css";
import UserPosts from "./component/UserPosts";
import CountdownTimer from "./component/CountdownTimer";
import WindowSize from "./component/WindowSize";
import ValidatedInput from "./component/ValidatedInput";

function App() {
  return (
    <div className="app-container">
      <UserPosts />
      <CountdownTimer initialValue={10} />
      <WindowSize />
      <ValidatedInput validationFunction={(val) => val.length >= 5} placeholder="Nhập ít nhất 5 ký tự" successMessage="Dữ liệu hợp lệ!" />
    </div>
  );
}

export default App;
