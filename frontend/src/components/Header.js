import React from 'react'
import './styles/header.css'
import logo from './asset/logo.png'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'; 
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MessageIcon from '@mui/icons-material/Message';
import ReportIcon from '@mui/icons-material/Report';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    
<div className='Header'>
<div  className='logo' src={logo} alt="img not found"></div>
<br></br>
<br></br>
<div className='nav-bar'>

<Link to="/" className='iconcontainer home'>
<HomeRoundedIcon  sx={{ fontSize: 50 }} className='ico' />
<div className='home2'>Home</div>
</Link>


<Link to="/User-Setting" className='iconcontainer'>
<ManageAccountsIcon  sx={{ fontSize: 50 }} className='ico' />
<div className='home2'>User</div>
</Link>
<Link to="Talk-Rooms"className='iconcontainer'>
<MessageIcon sx={{ fontSize: 50 }} className='ico' />
<div className='home2'>Talk</div>
</Link>
<Link to= "/Report"  className='iconcontainer'>
<ReportIcon sx={{ fontSize: 50 }} className='ico' />
<div className='home2'>Report</div>
</Link>
<Link to="/Fun-Rooms" className='iconcontainer'>
<StarRoundedIcon sx={{ fontSize: 50 }} className='ico-star' />
<div className='home2'>Fun</div>
</Link>
</div>
<div className='nav-bar-bottom'>
<Link to="/Setting" className='iconcontainer'>
<SettingsIcon sx={{ fontSize: 50 }} className='ico' />
<div className='home2'>Setting</div>
</Link>
</div>
</div>
</>
  )
}

export default Header ;