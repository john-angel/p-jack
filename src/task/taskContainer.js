import React, {Component} from 'react';
import Task from './task';
import {tasks} from '../utils/testData';

class TaskContainer extends Component {
    
    constructor(props){
        super(props);
        let taskObj = tasks[this.props.projectId];
        this.state = {taskItems: Object.keys(taskObj).map(task => taskObj[task])};
    }

    render(){
        return(
            <div className={'tasksContainer'}>
            {
                this.state.taskItems.map(item =>
                    <Task key={item.id} data={item}></Task>
                )
            }                
            </div>
        )
    }
}

export default TaskContainer;