import React, {Component} from 'react';

class TaskOverview extends Component{
    render(){
        return (
            <ul className={'taskOverviewList'}>
                <li><a href='/tasks' type='text/html' style={{color:'#FF8080'}}>Current or due task that can be long.</a></li>
                <li><a href='/tasks' type='text/html' style={{color:'#7ED3B2'}}>Next task.</a></li>
                <li><a href='/tasks' type='text/html' style={{fontSize:'2em', color:'black'}}>{15}</a> to go.</li>                
            </ul>
        )
    }
}

export default TaskOverview;