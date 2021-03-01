import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram,faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt} from '@fortawesome/free-regular-svg-icons'
import {projects} from '../utils/testData'
import {notStartedStatus,onHoldStatus,onTrackStatus,delayedStatus,atRiskStatus,completeStatus,getTextFromStatus} from '../utils/status'
import {getColorFromStatus,infoColor,projectDateColor} from '../utils/colors'

class ProjectDetail extends Component{

    constructor(props){
        super(props);
              
        this.state = {
            name: projects[this.props.projectId].name,
            description: projects[this.props.projectId].description,
            start: projects[this.props.projectId].startDate,
            due: projects[this.props.projectId].dueDate,           
            status: projects[this.props.projectId].status,
            statusColor: getColorFromStatus(projects[this.props.projectId].status)
        };
    }

    onChange = (event) => {
        event.persist();
        this.setState({description:event.target.value})
    }

    onStartDateChange = (event) => {
        event.persist();
        this.setState({start:event.target.value});
    }

    onDueDateChange = (event) => {
        event.persist();
        this.setState({due:event.target.value});        
    }

    onStatusChange = (event) => {
        event.persist();
        this.setState({
            status:event.target.value,
            statusColor:getColorFromStatus(event.target.value)
        });
    }
    
    render(){
        return (
            <div className='projectDetailContainer'>
                <h1 className='projectDetailTitle'><FontAwesomeIcon icon={faProjectDiagram} style={{ color: infoColor }}></FontAwesomeIcon> {this.state.name}</h1>
                <textarea className='projectDetailDescription' maxLength={'125'} rows={'2'} value={this.state.description} onChange={this.onChange}></textarea>
                <section className='projectDetailDates'>
                    <label className='projectDetailStartLabel' htmlFor={'projectDetailStartValue'}>Start: </label>
                    <input type={'date'} id={'projectDetailStartValue'} value={this.state.start} name={'projectDetailStartLabel'} onChange={this.onStartDateChange}></input>
                    <label className='projectDetailFinishLabel' htmlFor={'projectDetailFinishValue'}>Finish: </label>
                    <input type={'date'} id={'projectDetailFinishValue'} value={this.state.due} name={'projectDetailFinishLabel'} onChange={this.onDueDateChange}></input>
                </section>
                {/*The following elements will be updated progressively to match the Wireframe
                    <div id={'projectInfo'}>
                    
                    <textarea id={'pjDescriptionText'} maxLength={'125'} rows={'2'} value={this.state.description} onChange={this.onChange}></textarea>
                    <details id={'projectDate'}>
                        <summary><FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: '1em', color: projectDateColor, marginRight: '4px' }}></FontAwesomeIcon>Dates</summary>
                        <p><label htmlFor={'startDate'}>Start: </label><input type={'date'} id={'startDate'} value={this.state.start} name={'startDate'} onChange={this.onStartDateChange}></input></p>
                        <p><label htmlFor={'dueDate'}>Due: </label><input type={'date'} id={'dueDate'} value={this.state.due} name={'dueDate'} onChange={this.onDueDateChange}></input></p>                        
                    </details>
                    <section id={'projectStatus'}>
                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.8em', color: this.state.statusColor, marginRight: '4px'}}></FontAwesomeIcon>
                        <select id={'statusDataList'} value={this.state.status} onChange={this.onStatusChange}>
                            <option value={notStartedStatus}>{getTextFromStatus(notStartedStatus)}</option>
                            <option value={onHoldStatus}>{getTextFromStatus(onHoldStatus)}</option>
                            <option value={onTrackStatus}>{getTextFromStatus(onTrackStatus)}</option>
                            <option value={delayedStatus}>{getTextFromStatus(delayedStatus)}</option>
                            <option value={atRiskStatus}>{getTextFromStatus(atRiskStatus)}</option>
                            <option value={completeStatus}>{getTextFromStatus(completeStatus)}</option>
                        </select>
                    </section>
                </div>

                */}                
            </div>

        )
    }
}

export default ProjectDetail;