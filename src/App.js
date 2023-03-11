//import logo from './logo.svg';
//import './App.scss';
//import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigate from "./components/nav";
// import callBoard from "./components/callBoard";
import "./App.css";
import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import { BsBank } from "react-icons/bs";

function App() {
  return (
    <div className="App">
   
      <Router>
      <Navigate />
        <header className="App-header">
       

         <div class="wrap">
          <iframe
            title="callBoard"           
            sandbox="allow-same-origin allow-forms allow-scripts"  
            src="https://synovus.clearviewportal.com/Admin/WallboardView.aspx?id=4eeaa788-2b49-4bba-ba18-b5bcb91f7c86"
          ></iframe>
        </div>   

        </header>
      </Router>
    </div>
  );
}

export default App;

/*<style type="text/css">
        {`
    .btn-flat {
      background-color: gray;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style> */

/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample; */

{
  /* function App() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
        
        <header className="App-header">

          <style type="text/css">
          {`
    .btn-flat {
      background-color: purple;
      color: grey;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
        </style>

        <h1>
          <BsBank />
        </h1>
        <Button variant="flat" size="xxl" onClick={() => setIsOpen(true)}>
          YOU
        </Button>
        {isOpen && (
          <div>
                    <div>          know         </div>
                    
            <Button variant="flat" size="xxl" onClick={() => setIsOpen(false)}>
                       I Love You         
            </Button>
                   
          </div>
        )}*/
}

{
  /* <div class="wrap">
          <iframe
            title="callBoard"           
            sandbox="allow-same-origin allow-forms allow-scripts"  
            src="https://synovus.clearviewportal.com/Admin/WallboardView.aspx?id=4eeaa788-2b49-4bba-ba18-b5bcb91f7c86"
          ></iframe>
        </div>   */
}
