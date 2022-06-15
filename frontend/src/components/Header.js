import React from 'react'
import './styles/header.css'
import logo from './asset/logo.png'
import HomeIcon from '@mui/icons-material/Home';
const Header = () => {
  return (
    <>
    
<div className='Header'>
<div  className='logo' src={logo} alt="img not found"></div>
<br></br>
<div className='nav-bar'>
<HomeIcon></HomeIcon>
</div>
</div>
</>
  )
}

export default Header