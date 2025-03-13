import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';

function Post() {
  const [posts] = useState([
    { id: "1", title: "React Router Basics" },
    { id: "2", title: "React Bootstrap Introduction" },
    { id: "3", title: "JavaScript ES6 Features" }
  ]);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">✨ Post List ✨</h2>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Link to={`/post/${post.id}`} className="btn btn-primary">💖 Read More</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Post;
