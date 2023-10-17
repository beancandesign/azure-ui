import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './batch.png';
import { MoonStarsFill, SunFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

export enum themeMode {
  Light = "light",
  Dark = "dark"
}

const ThemeIcon = ({theme} : {theme: themeMode}) => {
  if (theme === themeMode.Dark){
    return (
      <MoonStarsFill/>
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
      console.log(theme)
    }}>
      <ThemeIcon theme={theme}/>
    </Button>
  )
}

export const AppNavbar = ({name, setMode} : {name: string, setMode: React.Dispatch<React.SetStateAction<themeMode>>}) => {

  return (
    <Navbar className="bg-body-tertiary justify-content-start">
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
          <Navbar.Text>
            {'      '}
          </Navbar.Text>
          <Navbar.Text>
            <ThemeToggle setMode={setMode}/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}