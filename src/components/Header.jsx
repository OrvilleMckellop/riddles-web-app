import React from 'react'
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Riddles</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li>
        <a href="https://github.com/OrvilleMckellop" target="_blank" rel="">
        <button className='btn btn-ghost btn-circle'><FaGithub size={30}/></button>
        </a>
    </li>
    </ul>
  </div>
</div>
  )
}

export default Header