import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./modules/layout/Header";
import { Category } from "./modules/pages/category/Category";
import { CategoryList } from "./modules/pages/categoryList/CategoryList";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <CategoryList></CategoryList>
        </Route>
        <Route exact path="/category/:id">
          <Category></Category>
        </Route>
        <Route path="*">
          <h1>404 - page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
