import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/posts');
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu!');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button className="mt-4 w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
