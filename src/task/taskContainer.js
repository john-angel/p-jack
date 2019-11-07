import React, {Component} from 'react';
import Task from './task';
import {tasks} from '../utils/testData';
import TaskDetail from './taskDetail';

class TaskContainer extends Component {
    
    constructor(props){
        super(props);
        let taskObj = tasks[this.props.projectId];
        this.state = {
            taskItems: Object.keys(taskObj).map(task => taskObj[task]),
            displayDetail: false,
            taskDetail:null
        };
    }

    onTaskSelected = (task) => {
        this.setState({displayDetail:true,taskDetail:task});
    }

    onDetailClosed = () => {
        this.setState({displayDetail:false})
    }

    render(){
        return(
            <React.Fragment>
            <div className={'taskGrid'}>
            {
                
                this.state.taskItems.map(item =>
                    <Task key={item.id} data={item} onSelected={this.onTaskSelected}></Task>
                )
                
            }
            </div>
            {  
                this.state.displayDetail ? <TaskDetail data={this.state.taskDetail} onClose={this.onDetailClosed}></TaskDetail> : null
            }            
            </React.Fragment>           
        )
    }
}

export default TaskContainer;