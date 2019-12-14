import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cats from "./cats.json";

class App extends Component {
  // Setting this.state.cats to the cats json array
  state = {
    cats,
    score: 0,
    highScore: 0,
    message: "",
    clickedIds: []
  };

  reorderCats = id => {
    let clickedIds = this.state.clickedIds;

    if (clickedIds.includes(id)) {
      this.setState({
        clickedIds: [],
        score: 0,
        status: "Game Over! You lost."
      });
      return;
    } else {
      clickedIds.push(id);
      //increase score?

      if (clickedIds.length === 3) {
        this.setState({
          score: 3,
          message: "You won! Great job!",
          clickedIds: []
        });
        return;
      }
      this.setState({
        cats,
        clickedIds,
        score: clickedIds.length,
        status: " "
      });
    }

    //shuffle array order via the Fisher-Yates Shuffle https://bost.ocks.org/mike/shuffle/
    for (let i = cats.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cats[i], cats[j]] = [cats[j], cats[i]];
    }
  };

  // Map over this.state.cats and render a Card component for each cat object
  render() {
    return (
      <div>
        {/* <Navbar></Navbar> */}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="nav-item navbar-brand">Memory Game</h1>
          <span className="navbar-text directions ml-auto">
            Try not to click the same image twice!
          </span>
          <span>{this.state.message}</span>
          <span className="navbar-text scores ml-auto">
            Score: {this.state.score} | Top Score: {this.state.highScore}
          </span>
        </nav>

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
