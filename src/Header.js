import React from 'react';
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDataLayerValue } from './DataLayer';

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className='header'>
      <div className="header__left">
        <SearchOutlinedIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div> 
      <div className='header_right'>
        <AccountCircleIcon scr='' alt='Anison' />
        <h4>Anison</h4>
      </div> 
    </div>
  );
}

export default Header
