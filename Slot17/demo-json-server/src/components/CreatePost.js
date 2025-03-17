import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setStatus("Tiêu đề và nội dung không được để trống!");
      return;
    }

    const newPost = { title, content };
    try {
      await axios.post("http://localhost:4000/posts", newPost);
      setStatus("Bài viết đã được tạo thành công!");
      setTimeout(() => navigate("/posts"), 1000);
    } catch (error) {
      setStatus("Có lỗi xảy ra khi tạo bài viết.");
      console.error("Lỗi:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Thêm bài viết mới</h1>
      {status && <Alert variant={status.includes("thành công") ? "success" : "danger"}>{status}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tiêu đề"
          />
        </Form.Group>
        <Form.Group controlId="content" className="mt-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Nhập nội dung"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Tạo bài viết
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;