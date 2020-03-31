import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
// import Portfolio from './components/pages/Portfolio'
// import Contact from './components/pages/contact'
import './App.css'

function App() {
  return (
    <Router>
      <div >
        <Route exact path='/' render={ () =>
          <React.Fragment>
            <Header />
          </React.Fragment>
        } />
        {/* <Route path='/portfolio' component={Portfolio} /> */}
        {/* <Route path='/contact' component={Contact} /> */}

      </div>
    </Router>
  );
}

export default App;
