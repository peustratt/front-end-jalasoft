import "./App.css";
import { useState, useEffect } from "react";
import Prediction from "./components/Prediction/Prediction";

function App() {
  const [data, setData] = useState("waiting for the useEffect to run!");
  const [predictions, setPredictions] = useState(() => []);

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

    const getPredictions = () => {
      fetch(
        "https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01&federation=UEFA",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "b2bc95e5a1mshee74a0437a26fefp1ac41djsn80e1031d3c1e",
            "X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json.data);
          setPredictions(json.data);
        });
    };

    getData();
    getPredictions();
  }, []);

  const predictionsEl = predictions?.map((pred) => (
    <Prediction
      key={pred.id}
      awayTeam={pred.away_team}
      homeTeam={pred.home_team}
      result={pred.result}
    />
  ));

  return (
    <div className="App">
      <h1>Task3 Frontend class</h1>
      <h2>Part 1</h2>
      <h3>Backend route "/api/test"</h3>
      <span>Fetched message: </span>
      <span>{data}</span>

      <h2>Part 2</h2>
      <h3>Predictions API</h3>
      <div className="predictions">
        {predictions && predictionsEl.slice(0, 10)}
      </div>
    </div>
  );
}

export default App;
