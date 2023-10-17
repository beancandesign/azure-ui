import React, {useEffect, useState} from 'react';
import logo from './../batch.png';
import './home.css';
import 'bootswatch/dist/yeti/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { AnimatedBar } from '../common/progress';

export const Home = () => {
  const total = 100
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (time > total){
        setTime(0)
      } else {
        setTime(time + 1)
      }
    }, 200);
  }, [time]);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p></p>
        <h2 className="Home-progress">
          <AnimatedBar total={total} progress={time}/>
        </h2>
        <p></p>
        <h1>
          Landing page for monitoring jobs.
        </h1>
        <p></p>
        <Link to='https://reactjs.org'>
          <Button className="btn btn-info">Go to I</Button>
        </Link>
      </header>
    </div>
  );
}