import React, {Component} from 'react';
import {completeStatus} from '../utils/status';

class TaskOverview extends Component{

    constructor(props){
        super(props);
        let tasksTobeCompleted = 0;

        if(typeof this.props.tasks !== 'undefined'){
            const tasksArray = Object.keys(this.props.tasks).map(projectId => this.props.tasks[projectId]);
            
            tasksArray.forEach(task => {
                if(task.status !== completeStatus){
                    tasksTobeCompleted++;
                }
            })
            this.state = {tasksToComplete: tasksTobeCompleted}
        }else{
            this.state = {tasksToComplete: 0}
        }

    }
    render(){
        return (
            <ul className={'taskOverviewList'}>
                <li><a href='/tasks' type='text/html' style={{color:'#FF8080'}}>Current or due task that can be long.</a></li>
                <li><a href='/tasks' type='text/html' style={{color:'#7ED3B2'}}>Next task.</a></li>
                {
                    this.state.tasksToComplete === 0 ?
                        <li>You're done!</li> :
                        <li>
                            <a href='/tasks' type='text/html' style={{ fontSize: '1.5em', color: 'black' }}>{this.state.tasksToComplete}</a> tasks to go
                        </li>
                }                          
            </ul>
        )
    }
}

export default TaskOverview;