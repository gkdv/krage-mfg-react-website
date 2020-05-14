import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Main from './components/pages/Main';
import Careers from './components/pages/Careers'
import Contact from './components/pages/Contact'
import Capabilities from './components/pages/Capabilities'
import Portfolio from './components/pages/Portfolio'
import Industries from './components/pages/Industries'


function App() {
  return (
    <HashRouter>
      <>
        <Route exact path='/' render={ () =>
          <React.Fragment>
            <Main />
          </React.Fragment>
        } />
        <Route path='/Careers' component={Careers} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Capabilities' component={Capabilities} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Industries' component={Industries} />

      </>
    </HashRouter>
  );
}

export default App;
