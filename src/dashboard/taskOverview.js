import React, {Component} from 'react';
import {notStartedStatus,onHoldStatus,onTrackStatus,delayedStatus,atRiskStatus, statusPriorityEnum, completeStatus} from '../utils/status';
import {getColorFromStatus, infoColor} from '../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faStopCircle, faFire, faCheck, faExclamation, faInfo} from '@fortawesome/free-solid-svg-icons'
import {TaskQueue} from '../task/taskQueue';


class TaskOverview extends Component{

    constructor(props){
        super(props);
        
        this.queue = new TaskQueue();
        
        if(typeof this.props.tasks !== 'undefined'){
            const tasksArray = Object.keys(this.props.tasks).map(projectId => this.props.tasks[projectId]);
            
            tasksArray.forEach(task => {

                if(task.status !== completeStatus){
                    let taskElement = this.setPriority(task);
                    taskElement = this.parseDueDate(taskElement);                
                    this.queue.enqueue(taskElement);
                }           
                
            })              
        }
    }

    setPriority = (task) => {
        let newTask = {};

        Object.assign(newTask,task);
        newTask.priority = statusPriorityEnum[task.status];
        
        return newTask;      
    }

    parseDueDate = (task) => {
        let newTask = {};
        
        let dateArray = task.dueDate.split('-');      
        let month = Number(dateArray[1]) - 1;
        let newDate = new Date(dateArray[0], month, dateArray[2]);

        Object.assign(newTask,task);
        newTask.dueDate = newDate;

        return newTask;
    }

    getIcon = (task) => {
        if (typeof task !== 'undefined') {
            switch (task.status) {
                case notStartedStatus:
                    return faStopCircle;
                case onHoldStatus:
                    return faPauseCircle;
                case onTrackStatus:
                    return faCheck;
                case atRiskStatus:
                    return faExclamation;
                case delayedStatus:
                    return faFire;
            }
        }
        return faInfo;
    }
    
    render(){
        const firstTask = this.queue.dequeue();
        const firstTaskName = typeof firstTask === 'undefined' ? 'No tasks defined' : firstTask.name;
        const firstTaskIcon = this.getIcon(firstTask);
        const firstTaskIconColor = typeof firstTask === 'undefined' ? infoColor : getColorFromStatus(firstTask.status);

        const secondTask = this.queue.dequeue();        
        const secondTaskName = typeof secondTask === 'undefined' ? 'No tasks defined' : secondTask.name;
        const secondTaskIcon = this.getIcon(secondTask);
        const secondTaskIconColor = typeof secondTask === 'undefined' ? infoColor : getColorFromStatus(secondTask.status);

        
        return (
            <>                           
                <div className='dashboardFirstTaskContainer'>
                    <FontAwesomeIcon icon={firstTaskIcon} style={{color:firstTaskIconColor}}></FontAwesomeIcon>
                    <p className='dashboardFirstTaskName'>{firstTaskName}</p>
                </div>                
                {
                    typeof secondTask !== 'undefined' ?
                    <div className='dashboardSecondTaskContainer'>
                        <FontAwesomeIcon icon={secondTaskIcon} style={{color:secondTaskIconColor}}></FontAwesomeIcon>
                        <p className='dashboardSecondTaskName'>{secondTaskName}</p>
                    </div>
                    :
                    null
                }
            </>           
        )
    }                
}

export default TaskOverview;