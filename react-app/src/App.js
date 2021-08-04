import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Admin from './components/pages/Admin';
import Employee from './components/pages/Employee';
import AddJob from './components/pages/AddJob';
import EditEmployee from './components/pages/EditEmployee';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/emp-register" component={Register}/>
        <Route path="/emp-login" component={Login}/>

        <Route path="/admin" component={Admin}/>

        <Route path="/employee" component={Employee}/>
        <Route path="/edit-employee/:id" component={EditEmployee}/>

        <Route path="/add-job" component={AddJob}/>
      </Switch>
    </Router>
  );
}

export default App;
