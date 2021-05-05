import React from 'react';
import './index.css';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import { Router, Route } from "react-router-dom";
import aboutpage from './components/aboutpage'
import contact from './components/contact'
import errorpage from './components/errorpage'
import service from './components/service'

function App() {
  return (
    <div>
      <Router>
        <div><Header></Header></div>
        <Route exact path="/" component={Homepage} />
        <Route path="/aboutpage" component={aboutpage} />
        <Route path="/contact" component={contact} />
        <Route path="/errorpage" component={errorpage} />
        <Route path="/service" component={service} />
        <div><Footer></Footer></div>
      </Router>
    </div>
  )
}

export default App