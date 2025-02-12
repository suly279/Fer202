import React from "react";

const Message = ({ text }) => (
  <h2 className="text-center mt-4">{text}</h2>
);

const HelloWorld = () => {
  return <Message text="Hello, World!" />;
};

export default HelloWorld;