import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

function PostDetail() {
  const { id } = useParams();
  const posts = [
    { id: "1", title: "React Router Basics", content: "This post explains the basics of React Router." },
    { id: "2", title: "React Bootstrap Introduction", content: "This post introduces how to use React Bootstrap." },
    { id: "3", title: "JavaScript ES6 Features", content: "This post discusses the new features introduced in ES6." }
  ];

  const post = posts.find(p => p.id === id);

  if (!post) {
    return <h2 className="text-center">Post not found 😭</h2>;
  }

  return (
    <Container className="mt-4">
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="text-primary">🎀 {post.title} 🎀</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PostDetail;
