// import React from 'react';
// import {  Link } from "react-router-dom";
// const Navbar= () =>{
//   return (
//   <div>
//     {/* <li>
//       <Link to="/">Dogs</Link>
//     </li>
//     <li>
//       <Link to="/cats">Cats</Link>
//     </li>
//     <li>
//       <Link to="/sheeps">Sheeps</Link>
//     </li>
//     <li>
//       <Link to="/goats">Goats</Link>
//     </li> */}

//   </div>
//   );
// }
// export default Navbar;

import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";

function Navi() {
  return (
    <Navbar bg="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#"><img style={{fontSize:"38px", width:"60px", borderRadius:"30px"}} src="https://qph.cf2.quoracdn.net/main-qimg-a27e58e0da4898056e23d3fffee64f0c" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", marginLeft:"500px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color:"white", fontSize:"19px", marginRight:"10px", padding:"5px 5px 5px 5px", margin:"10px"}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{ color:"white", fontSize:"19px", marginRight:"10px", padding:"5px 5px 5px 5px", margin:"10px"}}>About</Nav.Link>
            <Nav.Link href="#action2" style={{ color:"white", fontSize:"19px", marginRight:"10px", padding:"5px 5px 5px 5px", margin:"10px"}}>Services</Nav.Link>
            <Nav.Link href="#action2" style={{ color:"white", fontSize:"19px", marginRight:"10px", padding:"5px 5px 5px 5px", margin:"10px"}}>Contact Us</Nav.Link>
          </Nav>

          
            <Button
                    variant="outline-light"
                    style={{ borderRadius: "90px" ,color:"white", marginRight:"20px"}}
                  >
                    Start a Free Trial
                  </Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  //   <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src="" />
  //   <Card.Body>
  //     <Card.Title>Card Title</Card.Title>
  //     <Card.Text>
  //       Some quick example text to build on the card title and make up the
  //       bulk of the card's content.
  //     </Card.Text>
  //     <Button variant="primary">Go somewhere</Button>
  //   </Card.Body>
  // </Card>
}

export default Navi;
