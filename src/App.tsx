import React, { Component } from "react";
import { PackageComponent } from "./Components/PackageComponent"

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
        <PackageComponent />
      </div>
    );
  }
}

export default App;

