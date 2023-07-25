import React from "react";
import "../static/Binary.css";

export default function Binary() {
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
    const arrow = document.querySelector(".arrow");
    arrow.style.display = "block";
    const letter = document.querySelector(".letter");
    letter.style.display = "block";
    const sArrow = document.getElementById("sArrow");
    const mArrow = document.getElementById("mArrow");
    const eArrow = document.getElementById("eArrow");
    const s = document.getElementById("s");
    const m = document.getElementById("m");
    const e = document.getElementById("e");
    const resultLine = document.getElementById("result");
    let xS = -(Math.floor(n / 2) * 2.5 - 1);
    let xM = 0;
    let xE = Math.floor(n / 2) * 2.5 - 1;
    if (n % 2 === 0) {
      xS = xS + 1.25;  // +1 
      xM = xM - 1.25;
      xE = xE - 1.25;
    }
    sArrow.style.transform = `translateX(${xS}rem)`;
    eArrow.style.transform = `translateX(${xE}rem)`;
    s.style.transform = `translateX(${xS - 0.25}rem)`;
    e.style.transform = `translateX(${xE + 0.25}rem)`;
    mArrow.style.transform = `translateX(${xM}rem)`;
        m.style.transform = `translateX(${xM}rem)`;
    let a = [];
    const inputs = document.querySelectorAll(".x");
    inputs.forEach((x) => { // +1
      a.push(x.value);
    });
    let flag = false;
      let lIdx = 0;
      let hIdx = n - 1;
      let mid;
      while (lIdx <= hIdx) 
      { // +3
        mid = Math.floor((hIdx+lIdx)/2);
        if (a[mid] === key) 
        {
          flag = true;
          await sleep(2000);
          resultLine.innerHTML = `<div>${key} is found at index ${mid}</div>`;
          document.getElementById(`${mid+1}`).style.background = '#C0F7B7';
          break;
        }
        else if(key < a[mid])
        {   // +3
          xE = xE - (hIdx - mid + 1)*2.5;
          hIdx = mid - 1;
          xM = xM - (hIdx - lIdx)*2.5;
          if(hIdx === lIdx){xM-=2.5}
          await sleep(1000);
          resultLine.innerHTML = `<div>${key} != ${a[mid]}</div>`;
          if(lIdx <= hIdx){
            await sleep(3000);    // +3
            eArrow.style.transform = `translateX(${xE}rem)`;
            e.style.transform = `translateX(${xE + 0.25}rem)`;
          }
        }
        else
        {
            xS = xS + (mid - lIdx + 1)*2.5;
            lIdx = mid + 1;
            xM = xM + (Math.floor((hIdx+lIdx)/2) - mid)*2.5;
            await sleep(1000);
            resultLine.innerHTML = `<div>${key} != ${a[mid]}</div>`;
            if(lIdx <= hIdx){
              await sleep(3000);
            sArrow.style.transform = `translateX(${xS}rem)`;
            s.style.transform = `translateX(${xS - 0.25}rem)`;
            }
        }
        await sleep(3000);
        if(lIdx <= hIdx){
        mArrow.style.transform = `translateX(${xM}rem)`;
        m.style.transform = `translateX(${xM}rem)`;}
      }
    if (!flag) {
      resultLine.innerHTML = `<div>${key} is not present in array</div>`;
      arrow.style.display = "none";
      letter.style.display = "none";
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
          <div>Enter the elements into the array in increasing order</div>
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
          <div className="letter">
            <div id="s">s</div>
            <div id="m">m</div>
            <div id="e">e</div>
          </div>
          <div className="arrow">
            <i className="fas fa-arrow-down" id="sArrow"></i>
            <i className="fas fa-arrow-down" id="mArrow"></i>
            <i className="fas fa-arrow-down" id="eArrow"></i>
          </div>
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
