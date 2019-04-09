import React from "react";

class App extends React.Component {
  state = {
    counter: 100
  };

  clickHandler = () => {
    const current = this.state.counter;
    if (current === 100) {
      this.setState({
        counter: this.state.counter + 1
      });
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  };
  render() {
    return (
      <div className="like-button">
        <button onClick={this.clickHandler} className="liked">
          {" "}
          Like | {this.state.counter}{" "}
        </button>
      </div>
    );
  }
}

export default App;
