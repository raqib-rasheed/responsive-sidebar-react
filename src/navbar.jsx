import React from 'react'
import Sidebar from './sidebar'

export default function Navbar(){
  const[displaySidebar,setDisplaySidebar] = React.useState(false)
  return(
    <>
    <div id="navbar">
      <h3>Coding Addict</h3>
      <div id="links">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </div>
      <i 
      className="fa fa-bars"
      onClick={()=>setDisplaySidebar(!displaySidebar)} 
      />
    </div>
    {displaySidebar && <Sidebar />}
    </>
  )
}