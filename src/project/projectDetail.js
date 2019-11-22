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

    onChange = (event) => {
        event.persist();
        this.setState({description:event.target.value})
    }

    render(){
        return (
            <div id={'projectDetail'}>
                <h1 style={{ fontWeight:'normal'}}><FontAwesomeIcon icon={faProjectDiagram} style={{ color: projectDiagramColor }}></FontAwesomeIcon> {this.state.name}</h1>
                <div id={'projectInfo'}>
                    <FontAwesomeIcon id={'pjDescriptionIcon'} icon={faInfoCircle} style={{ fontSize: '1.2em', color: projectInfoColor}}></FontAwesomeIcon>
                    <textarea id={'pjDescriptionText'} maxLength={'125'} rows={'2'} value={this.state.description} onChange={this.onChange}></textarea>
                    <details id={'projectDate'}>
                        <summary><FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: '1em', color: projectDateColor, marginRight: '4px' }}></FontAwesomeIcon>Dates</summary>
                        <p>Start: {this.state.start}</p>
                        <p>Due: {this.state.plannedEnd}</p>
                        {
                            this.state.actualEnd.length ? <p>Actual finish: {this.state.actualEnd}</p> : null
                        }
                    </details>
                    <section id={'projectStatus'}>
                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.8em', color: this.state.statusColor, marginRight: '4px'}}></FontAwesomeIcon>
                            {this.state.status}
                    </section>
                </div>
            </div>

        )
    }
}

export default ProjectDetail;