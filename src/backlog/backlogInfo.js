import React, {Component} from 'react';
import {tasks} from '../utils/testData';
import {backlog} from '../utils/board';

class BacklogInfo extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {tasks: []};

        let taskObj = tasks[this.props.projectId];
        
        if(typeof taskObj !== 'undefined'){
            this.state.tasks = Object.keys(taskObj).map(id => taskObj[id]).filter(task => task.boardList === backlog);            
        }
    }

    render(){
        return(
            <section className='projectBacklogContainer'>
                <p className='projectBacklogInfoTitle'>Backlog</p>
                <p className='projectBacklogInfoTotalTasksValue'>4</p>
                <p className='projectBacklogInfoTotalTasksName'>Tasks</p>
                <p className='projectBacklogInfoTasksAtRiskValue'>1</p>
                <p className='projectBacklogInfoTasksAtRiskName'>At risk</p>
            </section>
        )
    }
}

export default BacklogInfo;

