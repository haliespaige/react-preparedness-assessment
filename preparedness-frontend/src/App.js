import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [name, setName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value)
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  };

  const handleReset = () => {
    setName("")
  };

  return (
    <div className="entire-content">
      <h1 >Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="button-container">
        <Button id="button" onClick={toggleModal}>Click Me</Button>
        <Button id="button" onClick={handleReset}>Reset</Button>
        </div>
        <ModalComponent isOpen={modalOpen} toggle={toggleModal} name={name} />
      </div>
    </div>
  )
}

export default App
