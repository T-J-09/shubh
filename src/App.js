import Home from "./components/Home";
import About from "./components/About";
import './sass/App.scss'
import {BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/work" element={<Work/>} /> */}
          <Route path="/about" element={<About/>} />
        </Routes>
      {/* <About/> */}
      </div>
    </Router>
    
  );
}

export default App;
