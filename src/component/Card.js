// VisitingCard.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import ProfilePic from "./ProfilePic";
import { Button } from "bootstrap";
// import './App.css';

function VisitingCard({ handleA }) {
  const [titlenameA, setTitlenameA] = useState("write here...");
  const [titlenameB, setTitlenameB] = useState("write here...");
  const [titlenameC, setTitlenameC] = useState("write here...");
  const [titlenameD, setTitlenameD] = useState("write here...");

  const [data, setData] = useState([
    { id: 1, name: "John", email: "abc@gmail" ,info : ''},
    { id: 2, name: "peter", email: "def@gmail" },
    { id: 3, name: "satyam", email: "ghf@gmail" },
    { id: 4, name: "abc", email: "adudf@gmail" },
    { id: 5, name: "xyz", email: "dwhf=sd@gmail" },
    { id: 6, name: "pQrst", email: "gdwdehf@gmail" },
  ]);
  const handleNameChangeA = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length === 0) {
      setTitlenameA("write here...");
    } else {
      setTitlenameA(inputValue);
    }
  };
  const handleNameChangeB = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setTitlenameB("write here...");
    } else {
      setTitlenameB(inputValue);
    }
  };
  const handleNameChangeC = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setTitlenameC("write here...");
    } else {
      setTitlenameC(inputValue);
    }
  };
  const handleNameChangeD = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setTitlenameD("write here...");
    } else {
      setTitlenameD(inputValue);
    }
  };

  return (
    <>
      <div>
        <div className="card">
          <div className="card-body">
            {
              <ul className="list-group">
                {data.map((item, index) => (
                  <li key={index} className="list-group-item">
                    <div className="card">
                      <div className="card-body card-index">{item.id}</div>
                      <h1 className="card-txt">{item.name}</h1>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}: {titlenameB}</h5>
                        <input
                          type="string"
                          placeholder="Entet value"
                          onChange={handleNameChangeA}
                        />
                        {/* <button onClick={handleB}>SaveB</button> */}
                      </div>
                      <button>save</button>
                      {/* <ProfilePic /> */}
                    </div>
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default VisitingCard;
