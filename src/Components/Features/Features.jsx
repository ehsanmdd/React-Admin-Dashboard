import React from 'react'
import "./Features.css"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

function Features() {
  return (
    <div className="features">

        {/* Revenue */}

        <div className="features__item">
            <span className="feature__title">Revenue</span>
            <div className="featture__container">
                <span className="featture__container--money">$2.415</span>
                <span className="featture__container--rate">
                    -11.4 <ArrowDownwardOutlinedIcon className='featture__container--icon negative' />
                </span>
            </div>
            <span className="features__period">Compared to last month</span>
        </div>

        {/* Sales */}

        <div className="features__item">
            <span className="feature__title">Sales</span>
            <div className="featture__container">
                <span className="featture__container--money">$4.415</span>
                <span className="featture__container--rate">
                    -1.4 <ArrowDownwardOutlinedIcon className='featture__container--icon negative' />
                </span>
            </div>
            <span className="features__period">Compared to last month</span>
        </div>

        {/* Cost */}

        <div className="features__item">
            <span className="feature__title">Cost</span>
            <div className="featture__container">
                <span className="featture__container--money">$2.225</span>
                <span className="featture__container--rate">
                    +2.4 <ArrowDownwardOutlinedIcon className='featture__container--icon' />
                </span>
            </div>
            <span className="features__period">Compared to last month</span>
        </div>
    </div>
  )
}

export default Features