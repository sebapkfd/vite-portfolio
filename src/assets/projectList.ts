import shopping from '../assets/thumbnails/shopping.png';
import battleship from '../assets/thumbnails/battleship.png';
import weather from '../assets/thumbnails/weather.png';
import todo from '../assets/thumbnails/todo.png';
import card from '../assets/thumbnails/card.png';
import javascript from '../assets/logos/js.png';
import react from '../assets/logos/react.png';
import html from '../assets/logos/html.png';
import css from '../assets/logos/css.png';
import git from '../assets/logos/git.png';
import npm from '../assets/logos/npm.png';
import jest from '../assets/logos/jest.png';
import redux from '../assets/logos/redux.png';

const projectList = [
  {
    name: 'Shopping Cart',
    repo: 'https://github.com/sebapkfd/shopping-cart',
    link: 'https://sebapkfd.github.io/shopping-cart/',
    id: '1',
    showOnHome: true,
    techUsed: [
      { label: "javascript", value: javascript }, 
      { label: "react", value: react }, 
      { label: "css", value: css }, 
      { label: "html", value: html }, 
      { label: "git", value: git }, 
      { label: "npm", value: npm }, 
      { label: "redux", value: redux }],
    img: shopping,
    description: 'Built using React Router, allows to see items, add and remove them from the cart, change the amount and then it shows the total price'
  },
  {
    name: 'Battleship',
    repo: 'https://github.com/sebapkfd/battleship',
    link: 'https://sebapkfd.github.io/battleship/',
    id: '2',
    showOnHome: true,
    techUsed: [
      { label: "javascript", value: javascript }, 
      { label: "react", value: react }, 
      { label: "c", value: css }, 
      { label: "html", value: html }, 
      { label: "git", value: git }, 
      { label: "npm", value: npm }, 
      { label: "jest", value: jest }],
    img: battleship,
    description: 'Made to help understand TDD, it uses Jest for the testing. Allows to play against the PC, place your ships and attack by taking turns'
  },
  {
    name: 'Todo list',
    repo: 'https://github.com/sebapkfd/todolist',
    link: 'https://sebapkfd.github.io/todolist/',
    id: '3',
    showOnHome: true,
    techUsed: [
      { label: "javascript", value: javascript }, 
      { label: "react", value: react }, 
      { label: "css", value: css }, 
      { label: "html", value: html }, 
      { label: "git", value: git }, 
      { label: "redux", value: redux }],
    img: todo,
    description: 'Allows you to create tasks, give them priorities, rank their difficulty, set them as complete and delete them'
  },
  {
    name: 'Weather App',
    repo: 'https://github.com/sebapkfd/Weather-app',
    link: 'https://sebapkfd.github.io/Weather-app/',
    id: '4',
    showOnHome: true,
    techUsed: [
      { label: "javascript", value: javascript }, 
      { label: "react", value: react }, 
      { label: "css", value: css }, 
      { label: "html", value: html }, 
      { label: "git", value: git }, 
      { label: "npm", value: npm }],
    img: weather,
    description: 'It shows weather conditions from cities from all around the world, implemented using Weather Api'
  },
  {
    name: 'Memory Card Game',
    repo: 'https://github.com/sebapkfd/memory-card',
    link: 'https://sebapkfd.github.io/memory-card/',
    id: '5',
    showOnHome: true,
    techUsed: [
      { label: "javascript", value: javascript }, 
      { label: "react", value: react }, 
      { label: "css", value: css }, 
      { label: "html", value: html }, 
      { label: "git", value: git }, 
      { label: "npm", value: npm }, 
      { label: "redux", value: redux }],
    img: card,
    description: 'Memory game, consist on trying to select all colours without repeating any of them'
  }
]

export default projectList;