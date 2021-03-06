import React, {Component} from 'react';
import {atRiskStatus} from '../utils/status';
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
    
    render(){
        return(
            <section className='projectBacklogContainer'>
                <section className='projectBacklogSummary'>
                    <p className='projectBacklogInfoTitle'>Backlog</p>
                    <p className='projectBacklogInfoTotalTasksValue'>{this.props.tasks.length}</p>
                    <p className='projectBacklogInfoTotalTasksName'>Tasks</p>
                    <p className='projectBacklogInfoTasksAtRiskValue'>{this.state.tasksAtRisk}</p>
                    <p className='projectBacklogInfoTasksAtRiskName'>At risk</p>
                </section>
                {
                    this.props.tasks.map(task => <Task key={task.id} data={task}></Task>)
                }                
            </section>
        )
    }
}

export default BacklogInfo;

