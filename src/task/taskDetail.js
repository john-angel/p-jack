import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCalendarAlt, faStickyNote } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faChevronRight, faCircle as faSolidCircle} from '@fortawesome/free-solid-svg-icons'
import {completeStatus,getTextFromStatus} from '../utils/status';

class TaskDetail extends Component{

    onCheckIconClick = () => {        
        this.props.onTaskMarked(this.props.data);       
    }
    
    onClose = () => this.props.onClose()

    render(){
        let statusIcon = this.props.data.status === completeStatus ? faCheckCircle : faCircle;
        let descriptionDecoration = this.props.data.status === completeStatus ? 'line-through' : 'none' ;
        return(
            <div className={'taskDetail'}>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={statusIcon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                    <textarea style={{textDecoration:descriptionDecoration}} value={this.props.data.name}></textarea>
                </div>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={faCalendarAlt}></FontAwesomeIcon>
                    <p>{this.props.data.due}</p>
                </div>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={faSolidCircle}></FontAwesomeIcon>
                    <p>{getTextFromStatus(this.props.data.status)}</p>
                </div>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={faStickyNote}></FontAwesomeIcon>
                    <textarea value={this.props.data.comments}></textarea>
                </div>               
                <FontAwesomeIcon id={'closeDetailIcon'} icon={faChevronRight} style={{fontSize:'1em'}} onClick={this.onClose}></FontAwesomeIcon>
            </div>
        )
    }
}

export default TaskDetail;