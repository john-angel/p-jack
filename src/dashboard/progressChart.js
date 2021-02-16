import React, {Component} from 'react';
import { infoColor, onTrackColor } from '../utils/colors';

class ProgressChart extends Component {

    getValuePosition = (percentage) => {
        const value = parseFloat(percentage);

        if(value <= 40){
            return '10%';
        }
        if(value <= 50){
            return '20%';
        }
        if(value <= 60){
            return '30%';
        }
        if(value <= 70){
            return '40%';
        }
        if(value <= 100){
            return '70%';
        }else{
            return '0%'
        }
    }

    render(){
        const taskPosition = this.getValuePosition(this.props.tasksPercentage);
        const revenuePosition = this.getValuePosition(this.props.tasksPercentage);

        return(       
            <section className='dashboardProgressChart'>
                <>
                    <p className='dashboardTasksNameProgressBar'>Tasks</p>
                    <div className='dashboardTasksProgressBar' style={{ background: `linear-gradient(to right, ${infoColor} 0 ${this.props.tasksPercentage}, white ${this.props.tasksPercentage} 100%)` }}>
                        <p className='dashboardTasksValueProgressBar' style={{ transform: `translateX(${taskPosition})` }}>
                            {this.props.tasksPercentage}
                        </p>
                    </div>
                </>
                <>
                    <p className='dashboardRevenueNameProgressBar'>Revenue</p>
                    <div className='dashboardRevenueProgressBar' style={{ background: `linear-gradient(to right, ${onTrackColor} 0 ${this.props.revenuePercentage}, white ${this.props.revenuePercentage} 100%)` }}>
                        <div className='dashboardRevenueValueProgressBar' style={{ transform: `translateX(${revenuePosition})` }}>
                            {this.props.revenuePercentage}
                        </div>
                    </div>
                </>
            </section>
        )
    }    
}
export default ProgressChart;