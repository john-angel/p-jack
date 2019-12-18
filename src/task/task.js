import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faPlus} from '@fortawesome/free-solid-svg-icons';
import {completeStatus} from '../utils/status';

class Task extends Component {

    constructor(props){
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            checkIcon: faPlus,
            value: '', 
    }
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
        
        if(this.props.data !== null){
            this.props.onNameChange(this.props.data.id,event.target.value);
        }else{//TODO:This has to be enabled for projects that already have tasks.
            this.setState({
                checkIcon:faCircle, 
                value:event.target.value 
            });
        }
    }

    onKeyUp = (event) => {
        event.persist();
        
        if(event.keyCode === 13){            
            this.inputRef.current.blur();
            //TODO:The event has to be fired for projects that already have tasks
            if(this.props.data === null){
                this.props.onNewTask(event.target.value);
            }            
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
                <input className={'taskDescription'} type={'text'} ref={this.inputRef} maxLength={'100'} placeholder={placeholder} value={value} style={{textDecoration:descriptionDecoration}} onClick={this.onNameClick} onChange={this.onNameChange} onKeyUp={this.onKeyUp}></input>                
            </div>
                           
        )
    }
}

export default Task;