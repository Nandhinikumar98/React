import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Nandhini";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Learning session-1</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>
          Welcome {/*without brackets it consider name as string */}
          {name} {/* this considered as variable how we call in js*/}
          {/*{{ a: 1, b: 2 }} -- Error shown as : Objects are not valid as a React child (found: object with keys {a, b}). 
          If you meant to render a collection of children, use an array instead.*/}
        </p>
      </header>
    </div>
  );
}

export default App;
