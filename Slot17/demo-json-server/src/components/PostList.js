import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, ListGroup, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostList = () => {
  console.log("PostList component is rendering"); // Thêm log
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/posts");
        console.log("API response:", response.data); 
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setError("Không thể tải dữ liệu. Vui lòng kiểm tra API.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/posts/${postToDelete}`);
      setData(data.filter((post) => post.id !== postToDelete));
      setShowModal(false);
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;
  if (!data.length) return <div>Không có bài viết nào!</div>;

  return (
    <div className="container mt-5">
      <h1>Danh sách bài viết</h1>
      <Button variant="success" className="mb-3">
        <Link to="/create" style={{ color: "white", textDecoration: "none" }}>
          Tạo bài viết mới
        </Link>
      </Button>
      <ListGroup>
        {data.map((post) => (
          <ListGroup.Item key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/edit/${post.id}`} className="me-2">
              Chỉnh sửa
            </Link>
            <Button
              variant="danger"
              onClick={() => {
                setPostToDelete(post.id);
                setShowModal(true);
              }}
            >
              Xóa
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa bài viết này?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Hủy
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostList;