import React,{useEffect} from 'react';
import '../static/Maze.css';

function Maze(props) {
    const {rows,cols} = props;
    const arr = [];
    let enable = true;
    function formMaze()
    {
        const box = document.getElementById('box');
        
        for(let i=1;i<=rows*cols;i++)
        {
            let x = document.createElement('div');
            x.className = 'y';
            box.appendChild(x);
        }
        colourCell();
    }

    function colourCell()
    {
        if(enable === true){
        const listOFCells = document.querySelectorAll('.y');
        listOFCells.forEach((item) => {
            item.addEventListener('click',()=>{
                item.style.backgroundColor = 'red'
            })
        })
        }
    }

    function ratInMaze()
    {
        enable = false;
        const done = document.getElementById('done');
        const line = document.getElementById('line');
        const listOFCells = document.querySelectorAll('.y');
        done.style.display = 'none';
        line.style.display = 'none';
        let k=-1;
        for(let i=0;i<listOFCells.length;i++)
        {
            if(i%cols === 0)
            {
                k++;
                arr[k]=[];
            }
            arr[k].push(window.getComputedStyle(listOFCells[i],null).getPropertyValue('background-color'));
        }
        if(moveRat(0,0))
            line.innerText = 'Path found';
        else
            line.innerText = 'Path Not found';
        const tryBtn = document.getElementById('try');
        tryBtn.style.display = 'block';
        line.style.display = 'block';
    }

    function isSafe(x,y)
    {
        return x<rows && y<cols && arr[x][y]!=="rgb(255, 0, 0)";
    }
    
    async function moveRat(x,y)
    {
        const listOFCells = document.querySelectorAll('.y');
        if(x===rows-1 && y===cols-1)
        {
            listOFCells[x*cols+y].style.backgroundColor = 'green';
            return true;
        }
        if(isSafe(x,y))
        {
            listOFCells[x*cols+y].style.backgroundColor = 'green';
            if(moveRat(x,y+1))
                return true;
            if(moveRat(x+1,y))
                return true;
            
            listOFCells[x*cols+y].style.backgroundColor = 'bisque';
            return false;
        }
        return false;
    }

    function load()
    {
        window.location.reload();
    }

    useEffect(() => {
        formMaze();
    });
    
    return (
        <>
            <div id="maze">
                <div id='box' style={{'margin':'20px','display': 'grid','gridTemplateRows': 'repeat('+rows+',auto)', 'gridTemplateColumns': 'repeat('+cols+' ,auto)', }}>
                </div>
                <div id='line'>Select the cell as obstracals. After completing click done.</div>
                <button id='done'  onClick={ratInMaze}>Done</button>
                <button id='try' style={{'display': 'none',}} onClick={load}>Try With Another Example</button>
            </div>
        </> 
    )
}

export default Maze;
