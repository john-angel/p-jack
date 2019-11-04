import React, {Component} from 'react';
import {getTextFromStatus} from '../utils/status';

class TaskDetail extends Component{
    render(){
        return(
            <div>
                <p>{this.props.data.name}</p>
                <p>{this.props.data.plannedEnd}</p>
                <p>{this.props.data.actualEnd}</p>
                <p>{getTextFromStatus(this.props.data.status)}</p>
                <p>{this.props.data.comments}</p>
            </div>
        )
    }
}

export default TaskDetail;