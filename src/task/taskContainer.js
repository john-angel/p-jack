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
            taskItems: Object.keys(taskObj).map(task => taskObj[task]),
            displayDetail: false,
            detail:null
        };
    }

    onTaskMarked = (taskDetail) => {

        this.setState((state) => {

            let status;
            const newItems = state.taskItems.map(item => {
                if(item.id === taskDetail.id){
                    if(item.status === completeStatus){
                        item.status = notStartedStatus;
                    }else{
                        item.status = completeStatus;
                    } 
                    status = item.status;                                                       
                }

                return item;
            })

            let newDetail = Object.assign({},state.detail);
            //TODO:Update the other properties
            newDetail.status = status;
            
            return {
                taskItems: newItems,
                detail: newDetail
            };
        })          
    }

    onTaskSelected = (task) => {
        this.setState({
            displayDetail: true,
            detail: task
        });
    }

    onDetailClosed = () => {
        this.setState({displayDetail:false})
    }

    render(){
        return(
            <div className={'taskContainer'}>
                <div className={'taskGrid'} style={this.displayDetail ? { width: '50%', marginRight: '5px'} : {width: '100%', marginRight: '10px'}}>
                    {
                        this.state.taskItems.map(item =>
                            <Task key={item.id} data={item} onSelected={this.onTaskSelected} onTaskMarked={this.onTaskMarked}></Task>
                        )
                    }
                </div>
                {
                    this.state.displayDetail ? <TaskDetail data={this.state.detail} onTaskMarked={this.onTaskMarked} onClose={this.onDetailClosed}></TaskDetail> : null
                }
            </div>           
        )
    }
}

export default TaskContainer;