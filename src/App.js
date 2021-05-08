import React from 'react';
import './index.css';
import './App.css'
import './assets/css/font-awesome.css'
import './assets/css/responsive.css'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/meanmenu.css'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import aboutpage from './components/aboutpage'
import contact from './components/contact'
import errorpage from './components/errorpage'
import service from './components/service'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/aboutpage" component={aboutpage} />
        <Route path="/contact" component={contact} />
        <Route path="/service" component={service} />
        <Route path="/errorpage" component={errorpage} />
        <Footer></Footer></div>
    </Router>
  )
}

export default App