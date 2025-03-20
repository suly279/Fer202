import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  console.log("Login component is rendering"); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { username, password }); 
    if (!username || !password) {
      setMessage("Username và password không được để trống!");
      return;
    }

    const users = [
      { username: "adminuser", password: "admin1234", },
      { username: "janedoe", password: "password567" },
      { username: "mikejones", password: "password890" },
      { username: "guest", password: "guest123" },
    ];

    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setMessage(`Welcome, ${username} login Successful`);
      setTimeout(() => navigate("/Products"), 1000);
    } else {
      setMessage("Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      {message && <Alert variant={message.includes("success") ? "success" : "danger"}>{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
        Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;