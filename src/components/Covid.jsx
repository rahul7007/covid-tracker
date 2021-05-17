import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Covid.css";

import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Covid = () => {
  const [active, setActive] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  const [input, setInput] = useState("");
  const [states, findStates] = useState([]);

  const [activeByState, setActiveByState] = useState("");
  const [recoveredByState, setRecoveredByState] = useState("");
  const [deathsByState, setDeathsByState] = useState("");

  const [searchStateName, setSearchStateName] = useState("Assam");

  const getCovidData = async () => {
    try {
      const response = await fetch("https://api.covid19india.org/data.json");
      const actualData = await response.json();

      console.log(actualData);

      setActive(actualData.statewise[0].active);
      setRecovered(actualData.statewise[0].recovered);
      setDeaths(actualData.statewise[0].deaths);
      setLastUpdated(actualData.statewise[0].lastupdatedtime);

      // console.log(actualData.statewise);
      var allStates = [];
      actualData.statewise.map((val) => {
        allStates.push(val.state);
      });
      allStates.shift();

      var StatesOfIndia = [];
      for (var i = 0; i < allStates.length; i++) {
        StatesOfIndia.push({
          title: allStates[i],
        });
      }

      findStates(StatesOfIndia);

      var index =
        StatesOfIndia.findIndex((x) => x.title === searchStateName) + 1;

      if (index === 0) {
        index = 4;
      }

      setActiveByState(actualData.statewise[index].active);
      setRecoveredByState(actualData.statewise[index].recovered);
      setDeathsByState(actualData.statewise[index].deaths);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, [searchStateName]);

  const border = {
    textAlign: "center",
    color: "black",
    fontFamily: "Amaranth",
  };

  const cardBg = {
    width: "auto",
    border: "1px solid rgb(226 52 52 / 81%)",
  };

  const heading = {
    textAlign: "center",
    color: "white",
    fontFamily: "Black Han Sans",
  };

  const digits = {
    fontFamily: "Bungee",
  };

  const myInput = (event, value) => {
    setInput(value);
    setSearchStateName(value);
  };

  return (
    <>
      <div className="container" style={{ marginTop: "2rem" }}>
        <h1 style={heading}>COVID-19 Tracker</h1>
        <h3 style={heading}>India</h3>
        <div className="row">
          <div className="col" style={border}>
            <h5 class="card-title">
              <b>Active Cases</b>
            </h5>
            <div className="card bg-transparent" style={cardBg}>
              <div className="card-body">
                <p className="card-text" style={digits}>
                  {active}
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={border}>
            <h5 class="card-title">
              <b>Total Recoverd</b>
            </h5>
            <div className="card bg-transparent" style={cardBg}>
              <div className="card-body">
                <p className="card-text" style={digits}>
                  {recovered}
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={border}>
            <h5 class="card-title">
              <b>Total Deaths</b>
            </h5>
            <div className="card bg-transparent" style={cardBg}>
              <div className="card-body">
                <p className="card-text" style={digits}>
                  {deaths}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* autocomplete */}
        <Autocomplete
          style={{
            width: "50%",
            margin: "0 auto",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
          id="debug"
          debug
          options={states.map((option) => option.title)}
          renderInput={(params) => (
            <TextField {...params} label="Search by state" margin="normal" />
          )}
          inputProps={{ className: "test" }}
          onChange={myInput}
          value={input}
        />
        {searchStateName ? (
          <h4 style={heading}>{searchStateName}</h4>
        ) : (
          <h4 style={heading}>Assam</h4>
        )}
        <div className="row">
          <div className="col" style={border}>
            <h5 class="card-title">
              <b>Active Cases</b>
            </h5>
            <div className="card bg-transparent" style={cardBg}>
              <div className="card-body">
                <p className="card-text" style={digits}>
                  {activeByState}
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={border}>
            <h5 class="card-title">
              <b>Total Recoverd</b>
            </h5>
            <div className="card bg-transparent" style={cardBg}>
              <div className="card-body">
                <p className="card-text" style={digits}>
                  {recoveredByState}
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={border}>
            <h5 class="card-title">
              <b>Total Deaths</b>
            </h5>
            <div className="card bg-transparent" style={cardBg}>
              <div className="card-body">
                <p className="card-text" style={digits}>
                  {deathsByState}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div
            className="col-6"
            style={{
              width: "50%",
              marginTop: "5rem",
              textAlign: "center",
              fontFamily: "Amaranth",
              paddingBottom: "20px",
            }}
          >
            <b>Last Updated:</b> {lastUpdated}
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
};

export default Covid;
