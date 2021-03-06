import React, {Component} from 'react';
import {notStartedStatus,onHoldStatus,onTrackStatus,delayedStatus,atRiskStatus,completeStatus,getTextFromStatus} from '../utils/status';
import {getColorFromStatus, infoColor} from '../utils/colors';

class Task extends Component{

    constructor(props){
        super(props);

        this.state = {
            id:this.props.data.id,
            name:this.props.data.name,
            status:this.props.data.status,
            dueDate:this.props.data.dueDate,
            revenue:this.parseRevenue(this.props.data.revenue),
            assigned:this.props.data.assigned,
            comments:this.props.data.comments,
            statusColor:getColorFromStatus(this.props.data.status)
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

    onStatusChange = (event) => {
        event.persist();
        this.setState({
            status:event.target.value,
            statusColor:getColorFromStatus(event.target.value)
        });
    }

    onDueDateChange = (event) => {
        event.persist();
        this.setState({dueDate:event.target.value});        
    }

    onRevenueChange = (event) => {
        event.persist();
        this.setState({revenue:event.target.value})
    }

    onAssignedChange = (event) => {
        event.persist();
        this.setState({assigned:event.target.value})
    }

    onCommentsChange = (event) => {
        event.persist();
        this.setState({comments:event.target.value})
    }



    render(){
        return(
            <section className='projectTaskContainer'>
                <h3 className='projectTaskTitle'>{this.state.name}</h3>
                <label className='projectTaskStatusLabel' htmlFor={'projectTaskStatusValue' + this.state.id}>Status:</label>
                <select id={'projectTaskStatusValue' + this.state.id} value={this.state.status} style={{ color: this.state.statusColor }} onChange={this.onStatusChange}>
                    <option value={notStartedStatus}>{getTextFromStatus(notStartedStatus)}</option>
                    <option value={onHoldStatus}>{getTextFromStatus(onHoldStatus)}</option>
                    <option value={onTrackStatus}>{getTextFromStatus(onTrackStatus)}</option>
                    <option value={delayedStatus}>{getTextFromStatus(delayedStatus)}</option>
                    <option value={atRiskStatus}>{getTextFromStatus(atRiskStatus)}</option>
                    <option value={completeStatus}>{getTextFromStatus(completeStatus)}</option>
                </select>
                <label className='projectTaskDueLabel' htmlFor={'projectTaskDueValue' + this.state.id}>Due:</label>
                <input type='date' id={'projectTaskDueValue' + this.state.id} value={this.state.dueDate} name='projectTaskDueValue' style={{color:infoColor}} onChange={this.onDueDateChange}></input>
                <label className='projectTaskRevenueLabel' htmlFor={'projectTaskRevenueValue' + this.state.id}>Revenue:</label>
                <input type='text' id={'projectTaskRevenueValue' + this.state.id} value={this.state.revenue} name='projectTaskRevenueValue' style={{color:infoColor}} onChange={this.onRevenueChange}></input>
                <label className='projectTaskAssignedLabel' htmlFor={'projectTaskAssignedValue' + this.state.id}>Assigned:</label>
                <select id={'projectTaskAssignedValue' + this.state.id} value={this.state.assigned} onChange={this.onAssignedChange}>
                    <option value='John'>John</option>
                    <option value='Natasha'>Natasha</option>
                    <option value='Tony'>Tony</option>                    
                </select>
                <textarea className='projectTaskComments' maxLength='125' rows='2' value={this.state.comments} onChange={this.onCommentsChange}></textarea>
            </section>
        )
    }
}

export default Task;