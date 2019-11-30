import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCalendarAlt,  } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faChevronRight, faCircle as faSolidCircle} from '@fortawesome/free-solid-svg-icons'
import {getTextFromStatus} from '../utils/status';

class TaskDetail extends Component{

    constructor(props){
        super(props);

        this.state = {  
            descriptionTextDecoration: 'none',          
            icon: faCircle
        };
    }

    onCheckIconClick = () => {        
        this.setState({
            icon: this.state.icon === faCircle ? faCheckCircle : faCircle,
            descriptionTextDecoration: this.state.descriptionTextDecoration === 'none' ? 'line-through' : 'none'
        })
    }
    
    onClose = () => this.props.onClose()

    render(){
        return(
            <div className={'taskDetail'}>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={this.state.icon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                    <textarea style={{textDecoration:this.state.descriptionTextDecoration}}>{this.props.data.name}</textarea>
                </div>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={faCalendarAlt}></FontAwesomeIcon>
                    <p>{this.props.data.due}</p>
                </div>
                <div className={'taskDetailItem'}>
                    <FontAwesomeIcon className={'taskDetailIcon'} icon={faSolidCircle}></FontAwesomeIcon>
                    <p>{getTextFromStatus(this.props.data.status)}</p>
                </div>
                <p>{this.props.data.comments}</p>
                <FontAwesomeIcon id={'closeDetailIcon'} icon={faChevronRight} style={{fontSize:'1em'}} onClick={this.onClose}></FontAwesomeIcon>
            </div>
        )
    }
}

export default TaskDetail;