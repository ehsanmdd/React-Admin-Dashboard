import React from 'react'
import "./WidgetSm.css"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { newMembers } from '../../Datas';

function WidgetSm() {

    return (
        <div className="widgetSm">
            <span className="widgetSm__title">New Join Members</span>
            <ul className="widgetSm__list">
                {newMembers.map(user => (
                    <li key={user.id} className="widgetSm__list--item">
                        <img src={user.img} alt="User Avatar" className="widgetSm__list--item--img" />
                        <div className="widgetSm__user">
                            <span className="widgetSm__user--userName">{user.username}</span>
                            <span className="widgetSm__user--title">{user.title}</span>
                        </div>
                        <button variant="contained" className="widgetSm__list--item--btn">
                            <VisibilityOutlinedIcon className="widgetSm__list--item--icon"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default WidgetSm