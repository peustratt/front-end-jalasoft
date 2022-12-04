import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("waiting for the useEffect to run!");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/test");
        const text = await res.text();
        console.log(`Message from our API: "${text}"`);
        setData(text);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  });

  return (
    <div className="App">
      <h3>Backend /api/test route content</h3>
      <span>{data}</span>
    </div>
  );
}

export default App;
