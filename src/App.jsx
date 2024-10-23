import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message")

  const handleGreetingTh = () => {
    return setGreeting("สวัสดี")
  }

  const handleGreetingEn = () => {
    return setGreeting("Hi!")
  }
  const handleGreetingCn = () => {
    return setGreeting("你好!")
  }

  return (
    <>
      <div className="App">
        <div className="greeting-container">{greeting}</div>
        <div className="buttons">
          <button onClick={handleGreetingTh}>สวัสดี!</button>
          <button onClick={handleGreetingEn}>Hi!</button>
          <button onClick={handleGreetingCn}>你好!</button>
        </div>
      </div>
    </>
  );
}

export default App;
