import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import SwitchAccessShortcutAddOutlinedIcon from '@mui/icons-material/SwitchAccessShortcutAddOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }] = useDataLayerValue();
  console.log(playlists);

  return (
    <div className='sidebar'>
      <h1 className='sidebar_logo'>Bee</h1>

      <SidebarOption Icon={HomeIcon} title='Home' />
      <SidebarOption Icon={TrendingUpIcon} title='Trend' />
      <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
      <br/>
      <p className='sidebar_section1'> Discover</p>

      <SidebarOption Icon={SwitchAccessShortcutAddOutlinedIcon} title='New and Notable' />
      <SidebarOption Icon={CalendarMonthOutlinedIcon} title='Release Calendar' />
      <SidebarOption Icon={LocalActivityOutlinedIcon} title='Events' />
      <br/>
      <p className='sidebar_section1'>Your Collection</p>

      <SidebarOption Icon={FavoriteIcon} title='Favorite Songs' />
      <SidebarOption Icon={GroupsIcon} title='Artist' />
      <SidebarOption Icon={StarIcon} title='Albums' />
      
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
