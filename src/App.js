import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import cats from "./cats.json";

class App extends Component {
  // Setting this.state.cats to the cats json array
  state = {
    cats
  };

  reorderCats = id => {
    // Filter this.state.cats for friends with an id not equal to the id being removed
    const cats = this.state.cats.filter(cat => cat.id !== id);
    // Set this.state.cats equal to the new friends array
    this.setState({ cats });
  };

  // Map over this.state.cats and render a Card component for each cat object
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Wrapper>
          {this.state.cats.map(cat => (
            <Card
              reorderCats={this.reorderCats}
              id={cat.id}
              key={cat.id}
              image={cat.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
