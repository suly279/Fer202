import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const UserProfile = ({ name, age }) => {
  if (!name || typeof name !== "string") {
    return (
      <Card className="user-card">
        <Card.Body>
          <h3>Thông Tin Người Dùng</h3>
          <p className="error-text">Tên không hợp lệ hoặc không được cung cấp!</p>
        </Card.Body>
      </Card>
    );
  }

  if (!age) {
    return (
      <Card className="user-card">
        <Card.Body>
          <h3>Thông Tin Người Dùng</h3>
          <p>Tên: {name}</p>
          <p className="error-text">Tuổi không được để trống!</p>
        </Card.Body>
      </Card>
    );
  } else if (isNaN(age)) {
    return (
      <Card className="user-card">
        <Card.Body>
          <h3>Thông Tin Người Dùng</h3>
          <p>Tên: {name}</p>
          <p className="error-text">Tuổi phải là một số hợp lệ!</p>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="user-card">
      <Card.Body>
        <h3>Thông Tin Người Dùng</h3>
        <p>Tên: {name}</p>
        <p>Tuổi: {age}</p>
      </Card.Body>
    </Card>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserProfile;
