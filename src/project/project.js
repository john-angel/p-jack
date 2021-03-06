import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {tasks} from '../utils/testData';
import {backlog, inProgress, done} from '../utils/board';
import Search from '../search/search';
import ProjectDetail from './projectDetail';
import BacklogInfo from '../backlog/backlogInfo';
import InProgressInfo from '../inProgress/inProgressInfo';
import DoneInfo from '../done/doneInfo';
import TaskContainer from '../task/taskContainer';
import RevenueContainer from '../revenue/revenueContainer';

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

    render(){
        return(
            <React.Fragment>                
                <section className='projectContainer'>
                    <Search placeholder='Search tasks...'></Search>
                    <ProjectDetail projectId={this.state.id}></ProjectDetail>                    
                    <BacklogInfo tasks={this.state.backlogTasks} ></BacklogInfo>
                    <InProgressInfo tasks={this.state.inProgressTasks}></InProgressInfo>
                    <DoneInfo tasks={this.state.doneTasks}></DoneInfo>
                    
                    {/*  /*The following elements will be updated progressively to match the Wireframe               
                    {                       
                        this.props.location.state.item === 'tasks' ?
                        <TaskContainer projectId={this.state.id}></TaskContainer> :
                        <RevenueContainer projectId={this.state.id}></RevenueContainer>
                    }
                    */}
                </section>
            </React.Fragment>            
        )
    }
}
export default withRouter(Project);