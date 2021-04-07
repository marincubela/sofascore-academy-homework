import React from "react";
import { PokeButton } from "./PokeButton";

export class PokeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", height: "", width: "", baseExperience: "" };
  }

  async componentDidMount() {
    let pokemon = await this.getAttributes();
    this.setState({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      baseExperience: pokemon.base_experience,
    });
  }

  async getAttributes() {
    return await (await fetch(this.props.url)).json();
  }

  render() {
    return (
      <div className="PokeItem" onClick={this.props.onClick}>
        <span style={{ width: "100px" }}>{this.state.name}</span>
        <span style={{ width: "50" }}>{this.state.height}</span>
        <span style={{ width: "50px" }}>{this.state.weight}</span>
        <span style={{ width: "50px" }}>{this.state.baseExperience}</span>
        <PokeButton
          onClicked={this.props.onClickButton}
          color="white"
          text={this.props.textButton}
          disabled={this.props.disabled}
        ></PokeButton>
      </div>
    );
  }
}
