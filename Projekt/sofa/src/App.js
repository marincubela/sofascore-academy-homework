import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./modules/layout/Header";
import { SportHeader } from "./modules/layout/SportHeader";
import { Category } from "./modules/pages/category/Category";
import { CategoryList } from "./modules/pages/categoryList/CategoryList";
import { Event } from "./modules/pages/event/Event";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <SportHeader></SportHeader>
      <Switch>
        <Route exact path="/">
          <CategoryList></CategoryList>
        </Route>
        <Route exact path="/football">
          <CategoryList></CategoryList>
        </Route>
        <Route exact path="/:category">
          <CategoryList></CategoryList>
        </Route>
        <Route exact path="/category/:id">
          <Category></Category>
        </Route>
        <Route exact path="/event/:eventId">
          <Event></Event>
        </Route>
        <Route path="*">
          <h1>404 - page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
