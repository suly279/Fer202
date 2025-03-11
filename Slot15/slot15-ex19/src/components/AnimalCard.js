import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import "./AnimalCard.css";

export default function AnimalCard({ name, scientificName, size, diet, image, additional }) {
  const showAdditionalData = () => {
    if (!additional) {
      alert("No additional information available.");
      return;
    }

    const additionalInfo = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    alert(additionalInfo);
  };

  return (
    <Card className="animal-card">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title className="animal-name">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Scientific Name: {scientificName}</Card.Subtitle>
        <Card.Text>
          <strong>{size} kg</strong> <br />
          {diet.join(", ")}
        </Card.Text>
        <Button variant="danger" onClick={showAdditionalData}>More Info</Button>
      </Card.Body>
    </Card>
  );
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  additional: PropTypes.shape({
    notes: PropTypes.string,
    link: PropTypes.string
  }),
};

AnimalCard.defaultProps = {
  additional: {
    notes: "No Additional Information"
  }
};
