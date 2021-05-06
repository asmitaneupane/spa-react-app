import React from 'react';
import './index.css';
import './App.css'
import './assets/css/font-awesome.css'
import './assets/css/responsive.css'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/meanmenu.css'
import Header from './components/Header'
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
        <div><Header></Header></div>
        <Route exact path="/" component={Homepage} />
        <Route path="/aboutpage" component={aboutpage} />
        <Route path="/contact" component={contact} />
        <Route path="/errorpage" component={errorpage} />
        <Route path="/service" component={service} />
        <div><Footer></Footer></div>
      </Router>
  )
}

export default App