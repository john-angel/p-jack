import React, {Component} from 'react';

class TaskOverview extends Component{
    render(){
        return (
            <ul className={'taskOverviewList'}>
                <li><a href='/tasks' type='text/html'>Current or due task that can be long</a></li>
                <li><a href='/tasks' type='text/html'>Next task</a></li>
                <li><a href='/tasks' type='text/html'>{15} to go</a></li>                
            </ul>
        )
    }
}

export default TaskOverview;