import React, { useState } from "react";
import { Dropdown, DropdownButton, Container } from "react-bootstrap";

function MyDropdown() {
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (eventKey, event) => {
    setSelectedItem(event.target.innerText);
  };

  return (
    <Container className="my-4 py-4 d-flex flex-column justify-content-center align-items-center">
      <h3>Dropdown Select Demo</h3>
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedItem || "Select an item"}
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="1">Item 1</Dropdown.Item>
        <Dropdown.Item eventKey="2">Item 2</Dropdown.Item>
        <Dropdown.Item eventKey="3">Item 3</Dropdown.Item>
      </DropdownButton>

      {selectedItem && <p className="mt-3">You selected: {selectedItem}</p>}
    </Container>
  );
}

export default MyDropdown;
