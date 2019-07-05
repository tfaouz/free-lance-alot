import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../components/Navbar/Navbar"
import Tutorials from "../components/Tutorials/Tutorials"
//import Footer from "../components/Footer/Footer"

function LearningTutorials() {
  return (
    <div>
        <Navbar/>
      <Tutorials/>
      {/* <Footer/> */}
    </div>
  )
}

export default LearningTutorials;