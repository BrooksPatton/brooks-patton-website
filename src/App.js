import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TopNav from './top-nav/top-nav';
import About from './about/about';

import './app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={TopNav} />
        <main>
          <Route path="/" exact component={About} />
        </main>
      </div>
    </Router>
  );
}

export default App;
