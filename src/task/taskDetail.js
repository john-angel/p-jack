import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCalendarAlt, faStickyNote } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faChevronRight, faCircle as faSolidCircle} from '@fortawesome/free-solid-svg-icons'
import {notStartedStatus,onHoldStatus,onTrackStatus,delayedStatus,atRiskStatus,completeStatus,getTextFromStatus} from '../utils/status';
import {getColorFromStatus} from '../utils/colors';

class TaskDetail extends Component{

    onCheckIconClick = () => {
        this.props.onTaskMarked(this.props.data.id,this.props.data.status);
    }

    onNameChange = (event) => {
        event.persist();
        this.props.onNameChange(this.props.data.id,event.target.value);        
    }

    onDueDateChange = (event) => {
        event.persist();
        this.props.onDueDateChange(this.props.data.id,event.target.value);   
    }

    onStatusChange = (event) => {
        event.persist();
        this.props.onStatusChange(this.props.data.id,event.target.value);        
    }

    onCommentsChange = (event) => {
        event.persist();
        this.props.onCommentsChange(this.props.data.id,event.target.value);
    }

    onClose = () => this.props.onClose()

    render(){
        let statusIcon = this.props.data.status === completeStatus ? faCheckCircle : faCircle;
        let nameDecoration = this.props.data.status === completeStatus ? 'line-through' : 'none';
        let statusColor = getColorFromStatus(this.props.data.status);
        return(
            <div className={'taskDetail'}>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={statusIcon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                    <textarea id={'taskName'} style={{textDecoration:nameDecoration}} value={this.props.data.name} onChange={this.onNameChange}></textarea>
                </div>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={faCalendarAlt}></FontAwesomeIcon>
                    <input type={'date'} className={'dueDateDetail'} value={this.props.data.due} name={'dueDate'} onChange={this.onDueDateChange}></input>
                </div>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={faSolidCircle} style={{color: statusColor}}></FontAwesomeIcon>
                    <select className={'statusDataListDetail'} value={this.props.data.status} onChange={this.onStatusChange}>
                        <option value={notStartedStatus}>{getTextFromStatus(notStartedStatus)}</option>
                        <option value={onHoldStatus}>{getTextFromStatus(onHoldStatus)}</option>
                        <option value={onTrackStatus}>{getTextFromStatus(onTrackStatus)}</option>
                        <option value={delayedStatus}>{getTextFromStatus(delayedStatus)}</option>
                        <option value={atRiskStatus}>{getTextFromStatus(atRiskStatus)}</option>
                        <option value={completeStatus}>{getTextFromStatus(completeStatus)}</option>
                    </select>
                </div>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={faStickyNote}></FontAwesomeIcon>
                    <textarea id={'taskComments'} value={this.props.data.comments} onChange={this.onCommentsChange}></textarea>
                </div>               
                <FontAwesomeIcon id={'closeDetailIcon'} icon={faChevronRight} style={{fontSize:'1em'}} onClick={this.onClose}></FontAwesomeIcon>
            </div>
        )
    }
}

export default TaskDetail;