import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Analytics.css"


function Analytics() {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Sep",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Agu",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Nov",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Dec",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Oct",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Mar",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];



  return (
    <div className="analitics">
      <h3 className="chart__title">Analytics Data</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={100}
          height={100}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


export default Analytics