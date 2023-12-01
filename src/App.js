import logo from './logo.svg';
import './App.css';

function App() {
  async function a() {
    try {
      const response = await fetch('http://16.171.238.101:81/user/listtemplate/1');
      alert(response.status);
    } catch (e) {
      console.log("e " + e);
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => { a(); }} >click</button>
      </header>
    </div >
  );
}

export default App;
