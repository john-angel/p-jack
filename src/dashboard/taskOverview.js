import React, {Component} from 'react';

class TaskOverview extends Component{
    render(){
        return (
            <ul className={'taskOverviewList'}>
                <li><a href='a'>Current task that can be long</a></li>
                <li><a href='b'>Next task</a></li>                
            </ul>
        )
    }
}

export default TaskOverview;