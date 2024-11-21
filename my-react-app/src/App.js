import './App.css';
import langimage from './assets/langchain-icon.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" 
           href="https://scikit-learn.org/stable/"
           target="_blank"
           rel="noopener noreferrer"
        >
          Sklearn
        </a>
        <a className="App-link" 
           href="https://www.langchain.com/"
           target="_blank"
           rel="noopener noreferrer"
        >
          <img src={langimage} width="30px" alt="Langchain"></img>
          LangChain
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo192.png" width="20px" alt="React"></img>
          Learn React
        </a>
      </header>
      <br></br>
      <div className="div1"></div>
      <div className="div2"></div>
      <p>&copy; {new Date().getFullYear()} Just-For-Demo</p>
    </div>
  );
}

export default App;
