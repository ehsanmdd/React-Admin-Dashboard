import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import "./Sale.css"

function Sale() {

  const data = [
    {
      name: 'May',
      sale: 4000,
      buy: 2400,
      price: 2400,
    },
    {
      name: 'Jun',
      sale: 3000,
      buy: 1398,
      price: 2210,
    },
    {
      name: 'Jul',
      sale: 2000,
      buy: 9800,
      apricempricet: 2290,
    },
    {
      name: 'Agu',
      sale: 2780,
      buy: 3908,
      price: 2000,
    },
    {
      name: 'Sep',
      sale: 1890,
      buy: 4800,
      price: 2181,
    },
    {
      name: 'Oct',
      sale: 2390,
      buy: 3800,
      price: 2500,
    },
    {
      name: 'Nov',
      sale: 3490,
      buy: 4300,
      price: 2100,
    },
  ];


  return (
    <div className="sale">
      <h3 className="chart__title">Sales Data</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
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
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="sale" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="buy" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Sale
