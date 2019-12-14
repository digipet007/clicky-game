import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import cats from "./cats.json";

class App extends Component {
  // Setting this.state.cats to the cats json array, and initial game stats
  state = {
    cats,
    score: 0,
    highScore: 0,
    message: "To win, click only unique images",
    clickedIds: []
  };

  //on click function to reorder cats, calculate and display scores, and show messages
  reorderCats = id => {
    let clickedIds = this.state.clickedIds;
    let highScore = this.state.highScore;
    let score = this.state.score;

    //if the player clicks the same cat image twice
    if (clickedIds.includes(id)) {
      this.setState({
        clickedIds: [],
        score: 0,
        message: "Game Over! You lost."
      });
      //if the player lost, adjust their highscore
      if (score > highScore) {
        this.setState({ highScore: score });
      }
      return;
      // if the player clicks on a unique image, increase their score (set to the length of clickedIds)
    } else {
      clickedIds.push(id);

      if (clickedIds.length === cats.length) {
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
        message: "To win, click only unique images"
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="nav-item navbar-brand">Memory Game</h1>
          <span className="navbar-text directions ml-auto">
            {this.state.message}
          </span>
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
        <Footer>
          <small>Copyright &copy; Sarah Arnold</small>
        </Footer>
      </div>
    );
  }
}

export default App;
