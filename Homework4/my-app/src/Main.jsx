import React from "react";
import { PokeList } from "./PokeList";

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.getSelected = this.getSelected.bind(this);
  }

  getSelected() {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/44.png";
  }

  render() {
    return (
      <main className="App-main">
        <PokeList></PokeList>
      </main>
    );
  }
}
