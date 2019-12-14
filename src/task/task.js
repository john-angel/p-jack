import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {completeStatus} from '../utils/status';

class Task extends Component {

    onCheckIconClick = () => {  
        this.props.onTaskMarked(this.props.data.id);        
    }

    onNameClick = () => {
        this.props.onSelected(this.props.data);
    }
      
    onNameChange = (event) => {
        event.persist();
        this.props.onNameChange(this.props.data.id,event.target.value);
    }

    render(){

        let statusIcon = this.props.data.status === completeStatus ? faCheckCircle : faCircle;
        let descriptionDecoration = this.props.data.status === completeStatus ? 'line-through' : 'none' ;
        return (
            <div className={'taskItem'}>
                <FontAwesomeIcon className={'taskCheckIcon'} icon={statusIcon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                <textarea className={'taskDescription'} maxLength={'100'} rows={'2'} value={this.props.data.name} style={{textDecoration:descriptionDecoration}} onClick={this.onNameClick} onChange={this.onNameChange}></textarea>                
            </div>
                           
        )
    }
}

export default Task;