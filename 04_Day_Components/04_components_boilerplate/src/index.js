// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import javascriptLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'

//To get react-icon
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
    backgroundColor: hexaColor()
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

//level 3
const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPY', 
'Pandas', 'Data Analysis', 'MYSQL', 'GraphGL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']
const skillsFormatted = skills.map((skill) => <h4>{skill}</h4>)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh image' />
    <h2><strong> Asabeneh Yetayeh <FaCheckCircle style = {{color: "deepskyblue", fontSize: "medium", backgroundColor: "white", verticalAlign: "middle"}}/></strong></h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

//Level 1 Exercise 1
const FrontendTechs = () => (
  <div className='frontEndTechnologies'>
    <strong> Front End Technologies </strong>
    <br></br>
    <img style = {{ width: 200, height: 200, padding: 25}} src={htmlLogo} alt='html logo' />
    <img style = {{ width: 200, height: 200, padding: 25}} src={cssLogo} alt='css logo' />
    <img style = {{ width: 200, height: 200, padding: 25}} src={javascriptLogo} alt='javascript logo' />
    <img style = {{ width: 200, height: 200, padding: 25}} src={reactLogo} alt='react logo' />
  </div>
)

//level 2 Exercise 2
const Subscribe = () => (
  <div className = 'subscribe'>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates.</p>
    <input type="text" name="firstName" placeholder='First name'/>
    <input type="text" name="lastName" placeholder='Last name'/>
    <input type="email" name="email" placeholder='Email'/>
    <br></br>
    <button>Subscribe</button>
  </div>
)

//level 3 Excercise 2
const User = () => (
  <div className='user'>
    <UserCard/>
    <p>Senior Developer, Finland</p>
    <h3><strong>SKILLS</strong></h3>
    <span>{skillsFormatted}</span>
    <p><FaRegClock style = {{color: "black", fontSize: "small", backgroundColor: "white", verticalAlign: "middle"}}/> Joined on August 30, 2020</p>
  </div>
) 

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      {/* <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard /> */}
      {/* <FrontendTechs/>
      <Subscribe/>
      <br></br>
      <div> 
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
      </div> */}
      <User/>
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    {/* <Header /> */}
    <Main />
    {/* <Footer /> */}
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
