import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Header from './components/Header';
// import Gallery from './components/Gallery';
// import Footer from './components/Footer';
import Main from './components/pages/Main';
import Contact from './components/pages/Contact'
import Careers from './components/pages/Careers'
import Services from './components/pages/Services'
import Portfolio from './components/pages/Portfolio'
import Industries from './components/pages/Industries'


// import Portfolio from './components/pages/Portfolio'
// import Contact from './components/pages/contact'
import './App.css'


function App() {
  return (
    <Router>
      <>
        <Route exact path='/' render={ () =>
          <React.Fragment>
            <Main />
          </React.Fragment>
        } />
        <Route path='/Contact' component={Contact} />
        <Route path='/Careers' component={Careers} />
        <Route path='/Services' component={Services} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Industries' component={Industries} />

      </>
    </Router>
  );
}

export default App;
