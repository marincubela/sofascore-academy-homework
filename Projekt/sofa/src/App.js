import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./modules/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <h1>Start</h1>
        </Route>
        <Route path="/uno">
          <h1>uno</h1>
        </Route>
        <Route path="/duo">
          <h1>duo</h1>
        </Route>
        <Route path="/tre">
          <h1>tre</h1>
        </Route>
        <Route path="*">
          <h1>404 - page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
