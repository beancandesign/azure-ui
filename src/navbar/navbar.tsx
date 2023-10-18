import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../batch.png';
import { MoonStarsFill, SunFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css'

export enum themeMode {
  Light = "light",
  Dark = "dark"
}

const ThemeIcon = ({theme} : {theme: themeMode}) => {
  if (theme === themeMode.Dark){
    return (
      <MoonStarsFill color='black'/>
    )
  }
  else {
    return (
      <SunFill/>
    )
  }
}

const ThemeToggle = ({setMode}: {setMode: React.Dispatch<React.SetStateAction<themeMode>>}) => {
  const [theme, setTheme] = useState(themeMode.Dark)

  return (
    <Button onClick={e => {
      setTheme(theme == themeMode.Light && themeMode.Dark || themeMode.Light);
      setMode(theme);
    }}
    style={{background: "transparent"}}>
      <ThemeIcon theme={theme}/>
    </Button>
  )
}

export const AppNavbar = ({name, setMode} : {name: string, setMode: React.Dispatch<React.SetStateAction<themeMode>>}) => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          GCP Job Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            variant="underline"
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='mx-2'>
              <Link to="/" className='link'>Home</Link>
            </Nav.Link>
            <Nav.Link className='mx-2'>
              <Link to="/input" className='link'>Input</Link>
            </Nav.Link>
            <Nav.Link className='mx-2'>
              <Link to="/monitor" className='link'>Monitor</Link>
            </Nav.Link>
            <Nav.Link className='mx-2'>
              <Link to="/results" className='link'>Results</Link>
            </Nav.Link>
            <Nav.Link className='mx-2'>
              <Link to="/three" className='link'>3D</Link>
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <div style={{paddingRight: "10px"}}>
              <ThemeToggle setMode={setMode}/>
            </div>
            <Navbar.Text>
              Signed in as: <a href="login">{name}</a>
            </Navbar.Text>
          </Nav>
          
        </Navbar.Collapse>

      </Container>
      <Outlet/>
    </Navbar>
  )
}