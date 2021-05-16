import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Service from './pages/Service';
import './assets/css/font-awesome.css';
import './assets/css/font-awesome.min.css';
import './assets/css/responsive.css';
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import './assets/css/magnific-popup.css';
import './assets/css/meanmenu.css';
import './style.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="App">
      <link rel="icon" type="image/png" href="assets/img/favicon.png" />
      <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css" />
      <link href="assets/css/slick-theme.css" rel="stylesheet" />
      <link href="assets/css/slick.css" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="assets/css/meanmenu.css" />
      <link rel="stylesheet" type="text/css" href="style.css" />
      <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
      <link href="https://fonts.googleapis.com/css?family=Marcellus&display=swap" rel="stylesheet" />
      <Router>
        <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutpage" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/service" component={Service} />
          <Route path="/" component={ErrorPage} />
          
        </Switch>

        <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
