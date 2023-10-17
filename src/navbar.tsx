import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './batch.png';

export const AppNavbar = ({name} : {name: string}) => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          GCP Job Manager
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/input">Input</Nav.Link>
          <Nav.Link href="/monitor">Monitor</Nav.Link>
          <Nav.Link href="/results">Results</Nav.Link>
          <Nav.Link href="/three">3D</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="login">{name}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}