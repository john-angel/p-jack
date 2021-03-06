import React, {Component} from 'react';
import {atRiskStatus} from '../utils/status';
import Task from '../task/task';

class InProgressInfo extends Component {
    constructor(props){
        super(props);

        let atRisk = 0;
        let revenue = 0;

        this.props.tasks.forEach(task => {
            if(task.status === atRiskStatus){
                atRisk++;
            }
            revenue+= task.revenue;
        });

        this.state = {
            tasksAtRisk: atRisk,
            forecast: this.parseRevenue(revenue)
        }
    }

    parseRevenue = (value) => {
        const revenue = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          notation:'compact',                                        
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value);
  
        return revenue;
    }
    
    render(){
        return(
            <section className='projectInProgressContainer'>
                <section className='projectInProgressSummary'>
                    <p className='projectInProgressInfoTitle'>In progress</p>
                    <p className='projectInProgressInfoTasksAtRiskValue'>{this.state.tasksAtRisk}</p>
                    <p className='projectInProgressInfoTasksAtRiskName'>At risk</p>
                    <p className='projectInProgressInfoForecastValue'>{this.state.forecast}</p>
                    <p className='projectInProgressInfoForecastName'>Forecasted</p>                    
                </section>
                {
                    this.props.tasks.map(task => <Task key={task.id} data={task}></Task>)
                }                
            </section>
        )
    }
}

export default InProgressInfo;

