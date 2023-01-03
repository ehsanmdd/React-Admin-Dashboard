import React from 'react'
import "./WidgetLg.css"
import { transaction } from '../../Datas'

function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={`widgetLg__button` + type}>{type}</button>
    }

    return (
        <div className='widgetLg'>
            <h3 className="widgetLg__title">Last Transaction</h3>
            <table className="widgetLg__table">
                <thead>
                    <tr className="widgetLg__tr">
                        <th className="widgetLg__th">Customer</th>
                        <th className="widgetLg__th">Data</th>
                        <th className="widgetLg__th">About</th>
                        <th className="widgetLg__th">Status</th>
                    </tr>
                </thead>

                {transaction.map(data => (
                    <tbody key={data.id}>
                        <tr className="widgetLg__tr">
                            <td className="widgetLg__user">
                                <img src={data.img} alt="User Avatar" className='widgetLg__user--img' />
                                <span className="widgetLg__user--userName">{data.customer}</span>
                            </td>
                            <td className="widgetLg__data">{data.date}</td>

                            <td className="widgetLg__amount">${data.amount}</td>

                            <td className="widgetLg__status">
                                <Button type={data.status} />
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}


export default WidgetLg