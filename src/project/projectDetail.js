import React,{Component} from 'react';
import {projects} from '../utils/testData'
import {getTextFromStatus} from '../utils/status'

class ProjectDetail extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            name: projects[this.props.projectId].name,
            description: projects[this.props.projectId].description,
            start: projects[this.props.projectId].start,
            plannedEnd: projects[this.props.projectId].plannedEnd,
            actualEnd: projects[this.props.projectId].actualEnd,
            status: getTextFromStatus(projects[this.props.projectId].status)
        };
    }

    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.description}</p>
                <p>{this.state.start}</p>
                <p>{this.state.plannedEnd}</p>
                <p>{this.state.actualEnd}</p>
                <p>{this.state.status}</p>
            </div>
        )
    }
}

export default ProjectDetail;