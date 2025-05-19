import { useState } from 'react';
import CV from '../assets/CV.pdf';

const Navbar = () => {
  const [screen, setScreen] = useState('navbar');

  const toggleNavbar = () => {
    (screen === 'navbar') ? setScreen('navbar responsive') : setScreen('navbar');
  }

  const hideNavbar = () => {
    if (screen === 'navbar responsive') {
      setScreen('navbar');
    }
  }

  let toggleText = (screen === 'navbar') ? 'More' : 'Hide';

  return (
    <div className={screen}>
      <div id='navbar-left'>
        <p id="navbar__control" onClick={() => toggleNavbar()}>{toggleText}</p>
        <a id='home-button' href="#home" onClick={() => hideNavbar()}>Home</a>
      </div>
      <div id='navbar-right'>
        <a href="#about" onClick={() => hideNavbar()}>About</a>
        <a href='#skills' onClick={() => hideNavbar()}>Skills</a>
        <a href='#projects' onClick={() => hideNavbar()}>Projects</a>
        <a href={CV} target="_blank" rel="noopener noreferrer" onClick={() => hideNavbar()}>Resume</a>
      </div>
    </div>
  )
}

export default Navbar;