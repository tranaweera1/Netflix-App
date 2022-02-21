import React from 'react';
import "./Sidebar.css"
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, MailOutline, 
    InsertComment, ChatBubbleOutline, WorkOutline, PriorityHigh, PlayCircleOutlineOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return  <div className='sidebar'>
            <div className='sidebarwrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                        <ul className='sidebarList'>
                            <li className='sidebarListItem active'>
                                <Link to="/" className='link'>
                                    <LineStyle className='sidebarIcon' />
                                    Home
                                </Link>
                            </li>
                            <li className='sidebarListItem'>
                                <Timeline  className='sidebarIcon' />
                                Analytics
                            </li>
                            <li className='sidebarListItem'>
                                <TrendingUp className='sidebarIcon' />
                                Sales
                            </li>
                        </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                        <ul className='sidebarList'>
                            <li className='sidebarListItem active'>
                                <Link to="/users" className='link'>
                                    <PermIdentity className='sidebarIcon' />
                                    Users
                                </Link>
                            </li>
                            <li className='sidebarListItem' >
                                <Link to="/movies" className='link'>
                                    <PlayCircleOutlineOutlined  className='sidebarIcon' />
                                    Movies
                                </Link>
                            </li>
                            <li className='sidebarListItem'>
                                <TrendingUp className='sidebarIcon' />
                                Transactions
                            </li>
                            <li className='sidebarListItem'>
                                <AttachMoney className='sidebarIcon' />
                                Reports
                            </li>
                        </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                        <ul className='sidebarList'>
                            <li className='sidebarListItem active'>
                                <MailOutline className='sidebarIcon' />
                                Mail
                            </li>
                            <li className='sidebarListItem'>
                                <InsertComment  className='sidebarIcon' />
                                Feedback
                            </li>
                            <li className='sidebarListItem'>
                                <ChatBubbleOutline className='sidebarIcon' />
                                Messages
                            </li>
                        </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                        <ul className='sidebarList'>
                            <li className='sidebarListItem active'>
                                <WorkOutline className='sidebarIcon' />
                                Manage
                            </li>
                            <li className='sidebarListItem'>
                                <Timeline  className='sidebarIcon' />
                                Analytics
                            </li>
                            <li className='sidebarListItem'>
                                <PriorityHigh className='sidebarIcon' />
                                Reports
                            </li>
                        </ul>
                </div>
            </div>
          </div>
};
