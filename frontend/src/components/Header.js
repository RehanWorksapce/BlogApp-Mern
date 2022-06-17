import React from 'react'
import './styles/header.css'
import logo from './asset/logo.png'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'; 
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MessageIcon from '@mui/icons-material/Message';
import ReportIcon from '@mui/icons-material/Report';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import SettingsIcon from '@mui/icons-material/Settings';
const Header = () => {
  return (
    <>
    
<div className='Header'>
<div  className='logo' src={logo} alt="img not found"></div>
<br></br>
<br></br>
<div className='nav-bar'>
<div className='iconcontainer home'>
<HomeRoundedIcon  link="/home" sx={{ fontSize: 50 }} className='ico' />
<div className='home2'>Home</div>
</div>

<div className='iconcontainer'>
<ManageAccountsIcon  sx={{ fontSize: 50 }} className='ico' />
<div className='home2'>User</div>
</div>
<div className='iconcontainer'>
<MessageIcon sx={{ fontSize: 50 }} className='ico' />
<div className='home2'>Talk</div>
</div>
<div className='iconcontainer'>
<ReportIcon sx={{ fontSize: 50 }} className='ico' />
<div className='home2'>Report</div>
</div>
<div className='iconcontainer'>
<StarRoundedIcon sx={{ fontSize: 50 }} className='ico-star' />
<div className='home2'>Fun</div>
</div>
</div>
<div className='nav-bar-bottom'>
<div className='iconcontainer'>
<SettingsIcon sx={{ fontSize: 50 }} className='ico' />
<div className='home2'>Setting</div>
</div>
</div>
</div>
</>
  )
}

export default Header ;