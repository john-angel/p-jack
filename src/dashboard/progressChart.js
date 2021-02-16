import React from 'react';
import { infoColor, onTrackColor } from '../utils/colors';

const ProgressChart = (props) => {
    return(
        <section className='dashboardProgressChart'>
            <>{/*0-40:10%;41-50:20;51-60:30;61-70:40;71-100:70 */}
                <p className='dashboardTasksNameProgressBar'>Tasks</p>
                <div className='dashboardTasksProgressBar' style={{ background: `linear-gradient(to right, ${infoColor} 0 ${props.tasksPercentage}, white ${props.tasksPercentage} 100%)` }}>
                    <p className='dashboardTasksValueProgressBar' style={{ transform: `translateX(70%)`}}>
                        {props.tasksPercentage}
                    </p>
                </div>
            </>
            <>
                <p className='dashboardRevenueNameProgressBar'>Revenue</p>
                <div className='dashboardRevenueProgressBar' style={{ background: `linear-gradient(to right, ${onTrackColor} 0 ${props.revenuePercentage}, white ${props.revenuePercentage} 100%)` }}>
                    <div className='dashboardRevenueValueProgressBar' style={{ transform: `translateX(0)`}}>
                        {props.revenuePercentage}
                    </div>
                </div>
            </>
        </section>        
    )
}
export default ProgressChart;