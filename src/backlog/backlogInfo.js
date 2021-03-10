import React, {Component} from 'react';
import {atRiskStatus} from '../utils/status';
import {backlog} from '../utils/board';
import Task from '../task/task';

class BacklogInfo extends Component {

    constructor(props){
        super(props);

        let atRisk = 0;

        this.props.tasks.forEach(task => {
            if(task.status === atRiskStatus){
                atRisk++;
            }            
        });

        this.state = {
            tasksAtRisk:atRisk
        }
    }

    onDragStart = (event,data) => {
        this.props.onDragStart(event,data,backlog);     
    }

    onDragEnd = (event,taskId) => {
        this.props.onDragEnd(event,taskId,backlog);
    }

    onDragEnter = (event) => {
        this.props.onDragEnter(event,backlog);        
    }

    onDragOver = (event) => {
        this.props.onDragOver(event,backlog);    
    }
    
    onDrop = (event) => {
        this.props.onDrop(event,backlog);        
    }
    
    render(){
        return(
            <section className='projectBacklogContainer' onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDrop={this.onDrop} style={{outline: this.props.outline}}>
                <section className='projectBacklogSummary'>
                    <p className='projectBacklogInfoTitle'>Backlog</p>
                    <p className='projectBacklogInfoTotalTasksValue'>{this.props.tasks.length}</p>
                    <p className='projectBacklogInfoTotalTasksName'>Tasks</p>
                    <p className='projectBacklogInfoTasksAtRiskValue'>{this.state.tasksAtRisk}</p>
                    <p className='projectBacklogInfoTasksAtRiskName'>At risk</p>
                </section>
                {
                    this.props.tasks.map(task => <Task key={task.id} data={task} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}></Task>)
                }                
            </section>
        )
    }
}

export default BacklogInfo;

