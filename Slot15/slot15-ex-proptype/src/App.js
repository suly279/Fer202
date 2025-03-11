// App.js
import React from "react";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import ValidationForm from "./components/ValidationForm";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <div className="App">
      <h2>Ví dụ 1: UserProfile</h2>
      <UserProfile name="Nguyễn Văn A" age={25} />
      <UserProfile name="" age={25} />
      <UserProfile name="Nguyễn Văn B" age="twenty five" />
      <UserProfile name="Nguyễn Văn C" age={null} />

      <h2>Ví dụ 2: UserProfile2</h2>
      <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />

      <h2>Ví dụ 3: MyForm</h2>
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />

      <h2>Ví dụ 4: ValidationForm</h2>
      <ValidationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
