import React, { Component } from "react";
import unsplash from "../api/unsplash";
import ListImages from "./ListImages";
import SearchBar from "./SearchBar";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar runWhenSubmit={this.onSearchSubmit} />
        <ListImages images={this.state.images} />
      </div>
    );
  }
}

export default App;
