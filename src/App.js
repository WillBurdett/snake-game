import { Component } from "react";
import Snake from "./components/Snake";
import Food from "./components/Food";
import GetRandomCoordinates from "./utils/GetRandomCoordinates";
import Gameplay from "./Gameplay";


class App extends Component {

 render() {
  return (
      <Gameplay/>
    );
  }
}

export default App;
