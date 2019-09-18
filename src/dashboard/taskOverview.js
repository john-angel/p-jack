import React, {Component} from 'react';

class TaskOverview extends Component{
    render(){
        return (
            <ul className={'taskOverviewList'}>
                <li>Invoice project</li>
                <li>Close project</li>
            </ul>
        )
    }
}

export default TaskOverview;