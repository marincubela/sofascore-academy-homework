import React from "react";
import { PokeButton } from "./PokeButton";
import { PokeItem } from "./PokeItem";

export class PokeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previous: null,
      next: "https://pokeapi.co/api/v2/pokemon/",
      pokemons: [],
      favorites: [],
      selectedUrl: null,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.getNextUrl = this.getNextUrl.bind(this);
    this.getAttributes = this.getAttributes.bind(this);
    this.setImageUrl = this.setImageUrl.bind(this);
  }

  async componentDidMount() {
    await this.next();
    await this.setImageUrl(this.state.pokemons[0].url);
  }

  async getAttributes(url) {
    return await (await fetch(url)).json();
  }

  async next() {
    await this.getNextUrl(this.state.next);
  }

  async previous() {
    await this.getNextUrl(this.state.previous);
  }

  async getNextUrl(url) {
    if (url === null) return;
    let response = await fetch(url);
    if (response.status === 200) {
      const pokemonJSON = await response.json();
      this.setState({
        previous: pokemonJSON.previous,
        next: pokemonJSON.next,
      });

      this.setState({ pokemons: pokemonJSON.results });
    } else {
      console.log("Response status was " + response.status);
    }
  }

  async setImageUrl(url) {
    let imgUrl = await (await this.getAttributes(url)).sprites.front_default;
    this.setState({ selectedUrl: imgUrl });
  }

  render() {
    return (
      <div className="App-main">
        <div className="App-panel">
          <div className="PokeList">
            <div className="PokeItem">
              <span style={{ width: "100px" }}>Name</span>
              <span style={{ width: "50" }}>Height</span>
              <span style={{ width: "50px" }}>Weight</span>
              <span style={{ width: "50px" }}>Base experience</span>
              <span style={{ width: "110px" }}></span>
            </div>
            <hr />
            {this.state.pokemons.map((pokemon, index) => {
              return (
                <PokeItem
                  key={`${pokemon.name}-${index}`}
                  name={pokemon.name}
                  url={pokemon.url}
                  onClick={() => {
                    this.setImageUrl(pokemon.url);
                  }}
                  onClickButton={() => {
                    let favorites = this.state.favorites;
                    favorites.push(pokemon);
                    this.setState({ favorites });
                  }}
                  textButton="Dodaj"
                  disabled={this.state.favorites.includes(pokemon)}
                />
              );
            })}
            <PokeButton
              text="Prethodni"
              onClicked={this.previous}
              disabled={this.state.previous === null}
            />
            <PokeButton
              text="Sljedeći"
              onClicked={this.next}
              disabled={this.state.next === null}
            />
          </div>
        </div>
        <div className="App-panel">
          <div className="App-panel-child">
            <img
              className="PokeImg"
              src={this.state.selectedUrl}
              alt="Pokemon"
            />
          </div>
          <div className="App-panel-child">
            <div>
              <div className="PokeList">
                <div className="PokeItem">
                  <span style={{ width: "100px" }}>Name</span>
                  <span style={{ width: "50" }}>Height</span>
                  <span style={{ width: "50px" }}>Weight</span>
                  <span style={{ width: "50px" }}>Base experience</span>
                  <span style={{ width: "110px" }}></span>
                </div>
                <hr />
                {this.state.favorites.map((pokemon, index) => {
                  return (
                    <PokeItem
                      key={`${pokemon.name}-${index}`}
                      name={pokemon.name}
                      url={pokemon.url}
                      onClick={() => {
                        this.setImageUrl(pokemon.url);
                      }}
                      onClickButton={() => {
                        let favorites = this.state.favorites;
                        favorites.splice(favorites.indexOf(pokemon), 1);
                        this.setState({ favorites: favorites });
                      }}
                      textButton="Izbriši"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
