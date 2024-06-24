import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import AccountPage from './AccountPage';
import Home from './Home'; // Assuming you have a Home component

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/account" component={AccountPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
