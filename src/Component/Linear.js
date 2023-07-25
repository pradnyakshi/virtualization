import React from "react";
import "../static/Linear.css";

export default function Linear() {
  let n = 0;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const submitNumberOfElements = async () => {
    const info = document.querySelector(".info");
    const line = document.querySelector(".line");
    const arry = document.querySelector(".array");
    n = document.getElementById("ele").value;
    info.style.display = "none";
    line.style.display = "flex";
    for (let i = 1; i <= n; i++) {
      let x = document.createElement("input");
      x.className = "x";
      x.id = i;
      arry.appendChild(x);
    }
  };

  const submitNumbers = () => {
    const valueBox = document.querySelector(".valueBox");
    const line = document.querySelector(".line");
    line.style.display = "none";
    valueBox.style.display = "flex";
    const inputs = document.querySelectorAll(".x");
    inputs.forEach((x) => {
      x.setAttribute("disabled", "true");
    });
  };
  const startVisualization = async () => {
    const value = document.getElementById("value");
    value.setAttribute("disabled", "true");
    const key = value.value;
    const start = document.getElementById("start");
    start.style.display = "none";
    const arrow = document.getElementById("arrow");
    arrow.style.display = "block";
    const resultLine = document.getElementById("result");
    let x = (Math.ceil(n / 2) - 1) * 2.5;
    if (n % 2 === 0) {
      x = x + 1.25;
    }
    x = -x;
    arrow.style.transform = `translateX(${x}rem)`;
    let a = [];
    const inputs = document.querySelectorAll(".x");
    inputs.forEach((e) => {
      a.push(e.value);
    });
    let flag = false;
    for (let i = 0; i < n; i++) {
      await sleep(1000);
      if (a[i] === key) {
        flag = true;
        resultLine.innerHTML = `<div>${key} is found at index ${i}</div>`;
        document.getElementById(`${i + 1}`).style.background = "#C0F7B7";

        break;
      } else {
        resultLine.innerHTML = `<div>${key} != ${a[i]}</div>`;
        x = x + 2.5;
        await sleep(3000);
        if (i !== n - 1) {
          arrow.style.transform = `translateX(${x}rem)`;
        }
      }
    }
    if (!flag) {
      resultLine.innerHTML = `<div>${key} is not present in array</div>`;
      arrow.style.display = "none";
    }
    const tr = document.getElementById('try');
    tr.style.display = 'block';
  };
  function load()
    {
        window.location.reload();
    }

  return (
    <>
      <div className="container">
        <div className="info">
          <div>
            <label htmlFor="ele">Enter number of elements : </label>
            <input type="text" id="ele" />
          </div>
          <button onClick={submitNumberOfElements} className="btn">
            Submit
          </button>
        </div>
        <div className="line">
          <div>Enter the elements into the array</div>
          <button className="btn" onClick={submitNumbers}>
            Submit
          </button>
        </div>
        <div className="valueBox">
          <div>
            <label htmlFor="value">Enter the value to be search : </label>
            <input type="text" id="value" />
          </div>
          <button className="btn" id="start" onClick={startVisualization}>
            Start Visualization
          </button>
        </div>
        <div className="board">
          <i className="fas fa-arrow-down" id="arrow"></i>
          <div className="array" style={{ display: "flex" }}></div>
          <div id="result"></div>
        </div>
        
          <button id="try" style={{ display: "none" }} onClick={load}>
          Try with another example
          </button>
        
      </div>
    </>
  );
}
