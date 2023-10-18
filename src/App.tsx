import {useEffect, useState} from 'react';
import { AppNavbar, themeMode } from './navbar/navbar';

import { Container } from 'react-bootstrap';
import { AppRouter } from './router/AppRouter';

const App = () => {
  const [mode, changeMode] = useState(themeMode.Light)

  const handeModeChange = (newMode: any) => {
    changeMode(newMode)
  }

  useEffect(() => {
    // Have to set the theme on the body tag otherwise it doesn't
    // cascade down properly e.g. background gets inherited from the
    // default body colour...which is white!
    document.body.setAttribute("data-bs-theme", mode)
  }, [mode])

  return (
    <Container className="vh-100 px-0" fluid={true} data-bs-theme={mode}>
      <AppNavbar name="Ben Cannell" setMode={handeModeChange}/>
      <AppRouter />
    </Container>
  );
}

export default App;
