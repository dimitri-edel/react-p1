import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import StatefullGreeting from './components/StatefullGreeting';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />
        <SideBar photos="Photos" illustrations="Illustrations" paintings="Paintings"/>
        <StatefullGreeting greeting="Hello" />
    </div>
  );
}

export default App;
