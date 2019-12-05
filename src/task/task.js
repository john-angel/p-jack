import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {completeStatus} from '../utils/status';

class Task extends Component {

    constructor(props){
        super(props);
       
        this.state = {
            name: this.props.data.name
        };
    }

    onCheckIconClick = () => {  
        this.props.onTaskMarked(this.props.data);        
    }

    onTaskDescriptionClick = () => {
        this.props.onSelected(this.props.data);
    }
      
    onTaskDescriptionChange = (event) => {
        event.persist();
        this.setState({name:event.target.value})
    }

    render(){
        let statusIcon = this.props.data.status === completeStatus ? faCheckCircle : faCircle;
        let descriptionDecoration = this.props.data.status === completeStatus ? 'line-through' : 'none' ;
        return (
            <div className={'taskItem'}>
                <FontAwesomeIcon className={'taskCheckIcon'} icon={statusIcon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                <textarea className={'taskDescription'} maxLength={'100'} rows={'2'} value={this.state.name} style={{textDecoration:descriptionDecoration}} onClick={this.onTaskDescriptionClick} onChange={this.onTaskDescriptionChange}></textarea>                
            </div>
                           
        )
    }
}

export default Task;