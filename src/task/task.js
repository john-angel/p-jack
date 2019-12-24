import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faPlus} from '@fortawesome/free-solid-svg-icons';
import {completeStatus} from '../utils/status';

class Task extends Component {

    constructor(props){
        super(props);
        this.inputRef = React.createRef();        
    }

    onCheckIconClick = () => {
        if(this.props.data !== null){
            this.props.onTaskMarked(this.props.data.id,this.props.data.status); 
        }            
    }

    onNameClick = () => {
        if(this.props.data !== null){
            this.props.onSelected(this.props.data);
        }
    }
      
    onNameChange = (event) => {
        event.persist();
        this.props.onNameChange(this.props.data.id,event.target.value);
    }

    onKeyUp = (event) => {
        event.persist();
        
        if(event.keyCode === 13){            
            this.inputRef.current.blur();       
            if(this.props.data.id === 0){
                this.props.onNewTask(this.props.data);
            }        
        }
    }

    render(){
        
        const checkIcon = this.props.data.id !== 0 ? this.props.data.status === completeStatus ? faCheckCircle : faCircle : faPlus;
        const descriptionDecoration = this.props.data.status === completeStatus ? 'line-through' : 'none';
        const placeholder = this.props.data.id !== 0 ? '' : 'Add task...';
        const value = this.props.data.name;

        return (
            <div className={'taskItem'}>
                <FontAwesomeIcon className={'taskCheckIcon'} icon={checkIcon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                <input className={'taskDescription'} type={'text'} ref={this.inputRef} maxLength={'100'} placeholder={placeholder} value={value} style={{textDecoration:descriptionDecoration}} onClick={this.onNameClick} onChange={this.onNameChange} onKeyUp={this.onKeyUp}></input>                
            </div>                           
        )
    }
}

export default Task;