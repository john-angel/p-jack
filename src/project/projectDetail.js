import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram,faInfoCircle,faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt} from '@fortawesome/free-regular-svg-icons'
import {projects} from '../utils/testData'
import {getTextFromStatus} from '../utils/status'
import {getColorFromStatus,projectDiagramColor,projectInfoColor,projectDateColor} from '../utils/colors'

class ProjectDetail extends Component{

    constructor(props){
        super(props);
              
        this.state = {
            name: projects[this.props.projectId].name,
            description: projects[this.props.projectId].description,
            start: projects[this.props.projectId].start,
            plannedEnd: projects[this.props.projectId].plannedEnd,
            actualEnd: projects[this.props.projectId].actualEnd,
            status: getTextFromStatus(projects[this.props.projectId].status),
            statusColor: getColorFromStatus(projects[this.props.projectId].status)
        };
    }

    render(){
        return(
            <div className={'projectDetail'}>
                <p><FontAwesomeIcon icon={faProjectDiagram} style={{fontSize:'1em', color:projectDiagramColor}}></FontAwesomeIcon> {this.state.name}</p>
                <p><FontAwesomeIcon icon={faInfoCircle} style={{fontSize:'0.8em', color:projectInfoColor}}></FontAwesomeIcon> {this.state.description}</p>
                <details>
                    <summary><FontAwesomeIcon icon={faCalendarAlt} style={{fontSize:'1em', color:projectDateColor}}></FontAwesomeIcon> Dates</summary>
                    <p>Start: {this.state.start}</p>
                    <p>Planned finish: {this.state.plannedEnd}</p>
                    {
                        this.state.actualEnd.length ? <p>Actual finish: {this.state.actualEnd}</p> : null
                    }
                </details>               
                <p><FontAwesomeIcon icon={faCircle} style={{fontSize:'0.8em', color:this.state.statusColor}}></FontAwesomeIcon> {this.state.status}</p>
            </div>
        )
    }
}

export default ProjectDetail;