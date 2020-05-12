import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/pages/Main';
import Contact from './components/pages/Contact'
import Careers from './components/pages/Careers'
import Capabilities from './components/pages/Capabilities'
import Portfolio from './components/pages/Portfolio'
import Industries from './components/pages/Industries'


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
        <Route path='/Capabilities' component={Capabilities} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Industries' component={Industries} />

      </>
    </Router>
  );
}

export default App;
