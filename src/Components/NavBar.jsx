import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function BasicExample(props) {
  return (
    <Navbar bg={`${props.mode}`} variant={`${props.mode}`} expand="lg">
      <Container>
        {/* <Navbar.Brand as={Link} to="/">Text-Utils</Navbar.Brand> */}
        <Navbar.Brand href="#">Text-Utils</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
            <Nav.Link href="#">Home</Nav.Link>
            {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
          </Nav>

          <Form.Check type="switch" onClick={props.toggleMode} label={`${props.mode} mode`}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;