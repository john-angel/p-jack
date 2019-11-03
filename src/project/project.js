import React, {Component} from 'react';
import ProjectDetail from './projectDetail';
import Task from '../task/task';
import {tasks} from './testData';

class Project extends Component{

    constructor(props){
        super(props);
        const taskObj = tasks[this.props.id];
        this.state = {tasksProject: Object.keys(taskObj).map(task => taskObj[task])};
    }

    render(){
        return(
            <div className={'project'}>
                <ProjectDetail>
                </ProjectDetail>
                {/*Check if the following div should be replaced with a component*/}
                <div className={'tasksContainer'}>
                {
                    this.state.tasksProject.map(item =>
                        <Task key={item.id} data={item}></Task>
                    )
                }                
                </div>
            </div>       
        )
    }
}

export default Project;