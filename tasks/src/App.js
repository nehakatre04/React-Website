import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import ContactUs from './ContactUs';
import Feedback from './Feedback';
import Home from './Home'
import List from './List';

const App = () => {
  return (
    <>
    <List />
    <Home />
    <About />
    <Feedback />
    <ContactUs />
    
    </>
  )
}

export default App;