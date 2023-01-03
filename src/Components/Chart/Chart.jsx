/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, CartesianGrid, Tooltip } from 'recharts';
import "./Chart.css"

function Chart({ title, data, dataKey, grid }) {
    return (
        <div className="chart">
            <h3 className="chart__title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={5}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip />
                    {grid && <CartesianGrid  stroke="#e0dfdf" strokeDasharray="3 3"/>}
                </LineChart>
            </ResponsiveContainer >
        </div>
    )
}


export default Chart