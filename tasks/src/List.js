import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



 const List = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Feedback</Nav.Link>
                    <Nav.Link href="#pr">Contact Us</Nav.Link>

                </Nav>
            </Container>
        </Navbar>

    )
}

export default List