import { Link } from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"
import logo from '../assets/Logo.png'



const Navbar = () => {
  
  const [menu,setMenu]=useState(false)

  const showMenu=()=>{
    setMenu(!menu)
  } 
   
    const {user}=useContext(UserContext)
    
  return (
    <div className="flex items-center justify-between px-6 md:px-[100px] py-0 bg-black text-white ">
    <h1 className=" w-[200px] h-[210px]"><Link to="/"><img src={logo} alt="title"></img></Link></h1>
    <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4  text-xl ">
      {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
      {user? <div onClick={showMenu}>
        <p className="cursor-pointer relative"><FaBars/></p>
        {menu && <Menu/>}
      </div>:<h3><Link to="/register">Register</Link></h3>}
    </div>
    <div onClick={showMenu} className="md:hidden text-lg">
      <p className="cursor-pointer relative"><FaBars/></p>
      {menu && <Menu/>}
    </div>

    </div>
  )
}

export default Navbar 