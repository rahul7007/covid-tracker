import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

const Covid = () => {
  const [active, setActive] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");

  const getCovidData = async () => {
    try {
      const response = await fetch("https://api.covid19india.org/data.json");
      const actualData = await response.json();
      console.log(actualData.statewise[0]);

      setActive(actualData.statewise[0].active);
      setRecovered(actualData.statewise[0].recovered);
      setDeaths(actualData.statewise[0].deaths);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  const border = {
    border: "2px solid green",
    textAlign: "center",
    color: "white",
  };

  const cardBg = {
    width: "auto",
  };

  const heading = {
    textAlign: "center",
    color: "White",
  };

  return (
    <>
      <div className="container">
        <h1 style={heading}>COVID-19 Tracker</h1>
        <h3 style={heading}>India</h3>
        <div className="row">
          <div className="col" style={border}>
            Active Cases
            <div className="card bg-transparent" style={cardBg}>
              <div className="card-body">
                <p className="card-text">{active}</p>
              </div>
            </div>
          </div>
          <div className="col" style={border}>
            Total Recoverd
            <div className="card bg-transparent" style={cardBg}>
              <div className="card-body">
                <p className="card-text">{recovered}</p>
              </div>
            </div>
          </div>
          <div className="col" style={border}>
            Total Deaths deaths
            <div className="card bg-transparent" style={cardBg}>
              <div className="card-body">
                <p className="card-text">{deaths}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
