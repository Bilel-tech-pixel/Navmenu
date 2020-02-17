import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'

const NavMenu = [
  {
    text:"home",
    link:"#",
    active:false
  },
  {
    text:"services",
    link:"#",
    active:false,
    submenu : ["for enterpreneurs" , "for students" , "for hobbists"]
  },
  {
    text:"contact",
    link:"#",
    active:false
  }
]

function App() {
  return (<div className="App">
     <Menu  navmenu={NavMenu}    /> 
  </div>
  );
}

export default App;
