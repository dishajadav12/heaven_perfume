import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
function App() {
  return (
    <div className="main-container">
      <Navbar/>
      <Home/>
      <Summary/>
    </div>
  );
}

export default App;
