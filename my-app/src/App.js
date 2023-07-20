import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
// import StatefullGreeting from './components/StatefullGreeting';
import NavBar from "./components/NavBar";
// import Content from "./components/Content";
import ControlledForm from './components/controlledForm';

function App() {  

  return (
    <div className="App">
        <NavBar />
        <SideBar photos="Photos" illustrations="Illustrations" paintings="Paintings"/>
        {/* <StatefullGreeting greeting="Hello" />
        <Content /> */}
        <ControlledForm />
    </div>
  );
}

export default App;
