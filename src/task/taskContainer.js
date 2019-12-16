import React, {Component} from 'react';
import Task from './task';
import {tasks} from '../utils/testData';
import {notStartedStatus, completeStatus} from '../utils/status';
import TaskDetail from './taskDetail';

class TaskContainer extends Component {
    
    constructor(props){
        super(props);
        
        let taskObj = tasks[this.props.projectId];

        this.state = {
            taskItems: typeof taskObj !== 'undefined' ? Object.keys(taskObj).map(task => taskObj[task]): null,
            displayDetail: false,
            detail:null
        };
    }

    onTaskSelected = (task) => {

        this.setState({
            displayDetail: true,
            detail: task
        });
    }

    onTaskMarked = (id) => this.state.detail.status === completeStatus ? this.updateProperty(id,'status',notStartedStatus) : this.updateProperty(id,'status',completeStatus)

    onNameChange = (id,name) => this.updateProperty(id,'name',name)

    onDueDateChange = (id,date) => this.updateProperty(id,'due',date)

    onStatusChange = (id,status) => this.updateProperty(id,'status',status)

    onCommentsChange = (id,comments) => this.updateProperty(id,'comments',comments)

    updateProperty = (id,property,value) => {
        let newItem;
        let newItems = [...this.state.taskItems];

        newItems = newItems.map(item => {
            if (item.id === id) {
                newItem = Object.assign({}, item)
                newItem[property] = value;
                return newItem;
            }
            return item;
        })

        this.setState({
                taskItems: newItems,
                detail: newItem
            }
        )
    }  
   
    onDetailClosed = () => {
        this.setState({displayDetail:false})
    }

    render(){
        return(
            <div className={'taskContainer'}>
                <div className={'taskGrid'} style={this.displayDetail ? { width: '50%', marginRight: '5px'} : {width: '100%', marginRight: '10px'}}>
                    {
                        this.state.taskItems !== null ?
                        this.state.taskItems.map(item =>
                            <Task key={item.id} data={item} onSelected={this.onTaskSelected} onTaskMarked={this.onTaskMarked} onNameChange={this.onNameChange}></Task>
                        ) 
                        : <Task data={null} onSelected={this.onTaskSelected} onTaskMarked={this.onTaskMarked} onNameChange={this.onNameChange}></Task>
                    }
                </div>
                {
                    this.state.displayDetail ? <TaskDetail data={this.state.detail} onTaskMarked={this.onTaskMarked} onNameChange={this.onNameChange} onDueDateChange={this.onDueDateChange} onStatusChange={this.onStatusChange} onCommentsChange={this.onCommentsChange} onClose={this.onDetailClosed}></TaskDetail> : null
                }
            </div>           
        )
    }
}

export default TaskContainer;