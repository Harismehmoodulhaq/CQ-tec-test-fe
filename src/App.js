import SideBar from './Components/SideBar/SideBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import RouteContainer from './Components/RouteContainer/RouteContainer';

function App() {
  return (
      <Router>
 
      <Navbar />
      <SideBar />
      <RouteContainer />

      </Router>
  );
}

export default App;
