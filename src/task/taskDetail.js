import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCalendarAlt, faStickyNote } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faChevronRight, faCircle as faSolidCircle} from '@fortawesome/free-solid-svg-icons'
import {completeStatus,getTextFromStatus} from '../utils/status';

class TaskDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:this.props.data.name,
            comments:this.props.data.comments
        };
    }

    onCheckIconClick = () => {
        //TODO:Clone props.data and pass it with the new values for due date, comments, status and name.        
        this.props.onTaskMarked(this.props.data);     
    }

    onNameChange = (event) => {
        event.persist();
        this.setState({name:event.target.value});
        //TODO:Unify details change in one event passing the task object updated.
        //this.props.onDescriptionChange(event.target.value);
    }

    onCommentsChange = (event) => {
        event.persist();
        this.setState({comments:event.target.value});
        //TODO:Unify details change in one event passing the task object updated.        
    }

    onFocus = (event) => {
        event.persist();
        console.log('onFocus', event);
    }

    onClose = () => this.props.onClose()

    render(){
        let statusIcon = this.props.data.status === completeStatus ? faCheckCircle : faCircle;
        let nameDecoration = this.props.data.status === completeStatus ? 'line-through' : 'none' ;
        return(
            <div className={'taskDetail'}>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={statusIcon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                    <textarea id={'taskName'} style={{textDecoration:nameDecoration}} value={this.state.name} onChange={this.onNameChange} onFocus={this.onFocus}></textarea>
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
                    <textarea id={'taskComments'} value={this.state.comments} onChange={this.onCommentsChange} onFocus={this.onFocus}></textarea>
                </div>               
                <FontAwesomeIcon id={'closeDetailIcon'} icon={faChevronRight} style={{fontSize:'1em'}} onClick={this.onClose}></FontAwesomeIcon>
            </div>
        )
    }
}

export default TaskDetail;