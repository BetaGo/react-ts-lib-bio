import React, { Component } from "react";
// import "./App.css";
import { DetailCard, CodeEditor } from "mylib";
// import * as mylib from "mylib";
// const DetailCard = mylib.DetailCard;
class App extends Component {
  render() {
    return (
      <div className="App">
        <CodeEditor />
        <DetailCard />
      </div>
    );
  }
}

export default App;
