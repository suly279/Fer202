import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import EventHandlingDemo from './components/EventHandlingDemo';
import MyAlert from './components/MyAlert';
import MyDropdown from './components/MyDropdown';
import MyModal from './components/MyModal';
import MyRadioButton from './components/MyRadioButton';

function App() {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Event Handling Examples</h1>
      <EventHandlingDemo />
      <hr />
      <MyAlert />
      <hr />
      <MyDropdown />
      <hr />
      <MyModal />
      <hr />
      <MyRadioButton />
    </Container>
  );
}

export default App;
