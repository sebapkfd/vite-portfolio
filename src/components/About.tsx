import githubLight from '../assets/logos/github.png';
import linkedin from '../assets/logos/linkedin.png';

const About = () => {

  const copyMail = () => {
    navigator.clipboard.writeText('ssoto.desarrollador@gmail.com');
  }

  return (
    <section id='about' >
      <h1>About me</h1>
      <p className='about-info'>
        I have been coding since 2017 when I started my career. In 2020 I started learning self-taught Web Development by building projects and following The Odin Project curriculum, since then I have been learning new tools, languages and frameworks everyday. Currently, I'm interested in learning about server side rendering and deepen my knowledge on databases.
      </p>
      <p className='about-info'>Let's get in contact, email me at</p>
      <div className='mail-wrapper'>
        <span className='tooltip'>Click to copy email addres</span>
        <p onClick={() => copyMail()} className='mail-link'> ssoto.desarrollador@gmail.com</p>
      </div>
      <p>You can also find me in:</p>
      <div id='contact__links'>
        <a href='https://github.com/sebapkfd' target='_blank' rel="noopener noreferrer">
          <img src={githubLight} alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/sebasti%C3%A1n-soto-59b493207/' target='_blank' rel="noopener noreferrer">
          <img src={linkedin} alt='linkedin' />
        </a>
      </div>
    </section>
  )
}

export default About;