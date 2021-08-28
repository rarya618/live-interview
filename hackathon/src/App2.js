import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
