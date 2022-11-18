import { useEffect, useState } from "react";
import moment from "moment";
import "./App.css";

function App() {
  const stuffies = [
    "doggy",
    "cat",
    "dinosaur",
    "fish",
    "Little Puddle",
    "Petey",
  ];

  const [currentStuffy, setCurrentStuffy] = useState(stuffies[0]);

  const moveUsedStuffyToEndOfLine = () => {
    stuffies.push(stuffies.shift());
  };

  const getNewStuffy = () => {
    return stuffies[0];
  };

  const cycleStuffies = () => {
    moveUsedStuffyToEndOfLine();
    setCurrentStuffy(getNewStuffy());
  };

  useEffect(() => {
    setInterval(cycleStuffies, 86400000);
  }, []);

  return (
    <div className="App">
      <h1>{currentStuffy}</h1>
    </div>
  );
}

export default App;
