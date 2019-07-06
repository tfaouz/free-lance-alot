import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom';
import "./Tutorials.css";



// depending on the current path, this component sets the "active" className on the appropriate navigation link item
const Tutorials = props =>
    <div className="container">
        <div className="featured">
            <div className="title">
                <h1>Coding Tutorials.</h1>
                <h2>If you need to brush up on or learn some new materials this is the place for you you </h2>
                <hr></hr>
            </div>
            <div className="column">
                <h4>freeCodeCamp</h4>
                <p>The languages and technologies currently taught by freeCodeCamp include HTML5, CSS 3, JavaScript, jQuery, Bootstrap, Sass, React.js, Node.js, Express.js, MongoDB, and Git.
                </p>
                <p><a href="https://www.freecodecamp.org">https://www.freecodecamp.org</a></p>
            </div>
            <br></br>
            <div className="column">
                <h4>Codecadamy</h4>
                <p> Codecadamy teaches coding basics like HTML & CSS, JavaScript, PHP, Python, Ruby, Angularjs, The Command Line, and more </p>
                <p><a href="https://www.codecademy.com/">https://www.codecademy.com/</a></p>
            </div>
            <br></br>
            <div className="column">
                <h4>Coursera</h4>
                <p> Coursera is a free online learning tool for everyone who has an account registered. All courses offered by Coursera are “accessible for free”. Each course includes short video lectures on different topics and assignments to be submitted, usually on a weekly basis. </p>
                <p><a href="https://www.coursera.org/">https://www.coursera.org/</a></p>
            </div>
            <br></br>
            <div className="column">
                <h4>edX</h4>
                <p>EdX is an open-source higher education program governed by MIT and Harvard, making it another high-caliber resource where you can learn to code for free online. The site offers 107 great courses under the “computer science” category, teaching various coding languages. </p>
                <p><a href="http://www.edx.org">http://www.edx.org</a></p>
            </div>
            <br></br>
            <div className="column">
                <h4>Khan Academy</h4>
                <p> Khan Academy is a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</p>
                <p><a href="https://www.khanacademy.org/">https://www.khanacademy.org/</a></p>
            </div>
            <br></br>
            <div className="column">
                <h4>Code.org</h4>
                <p>Code.org provides learning materials specifically dedicated to increasing the rates of female and minority students entering computer science careers. Their free coding courses are designed for K-12 students, but can be useful to all ages. </p>
                <p><a href="https://code.org/">https://code.org/</a></p>
            </div>
            <br></br>
            <div className="column">
                <h4>W3Schools</h4>
                <p> W3Schools is the world’s largest web developer site, offering free coding tutorials and reference materials for learning just about every aspect of web programming. They offer HTML, CSS, JavaScript, SQL, PHP, jQuery, and more</p>
                <p><a href="https://www.w3schools.com/">https://www.w3schools.com/</a></p>
            </div>
        </div>
    </div>


export default Tutorials;


