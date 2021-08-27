import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <a className="App-link" href="#">Interviewer</a>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <a className="App-link" href="#">Interviewee</a>
        </p>
      </header>
    </div>
  );
}

export default App;
