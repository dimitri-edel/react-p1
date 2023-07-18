import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import StatefullGreeting from './components/StatefullGreeting';
import NavBar from "./components/NavBar";
import Content from "./components/Content";

function App() {  

  return (
    <div className="App">
        <NavBar />
        <SideBar photos="Photos" illustrations="Illustrations" paintings="Paintings"/>
        <StatefullGreeting greeting="Hello" />
        <Content />
    </div>
  );
}

export default App;
