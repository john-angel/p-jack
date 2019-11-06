import React, {Component} from 'react';
import ProjectDetail from './projectDetail';
import TaskContainer from '../task/taskContainer';

class Project extends Component{

    render(){
        return(
            <div className={'project'}>
                <ProjectDetail projectId={this.props.id}>
                </ProjectDetail>
                <TaskContainer projectId={this.props.id}></TaskContainer>                
            </div>       
        )
    }
}

export default Project;