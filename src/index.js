import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let APP_COUNT = 0;
let FUNCTIONAL_COMPONENT = 0;

const store = {
  data: {
    counter: 1
  }
};

function FunctionalComponent() {
  return (
    <h3>
      I'm a FunctionalComponent and I was rendered {++FUNCTIONAL_COMPONENT}{" "}
      times
    </h3>
  );
}

class App extends React.Component {
  state = {
    counter: 1
  };
  componentDidMount() {
    setInterval(() => {
      const { counter } = this.state;
      this.setState({ counter: counter + 1 });
    }, 1000);
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <h1>I'm the app and I was rendered {++APP_COUNT} times</h1>
        <FunctionalComponent />
        <h2>Counter: {counter}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
