import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Appiontment from "./Pages/AppionmentPage/Appiontment/Appiontment";
import Home from "./Pages/HomePage/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/appiontment">
            <Appiontment></Appiontment>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
