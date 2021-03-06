import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {tasks} from '../utils/testData';
import {backlog, inProgress} from '../utils/board';
import Search from '../search/search';
import ProjectDetail from './projectDetail';
import BacklogInfo from '../backlog/backlogInfo';
import InProgressInfo from '../inProgress/inProgressInfo';
import DoneInfo from '../done/doneInfo';

class Project extends Component{

    constructor(props){
        super(props);
        
        const { id } = this.props.match.params;
        
        this.state = {
            id: id,
            backlogTasks: [],
            inProgressTasks: [],
            doneTasks: []
        };

        let taskObj = tasks[id];
        
        if(typeof taskObj !== 'undefined'){
            Object.keys(taskObj).map(id => {
                const boardList = taskObj[id].boardList;
                boardList === backlog ? this.state.backlogTasks.push(taskObj[id]) : boardList === inProgress ? this.state.inProgressTasks.push(taskObj[id]) : this.state.doneTasks.push(taskObj[id]);
                return 0;
            })
        }       
    }

    onSearchEvent = (text) => console.log('TODO: Search task', text);

    render(){
        return(
            <React.Fragment>                
                <section className='projectContainer'>
                    <Search placeholder='Search tasks...' onSearchEvent={this.onSearchEvent}></Search>
                    <ProjectDetail projectId={this.state.id}></ProjectDetail>                    
                    <BacklogInfo tasks={this.state.backlogTasks} ></BacklogInfo>
                    <InProgressInfo tasks={this.state.inProgressTasks}></InProgressInfo>
                    <DoneInfo tasks={this.state.doneTasks}></DoneInfo>                   
                </section>
            </React.Fragment>            
        )
    }
}
export default withRouter(Project);