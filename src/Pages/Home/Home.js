import React from 'react'
import "./Home.css"
import Features from '../../Components/Features/Features'
import Chart from '../../Components/Chart/Chart'
import { xAxisData } from '../../Datas'
import WidgetSm from '../../Components/WidgetSm/WidgetSm'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'


function Home() {
  return (
    <div  className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale"/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home