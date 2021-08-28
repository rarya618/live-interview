import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from './Home'
import Job from './Job'
import Interview from './Interview';
import InterviewSettings from './InterviewSettings';

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
            <Route path="/job" component={Job}/>
            <Route path = "/interview" component={Interview}/>
            <Route path = "/interview-settings" component={InterviewSettings}/>
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
