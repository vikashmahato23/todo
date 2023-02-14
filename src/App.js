import logo from './logo.svg';
import './App.css';
import { ToDoList } from './components/TodoList';
import { Navbar } from './components/Navbar';
import { useState } from 'react';

function App() {
  const [light,setLight]=useState(true)
  function lighthandle(value){
         if(value){
          setLight(true)
         }
         else {
          setLight(false)
         }
  }
  return (
    <div className="App" style={{backgroundColor:`${light?"white":"black"}`}}>
      <Navbar  onClick={lighthandle} light={light}/>
      <div className='con'>
        <ToDoList light={light} />
      </div>
    </div>
  );
}

export default App;
