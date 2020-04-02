import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Header from './components/Header';
// import Gallery from './components/Gallery';
// import Footer from './components/Footer';
import Main from './components/pages/Main';
import Contact from './components/pages/Contact'


// import Portfolio from './components/pages/Portfolio'
// import Contact from './components/pages/contact'
import './App.css'


function App() {
  return (
    <Router>
      <div >
        <Route exact path='/' render={ () =>
          <React.Fragment>
            <Main />

          </React.Fragment>
        } />
        <Route path='/Contact' component={Contact} />

      </div>
    </Router>
  );
}

export default App;
