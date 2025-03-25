import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and password are requied.');
      return;
    }

    try {
      const { data } = await axios.get('http://localhost:4000/UserAccounts');
      const user = data.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        setError(`Welcome, ${username} login Successful`);
        setTimeout(() => navigate("/laptops"), 1000);
      } else {
        setError('Wrong login information!');
      }
    } catch {
      setError('Something went wrong!');
    }
  };

  return (
    <Container className="mt-5 logincontainer">
      <h1 className="text-center mb-4">Login</h1>

      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button style={{textAlign: "center", marginLeft: "20px", paddingLeft: "200px", paddingRight: "200px"}} variant="primary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;