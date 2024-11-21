import './App.css';
import Hyperlink from './components/hyperlink';


function App() {

  const linkData = {
    link1: {
      linkName: "Sklearn",
      linkAddress: "https://scikit-learn.org/stable/",
      logoImg: "None"
    },
    link2: {
      linkName: "LangChain",
      linkAddress: "https://www.langchain.com/",
      logoImg: "/images/langchain-icon.svg"
    },
    link3: {
      linkName: "Learn React",
      linkAddress: "https://reactjs.org",
      logoImg: "/logo192.png"
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Hyperlink {...linkData.link1}/>
        <Hyperlink {...linkData.link2}/>
        <Hyperlink {...linkData.link3}/>
      </header>
      <br></br>
      <div className="div1"></div>
      <div className="div2"></div>
      <p>&copy; {new Date().getFullYear()} Just-For-Demo</p>
    </div>
  );
}

export default App;
