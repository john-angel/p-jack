import React, {Component} from 'react';
import {notStartedStatus,onHoldStatus,onTrackStatus,delayedStatus,atRiskStatus} from '../utils/status';
import {getColorFromStatus} from '../utils/colors';

class TaskOverview extends Component{

    constructor(props){
        super(props);
        let tasksTobeCompleted = 0;
        let nextTask = '';
        let taskColor = '';

        if(typeof this.props.tasks !== 'undefined'){
            const tasksArray = Object.keys(this.props.tasks).map(projectId => this.props.tasks[projectId]);
            
            tasksArray.forEach(task => {

                switch (task.status) {
                    case notStartedStatus:
                    case onHoldStatus:
                        tasksTobeCompleted++;
                        break;                   
                    case onTrackStatus:
                    case atRiskStatus:
                        if(nextTask === ''){ 
                            nextTask = task.name;
                            taskColor = getColorFromStatus(task.status);
                        };                        
                        tasksTobeCompleted++;
                        break;
                    case delayedStatus://Delayed tasks have a higher priority
                        nextTask = task.name;
                        taskColor = getColorFromStatus(task.status) ;
                        tasksTobeCompleted++;
                        break;                                   
                    default:
                        break;
                }

                
            })
            this.state = tasksTobeCompleted === 0 ? 
                {task:'You are done!', color:getColorFromStatus(onTrackStatus), tasksToComplete:tasksTobeCompleted} :
                {task:nextTask, color:taskColor, tasksToComplete:tasksTobeCompleted};
        }else{
            this.state = {task:'No tasks defined', color:getColorFromStatus(atRiskStatus)}
        }

    }
    
    render(){
        return (
            <ul className={'taskOverviewList'}>

                <li><a href='/tasks' type='text/html' style={{ fontSize: '1em', fontWeight:'bold', color: this.state.color }}>{this.state.task}</a></li>
                {
                    this.state.tasksToComplete > 0 ?
                        <li><a href='/tasks' type='text/html' style={{ fontSize: '1.5em', color: 'black' }}>{this.state.tasksToComplete}</a> tasks to go</li> :
                        null
                }
            </ul>
        )
    }
}

export default TaskOverview;