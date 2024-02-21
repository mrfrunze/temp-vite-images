import React from 'react'
import { useGlobalContext } from './context'
import { BsFillSunFill, BsFillMoonFill  } from "react-icons/bs";

const ThemeToggle = () => {
  const {isDarkThem, toggleDarkTheme} = useGlobalContext()

  return <section className='toggle-container'>
    <button className="dark0toggle" onClick={toggleDarkTheme}>
      {isDarkThem ? 
        (<BsFillMoonFill className='toggle-icon'/>) :
        (<BsFillSunFill className='toggle-icon'/>) 
      }
    </button>
  </section>

}

export default ThemeToggle