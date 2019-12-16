import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faPlus} from '@fortawesome/free-solid-svg-icons';
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
        
        const checkIcon = this.props.data !== null ? this.props.data.status === completeStatus ? faCheckCircle : faCircle : faPlus;
        const descriptionDecoration = this.props.data !== null ? this.props.data.status === completeStatus ? 'line-through' : 'none' : 'none';
        const value = this.props.data !== null ? this.props.data.name : 'Add task';

        return (
            <div className={'taskItem'}>
                <FontAwesomeIcon className={'taskCheckIcon'} icon={checkIcon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                <textarea className={'taskDescription'} maxLength={'100'} rows={'2'} value={value} style={{textDecoration:descriptionDecoration}} onClick={this.onNameClick} onChange={this.onNameChange}></textarea>                
            </div>
                           
        )
    }
}

export default Task;