import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMsg, setGreetingMsg] = useState("")

  return (
    <div className="App">
      <div className="greeting-container">{greetingMsg}</div>
      <div className="buttons">
        <button onClick={() => setGreetingMsg('สวัสดี!')}>สวัสดี!</button>
        <button onClick={() => setGreetingMsg('Hi!')}>Hi!</button>
        <button onClick={() => setGreetingMsg('你好!')}>你好!</button>
      </div>
    </div>
  );
}

export default App;
