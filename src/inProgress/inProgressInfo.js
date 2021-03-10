import React, {Component} from 'react';
import parseRevenue from '../utils/revenue';
import {atRiskStatus} from '../utils/status';
import {inProgress} from '../utils/board';
import Task from '../task/task';

class InProgressInfo extends Component {
   
    onDragStart = (event,data) => {
        this.props.onDragStart(event,data,inProgress);     
    }

    onDragEnd = (event,taskId) => {
        this.props.onDragEnd(event,taskId,inProgress);
    }    

    onDragEnter = (event) => {
        this.props.onDragEnter(event,inProgress);        
    }

    onDragOver = (event) => {
        this.props.onDragOver(event,inProgress);    
    }
    
    onDrop = (event) => {
        this.props.onDrop(event,inProgress);        
    }

    render(){
        let atRisk = 0;
        let revenue = 0;

        this.props.tasks.forEach(task => {
            if(task.status === atRiskStatus){
                atRisk++;
            }
            revenue+= task.revenue;
        });

        const forecast =  parseRevenue(revenue);

        return(
            <section className='projectInProgressContainer' onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDrop={this.onDrop} style={{outline: this.props.outline}}>
                <section className='projectInProgressSummary'>
                    <p className='projectInProgressInfoTitle'>In progress</p>
                    <p className='projectInProgressInfoTasksAtRiskValue'>{atRisk}</p>
                    <p className='projectInProgressInfoTasksAtRiskName'>At risk</p>
                    <p className='projectInProgressInfoForecastValue'>{forecast}</p>
                    <p className='projectInProgressInfoForecastName'>Forecasted</p>                    
                </section>
                {
                    this.props.tasks.map(task => <Task key={task.id} data={task} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}></Task>)
                }                
            </section>
        )
    }
}

export default InProgressInfo;

