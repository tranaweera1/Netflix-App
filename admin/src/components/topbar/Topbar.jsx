import React from 'react';
import "./Topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';


export const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>lamaadmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img src='https://ygoprodeck.com/pics/89631139.jpg' alt="" className='topAvatar' ></img>
        </div>
      </div>
    </div>
  );
};
  