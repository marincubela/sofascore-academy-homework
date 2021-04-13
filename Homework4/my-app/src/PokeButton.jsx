import React from "react";

export class PokeButton extends React.Component {
  render() {
    return (
      <button
        className="pokeButton"
        style={{ backgroundColor: this.props.color }}
        disabled={this.props.disabled}
        onClick={this.props.onClicked}
      >
        {this.props.text}
      </button>
    );
  }
}
