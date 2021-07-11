import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Navbar';
import Omor from './Omor';
import Rafiul from './Rafiul';
class App extends Component {
  constructor(props) {

    super(props)
    this.state = {
      name: "kibria",
      phone: ""
    };
  }

  stateSet = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Router>
<Navbar/>
        <Switch>
          <Route exact  path="/" component={Rafiul} />
          <Route exact path="/omor/:id" component={Omor} />

        </Switch>
      </Router>

    );
  }
}

export default App;