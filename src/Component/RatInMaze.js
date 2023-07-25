import React,{useState} from 'react';
import '../static/RatInMaze.css';
import Maze from "./Maze";

const RatInMaze = () => {
  const [rows,setRows] = useState(0);
  const [cols,setCols] = useState(0);
  const [ok,setOk] = useState(false);
  
  const submit = (e) =>{
    e.preventDefault();
    setRows(document.getElementById('rows').value);
    setCols(document.getElementById('cols').value);
    setOk(true);
    const s = document.getElementById('submit');
    s.style.display = 'none';
    const l = document.querySelectorAll('.in');
    l.forEach((i)=>{
      i.style.display = 'none';
    })
  }
  return <>
    <div id='container'>
      <h1 id="heading">Rat in maze</h1>
      <div className='in'>
        <label htmlFor="rows">Enter number of rows : </label>
        <input id="rows" className='int'/>
      </div>
      <div className='in'>
        <label htmlFor="cols">Enter number of columns : </label>
        <input id="cols" className='int'/>
      </div>
      <div>
        <button type="submit" onClick={submit} id='submit'>Submit</button>
      </div>
      <div id="block">
        {ok && <Maze rows={rows} cols={cols}/>}
      </div>
    </div>
  </>;
};

export default RatInMaze;
