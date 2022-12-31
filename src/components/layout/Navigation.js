import React ,{Fragment}from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navigation = () => {
    return (
        <Fragment>
          <Navbar sticky='top' bg="dark" variant="dark">
            <Container>
              <Row>
                <Nav className="me-auto">
                  <Col>
                    <Nav.Link href="#home">About</Nav.Link>
                  </Col>
                  <Col lg={20}>
                    <Nav.Link href="#projects">Project</Nav.Link>
                  </Col>
                  <Col>
                    <Nav.Link href="#languages">Languages</Nav.Link>
                  </Col>
                </Nav>
              </Row>
            </Container>
          </Navbar>
        </Fragment>
      );
}

export default Navigation
