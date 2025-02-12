import React from "react";

const NameTitle = ({ name }) => (
  <h1 className="text-primary">{name}</h1>
);

const NameDescription = ({ description }) => (
  <p className="text-dark">{description}</p>
);

const MyName = () => {
  return (
    <div style={{ marginTop: "20px" }} className="text-center">
      <NameTitle name="Do Thi Thu Ngan" />
      <NameDescription description="Hi, I'm busy" />
    </div>
  );
};

export default MyName;
