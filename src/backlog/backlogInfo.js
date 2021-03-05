import React, {Component} from 'react';
import {tasks} from '../utils/testData';
import {backlog} from '../utils/board';
import Task from '../task/task';

class BacklogInfo extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            tasks: []
        };

        let taskObj = tasks[this.props.projectId];
        
        if(typeof taskObj !== 'undefined'){
            this.state.tasks = Object.keys(taskObj).map(id => taskObj[id]).filter(task => task.boardList === backlog);            
        }
    }

    render(){
        return(
            <section className='projectBacklogContainer'>
                <section className='projectBacklogSummary'>
                    <p className='projectBacklogInfoTitle'>Backlog</p>
                    <p className='projectBacklogInfoTotalTasksValue'>{this.state.tasks.length}</p>
                    <p className='projectBacklogInfoTotalTasksName'>Tasks</p>
                    <p className='projectBacklogInfoTasksAtRiskValue'>1</p>
                    <p className='projectBacklogInfoTasksAtRiskName'>At risk</p>
                </section>
                {
                    this.state.tasks.map(task => <Task key={task.id} data={task}></Task>)
                }                
            </section>
        )
    }
}

export default BacklogInfo;

