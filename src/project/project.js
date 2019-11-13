import React, {Component} from 'react';
import NavigationBar from '../navigation/navigationBar';
import ProjectDetail from './projectDetail';
import TaskContainer from '../task/taskContainer';

class Project extends Component{

    render(){
        return(
            <React.Fragment>
                <NavigationBar></NavigationBar>
                <div className={'project'}>
                    <ProjectDetail projectId={this.props.id}>
                    </ProjectDetail>
                    <TaskContainer projectId={this.props.id}></TaskContainer>
                </div>
            </React.Fragment>            
        )
    }
}

export default Project;