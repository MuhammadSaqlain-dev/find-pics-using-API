import React, { Component } from "react";

class SearchBar extends Component {
  state = { inputTerm: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.runWhenSubmit(this.state.inputTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>SearchBar</label>
            <input
              type="text"
              value={this.state.inputTerm}
              placeholder="searchHere.."
              onChange={(e) =>
                this.setState({ inputTerm: e.currentTarget.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
