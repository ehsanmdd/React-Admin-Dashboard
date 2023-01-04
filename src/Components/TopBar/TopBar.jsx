import React from 'react'
import "./TopBar.css"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function TopBar() {
  return (
    <div className="topbar">
        <div className="topbar__wrapper">

            <div className="topbar__left">
                <img className='topbar__logo--img' src="../images/Logo/dashboard.png" alt="Logo" />
                <span className="topbar__logo">Dashboard</span>
            </div>

            <div className="topbar__right">
                <div className="topbar__icon--container">
                    <NotificationsNoneOutlinedIcon/>
                    <span className="topbar__icon--badge">2</span>
                </div>
                <div className="topbar__icon--container">
                    <LanguageOutlinedIcon/>
                    <span className="topbar__icon--badge">2</span>
                </div>
                <div className="topbar__icon--container">
                    <SettingsOutlinedIcon/>
                </div>
                <div className="topbar__user">
                    <img src="../images/Avatar/UserImage-17.jpg" alt="User Iamge" className="topbar__user--image" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default TopBar