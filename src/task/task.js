import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faPlus} from '@fortawesome/free-solid-svg-icons';
import {completeStatus} from '../utils/status';

class Task extends Component {

    constructor(props){
        super(props);
        this.state = {
            checkIcon: faPlus,
            value: '', 
    }
    }

    onCheckIconClick = () => {
        if(this.props.data !== null){
            this.props.onTaskMarked(this.props.data.id); 
        }            
    }

    onNameClick = () => {
        if(this.props.data !== null){
            this.props.onSelected(this.props.data);
        }
    }
      
    onNameChange = (event) => {
        event.persist();
        
        if(this.props.data !== null){
            this.props.onNameChange(this.props.data.id,event.target.value);
        }else{
            this.setState({
                checkIcon:faCircle, 
                value:event.target.value 
            });
        }
    }

    render(){
        
        const checkIcon = this.props.data !== null ? this.props.data.status === completeStatus ? faCheckCircle : faCircle : this.state.checkIcon;
        const descriptionDecoration = this.props.data !== null ? this.props.data.status === completeStatus ? 'line-through' : 'none' : 'none';
        const placeholder = this.props.data !== null ? '' : 'Add task...';
        const value = this.props.data !== null ? this.props.data.name : this.state.value;

        return (
            <div className={'taskItem'}>
                <FontAwesomeIcon className={'taskCheckIcon'} icon={checkIcon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                <textarea className={'taskDescription'} maxLength={'100'} rows={'2'} placeholder={placeholder} value={value} style={{textDecoration:descriptionDecoration}} onClick={this.onNameClick} onChange={this.onNameChange}></textarea>                
            </div>
                           
        )
    }
}

export default Task;