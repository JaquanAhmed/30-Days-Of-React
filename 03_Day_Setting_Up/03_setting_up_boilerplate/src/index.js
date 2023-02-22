// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import javascriptLogo from './images/javascript_logo.png'
import reactLogo from './images/react_logo.png'

//To get react-icon
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './math.js'

//import cat
import thisIsCat from './cat.js'

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from './math.js'

import * as everything from './math.js'
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)
// JSX element, header


// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div className='userImage'>
    <img src={asabenehImage} alt='asabeneh image' />
  </div>
)

//level 2 Exercise 1
const frontendtechs = (
  <div className='frontEndTechnologies'>
    <strong> Front End Technologies </strong>
    <br></br>
    <img style = {{ width: 200, height: 200, padding: 25}} src={htmlLogo} alt='html logo' />
    <img style = {{ width: 200, height: 200, padding: 25}} src={cssLogo} alt='css logo' />
    <img style = {{ width: 200, height: 200, padding: 25}} src={javascriptLogo} alt='javascript logo' />
    <img style = {{ width: 200, height: 200, padding: 25}} src={reactLogo} alt='react logo' />
  </div>
)

//level 2 exercise 2
const subscribe = (
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

//level 3
const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPY', 
'Pandas', 'Data Analysis', 'MYSQL', 'GraphGL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']

const skillsFormatted = skills.map((skill) => <h3>{skill}</h3>)

const checkStyle = {color: "deepskyblue", fontSize: "medium", backgroundColor: "white", verticalAlign: "middle"};
const clockStyle = {color: "black", fontSize: "small", backgroundColor: "white", verticalAlign: "middle"};

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      {/* <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small> */}
    </div>
  </header>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      {/* <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
      {frontendtechs}
      {subscribe}*/}
      {user}
      <h1><strong>{author.firstName.toUpperCase()} {author.lastName.toUpperCase()} <FaCheckCircle style = {checkStyle}/></strong></h1>
      <p>Senior Developer, Finland</p>
      <h2><strong>SKILLS</strong></h2>
      <span>{skillsFormatted}</span>
      <p><FaRegClock style = {clockStyle}/> Joined on August 30, 2020</p>
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      {/* <p>{copyRight}</p> */}
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {/* {header} */}
    {main}
    {/* {footer} */}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
