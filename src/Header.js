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
        <AccountCircleIcon scr={user?.image[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div> 
      <div>
        
      </div>
    </div>
  );
}

export default Header
