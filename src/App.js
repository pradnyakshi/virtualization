import React from 'react';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Linear from './Component/Linear';
import RatInMaze from './Component/RatInMaze';
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';
import './App.css';
import Binary from './Component/Binary';

function App() {
  return <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route exact path='/linear' element={<Linear/>}/>
      </Routes>
      <Routes>
        <Route exact path='/binary' element={<Binary/>}/>
      </Routes>
      <Routes>
        <Route exact path='/ratInMaze' element={<RatInMaze/>}/>
      </Routes>
    </Router>
  </>;
}

export default App;
