import { FiExternalLink } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";

import CV from './assets/CV.pdf';
import './App.css';

function App() {
  return (
    <div className="App text-warm bg-cold" >
      <div className="flex flex-col items-center py-4 px-[31%]">
        <section className="w-full py-2 px-8">
          <h1 className="font-[michroma] font-bold text-[4rem] m-0">
            Hi, my name is Sebastian Soto
          </h1>
          <h2 className="font-[michroma] font-normal text-[2rem] m-0">
            and I'm a software developer
          </h2>
        </section>
        <section className="w-full py-2 px-8">
          <p className="font-[michroma] font-normal text-base m-0">
            I am  located in Chile 🇨🇱 with over 3 years of experience as a full stack developer. I like trying tools and programs, managing information, working with software and building interesting things.
          </p>
        </section>
        <section className="w-full py-2 px-8">
          <div className='pb-4'>
            <strong className="font-[michroma] font-normal text-[2rem] m-0">Experience</strong>
          </div>
          <div>
            <strong className="font-[michroma] font-normal text-base m-0">
              Software developer - Work on Law
            </strong>
            <p className="font-[michroma] font-normal text-base m-0">
              2022 - Present
            </p>
            <p className="font-[michroma] font-normal text-base m-0">
              Built, designed and implemented solutions and functionalities to help lawyers and law firms to connect. Working with a varied team of developers, lawyers, recruiters and journalists to understand the business and how to make a positive impact.
            </p>
            <div className="flex flex-row flex-wrap my-1 mx-0">
              <div className="rounded-xl mt-1 mr-2 py-1 px-2 bg-light">
                <p className="font-[michroma] font-normal text-base m-0">
                  Javascript
                </p>
              </div>
              <div className="rounded-xl mt-1 mr-2 py-1 px-2 bg-light">
                <p className="font-[michroma] font-normal text-base m-0">
                  React
                </p>
              </div>
              <div className="rounded-xl mt-1 mr-2 py-1 px-2 bg-light">
                <p className="font-[michroma] font-normal text-base m-0">
                  Ruby on Rails
                </p>
              </div>
              <div className="rounded-xl mt-1 mr-2 py-1 px-2 bg-light">
                <p className="font-[michroma] font-normal text-base m-0">
                  PostgreSQL
                </p>
              </div>
              <div className="rounded-xl mt-1 mr-2 py-1 px-2 bg-light">
                <p className="font-[michroma] font-normal text-base m-0">
                  AWS
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-2 px-8">
          <div className='pb-4'>
            <strong className="font-[michroma] font-normal text-[2rem] m-0">
              Projects
            </strong>
          </div>
          <div className="flex flex-row flex-wrap justify-start items-center">
            <p className="font-[michroma] font-normal text-base m-0 mr-[0.4rem]">
              Calles rotas
            </p>
            <a className="mr-[0.4rem]"
              href="https://callesrotas.com/"
              target='_blank'
              rel="noopener noreferrer"
            >
              <div className="flex flex-row h-full duration-200 hover:text-[1.1rem] hover:text-bright">
                <FiExternalLink />
              </div>
            </a>
            <a className="mr-[0.4rem]"
              href="https://www.instagram.com/callesrotas_/"
              target='_blank'
              rel="noopener noreferrer"
            >
              <div className="flex flex-row h-full duration-200 hover:text-[1.1rem] hover:text-bright">
                <FaInstagram />
              </div>
            </a>
          </div>
          <p className="font-[michroma] font-normal text-base m-0">
            Project made to document and track the state of the infrastructure of Santiago, Chile, in order to help to improve the conditions we live in.
          </p>
          <div className="flex flex-row flex-wrap my-1 mx-0">
            <div className="rounded-xl mt-1 mr-2 py-1 px-2 bg-light">
              <p className="font-[michroma] font-normal text-base m-0">
                Javascript
              </p>
            </div>
            <div className="rounded-xl mt-1 mr-2 py-1 px-2 bg-light">
              <p className="font-[michroma] font-normal text-base m-0">
                React
              </p>
            </div>
            <div className="rounded-xl mt-1 mr-2 py-1 px-2 bg-light">
              <p className="font-[michroma] font-normal text-base m-0">
                PostgreSQL
              </p>
            </div>
            <div className="rounded-xl mt-1 mr-2 py-1 px-2 bg-light">
              <p className="font-[michroma] font-normal text-base m-0">
                Node.js
              </p>
            </div>
            <div className="rounded-xl mt-1 mr-2 py-1 px-2 bg-light">
              <p className="font-[michroma] font-normal text-base m-0">
                Express.js
              </p>
            </div>
          </div>
        </section>
        <footer className="flex flex-row justify-center items-center p-8 w-full">
          <a
            href="https://github.com/sebapkfd"
            target='_blank'
            rel="noopener noreferrer"
          >
            <div className="flex flex-row h-full duration-200 hover:text-[2rem] hover:text-bright py-0 px-2 text-[2rem]">
              <FaGithub />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-soto-59b493207/"
            target='_blank'>
            <div className="flex flex-row h-full duration-200 hover:text-[2rem] hover:text-bright py-0 px-2 text-[2rem]">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row h-full duration-200 hover:text-[2rem] hover:text-bright py-0 px-2 text-[2rem]">
              <FaRegAddressCard />
            </div>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;