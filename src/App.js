import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/name/:name" component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
