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

import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">

                {/* Dashboard Section */}

                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Dashboard</h3>
                    <ul className="sidebar__lists">
                        <Link to={"/"} className="link">
                            <li className="sidebar__lists--item active">
                                <OtherHousesOutlinedIcon className='sidebar__list--icon' />
                                Home
                            </li>
                        </Link>
                        <Link to={"/analytics"} className="link">
                            <li className="sidebar__lists--item">
                                <TrendingUpOutlinedIcon className='sidebar__list--icon' />
                                Analytics
                            </li>
                        </Link>
                        <Link to={"/sale"} className="link">
                            <li className="sidebar__lists--item">
                                <AttachMoneyOutlinedIcon className='sidebar__list--icon' />
                                Sale
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Quick Menu</h3>
                    <ul className="sidebar__lists">
                        <Link to={"/users"} className="link">
                            <li className="sidebar__lists--item">
                                <PeopleAltOutlinedIcon className='sidebar__list--icon' />
                                Users
                            </li>
                        </Link>
                        <Link to={"/new User"} className="link">
                            <li className="sidebar__lists--item">
                                <PersonAddOutlinedIcon className='sidebar__list--icon' />
                                New User
                            </li>
                        </Link>
                        <Link to={"/products"} className="link">
                            <li className="sidebar__lists--item">
                                <Inventory2OutlinedIcon className='sidebar__list--icon' />
                                Products
                            </li>
                        </Link>
                        <Link to={"/transactions"} className="link">
                            <li className="sidebar__lists--item">
                                <PaidOutlinedIcon className='sidebar__list--icon' />
                                Transactions
                            </li>
                        </Link>
                        <Link to={"/reports"} className="link">
                            <li className="sidebar__lists--item">
                                <BarChartOutlinedIcon className='sidebar__list--icon' />
                                Reports
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Notifications</h3>
                    <ul className="sidebar__lists">
                        <Link to={"/mail"} className="link">
                            <li className="sidebar__lists--item">
                                <EmailOutlinedIcon className='sidebar__list--icon' />
                                Mail
                            </li>
                        </Link>
                        <Link to={"/feedback"} className="link">
                            <li className="sidebar__lists--item">
                                <FeedbackOutlinedIcon className='sidebar__list--icon' />
                                Feedback
                            </li>
                        </Link>
                        <Link to={"/messages"} className="link">
                            <li className="sidebar__lists--item">
                                <ChatBubbleOutlineOutlinedIcon className='sidebar__list--icon' />
                                Messages
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Staff</h3>
                    <ul className="sidebar__lists">
                        <Link to={"/manage"} className="link">
                            <li className="sidebar__lists--item">
                                <ManageHistoryOutlinedIcon className='sidebar__list--icon' />
                                Manage
                            </li>
                        </Link>
                        <Link to={"/sales analytics"} className="link">
                            <li className="sidebar__lists--item">
                                <AnalyticsOutlinedIcon className='sidebar__list--icon' />
                                Sales Analytics
                            </li>
                        </Link>
                        <Link to={"/log-out"} className="link">
                            <li className="sidebar__lists--item">
                                <LoginOutlinedIcon className='sidebar__list--icon' />
                                Log-Out
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar