import { FiExternalLink } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";

import CV from './assets/CV.pdf';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="home-column">
        <section>
          <h1 className="michroma-bold">Hi, my name is Sebastian Soto</h1>
          <h2 className="michroma-regular">and I'm a software developer</h2>
        </section>
        <section>
          <p className="michroma-small">I am  located in Chile 🇨🇱 with over 3 years of experience as a full stack developer. I like trying tools and programs, managing information, working with software and building interesting things.</p>
        </section>
        <section>
          <div className='section-title'>
            <strong className="michroma-regular">Experience</strong>
          </div>
          <div>
            <strong className="michroma-small">Software developer - Work on Law</strong>
            <p className="michroma-small">2022 - Present</p>
            <p className="michroma-small">Built, designed and implemented solutions and functionalities to help lawyers and law firms to connect. Working with a varied team of developers, lawyers, recruiters and journalists to understand the business and how to make a positive impact.</p>
            <div className="technologies">
              <div className="tech-item"><p className="michroma-small">Javascript</p></div>
              <div className="tech-item"><p className="michroma-small">React</p></div>
              <div className="tech-item"><p className="michroma-small">Ruby on Rails</p></div>
              <div className="tech-item"><p className="michroma-small">PostgreSQL</p></div>
              <div className="tech-item"><p className="michroma-small">AWS</p></div>
            </div>
          </div>
        </section>
        <section>
          <div className='section-title'>
            <strong className="michroma-regular">Projects</strong>
          </div>
          <div className="project-title">
            <p className="michroma-small">Calles rotas</p>
            <a href="https://callesrotas.com/" target='_blank' rel="noopener noreferrer"><div className="icon"><FiExternalLink /></div></a>
            <a href="https://www.instagram.com/callesrotas_/" target='_blank' rel="noopener noreferrer"><div className="icon"><FaInstagram /></div></a>
          </div>
          <p className="michroma-small">
            Project made to document and track the state of the infrastructure of Santiago, Chile, in order to help to improve the conditions we live in.
          </p>
          <div className="technologies">
            <div className="tech-item"><p className="michroma-small">Javascript</p></div>
            <div className="tech-item"><p className="michroma-small">React</p></div>
            <div className="tech-item"><p className="michroma-small">PostgreSQL</p></div>
            <div className="tech-item"><p className="michroma-small">Node.js</p></div>
            <div className="tech-item"><p className="michroma-small">Express.js </p></div>
          </div>
        </section>
        <footer>
          <a href="https://github.com/sebapkfd" target='_blank' rel="noopener noreferrer"><div className="icon"><FaGithub /></div></a>
          <a href="https://www.linkedin.com/in/sebasti%C3%A1n-soto-59b493207/" target='_blank'><div className="icon"><FaLinkedinIn /></div></a>
          <a href={CV} target="_blank" rel="noopener noreferrer"><div className="icon"><FaRegAddressCard /></div></a>
        </footer>
      </div>
    </div>
  );
}

export default App;
