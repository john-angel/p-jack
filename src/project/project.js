import React, {Component} from 'react';
import ProjectDetail from './projectDetail';
import Tasks from '../task/task';

class Project extends Component{

    render(){
        return(
            <div className={'project'}>
                <ProjectDetail>
                </ProjectDetail>
                <Tasks></Tasks>
            </div>       
        )
    }
}

export default Project;