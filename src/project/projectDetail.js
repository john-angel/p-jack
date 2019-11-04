import React,{Component} from 'react';
import {projects} from '../utils/testData'
import {getTextFromStatus} from '../utils/status'

class ProjectDetail extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            name: projects[this.props.id].name,
            description: projects[this.props.id].description,
            start: projects[this.props.id].start,
            plannedEnd: projects[this.props.id].plannedEnd,
            actualEnd: projects[this.props.id].actualEnd,
            status: getTextFromStatus(projects[this.props.id].status)
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