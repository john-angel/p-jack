import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {getTextFromStatus} from '../utils/status';

class TaskDetail extends Component{
    
    onClose = () => this.props.onClose()

    render(){
        return(
            <div className={'taskDetail'}>
                <p>{this.props.data.name}</p>
                <p>{this.props.data.due}</p>
                <p>{getTextFromStatus(this.props.data.status)}</p>
                <p>{this.props.data.comments}</p>
                <FontAwesomeIcon id={'closeDetailIcon'} icon={faChevronRight} style={{fontSize:'1em'}} onClick={this.onClose}></FontAwesomeIcon>
            </div>
        )
    }
}

export default TaskDetail;