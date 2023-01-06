/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import "./SideBar.css"
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import { NavLink, useParams } from 'react-router-dom';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">

                {/* Dashboard Section */}

                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Dashboard</h3>
                    <ul className="sidebar__lists">
                        <NavLink to="/" className="link sidebar__lists--item" >
                            <li  className="link sidebar__lists--item">
                                <OtherHousesOutlinedIcon className='sidebar__list--icon' />
                                Home
                            </li>
                        </NavLink>
                        <NavLink to="/analytics" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <TrendingUpOutlinedIcon className='sidebar__list--icon' />
                                Analytics
                            </li>
                        </NavLink>
                        <NavLink to="/sale" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <AttachMoneyOutlinedIcon className='sidebar__list--icon' />
                                Sale
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Quick Menu</h3>
                    <ul className="sidebar__lists">
                        <NavLink to="/users" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <PeopleAltOutlinedIcon className='sidebar__list--icon' />
                                Users
                            </li>
                        </NavLink>
                        <NavLink to="/newuser" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <PersonAddOutlinedIcon className='sidebar__list--icon' />
                                New User
                            </li>
                        </NavLink>
                        <NavLink to="/products" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <Inventory2OutlinedIcon className='sidebar__list--icon' />
                                Products
                            </li>
                        </NavLink>
                        <NavLink to="/transactions" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <PaidOutlinedIcon className='sidebar__list--icon' />
                                Transactions
                            </li>
                        </NavLink>
                        <NavLink to="/reports" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <BarChartOutlinedIcon className='sidebar__list--icon' />
                                Reports
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Notifications</h3>
                    <ul className="sidebar__lists">
                        <NavLink to="/mail" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <EmailOutlinedIcon className='sidebar__list--icon' />
                                Mail
                            </li>
                        </NavLink>
                        <NavLink to="/feedback" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <FeedbackOutlinedIcon className='sidebar__list--icon' />
                                Feedback
                            </li>
                        </NavLink>
                        <NavLink to="/messages" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <ChatBubbleOutlineOutlinedIcon className='sidebar__list--icon' />
                                Messages
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Staff</h3>
                    <ul className="sidebar__lists">
                        <NavLink to="/manage" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <ManageHistoryOutlinedIcon className='sidebar__list--icon' />
                                Manage
                            </li>
                        </NavLink>
                        <NavLink to="/salesanalytics" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <AnalyticsOutlinedIcon className='sidebar__list--icon' />
                                Sales Analytics
                            </li>
                        </NavLink>
                        <NavLink to="/log-out" className="link sidebar__lists--item">
                            <li className="sidebar__lists--item">
                                <LoginOutlinedIcon className='sidebar__list--icon' />
                                Log-Out
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar