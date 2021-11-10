import logo from './logo.svg';
import './App.css';
import NameText from './NameText'
import Profile from './Profile';

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <NameText name="Uozumi" />
        <Profile age={22} country="US" gender="Male" />
        <NameText name="Uozumi" />
        <Profile age={20} country="UK" gender="Female" />
        <NameText name="Uozumi" />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://atrae.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.linkText}/{props.name}
        </a>
      </header>
    </div>
  );
}

export default App;
