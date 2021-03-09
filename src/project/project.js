import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {tasks} from '../utils/testData';
import {backlog, inProgress, done} from '../utils/board';
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

    onDragStart = (event,data,board) => {
        event.dataTransfer.setData('application/taskdata',data);
        event.dataTransfer.effectAllowed = 'move';     
    }

    onDragEnd = (event, board) => {        
        if(event.dataTransfer.dropEffect === 'move'){
            const taskData = JSON.parse(event.dataTransfer.getData('application/taskdata'));
            console.info(`onDragEnd from board ${board}. Data moved: ${JSON.stringify(taskData)}`);
            console.info('Backlog tasks:', this.state.backlogTasks);
        }
    }

    onDragOver = (event,board) => {        
        if(event.dataTransfer.types.includes('application/taskdata')){
            if(event.dataTransfer.effectAllowed === 'move'){
               event.preventDefault();
            }
        }
    }

    onDragEnter = (event,board) => {
        
        if(event.dataTransfer.types.includes('application/taskdata')){
            if(event.dataTransfer.effectAllowed === 'move'){
               event.dataTransfer.dropEffect = 'move';
                event.preventDefault();
            }
        }
    }

    onDrop = (event,board) => {
        
        if(event.dataTransfer.types.includes('application/taskdata')){
            if(event.dataTransfer.effectAllowed === 'move'){                
                const taskData = JSON.parse(event.dataTransfer.getData('application/taskdata'));
                console.info(`Task dropped to board ${board}. Data: ${JSON.stringify(taskData)}`);
                event.dataTransfer.dropEffect = 'move';
                event.preventDefault();
                this.updateBoardTasks(taskData,board);            
            }
        }
    }

    updateBoardTasks =(task,board) => {
        switch (board) {
            case backlog:
                this.setState(prevState => ({backlogTasks: prevState.backlogTasks.concat([task])}));
                break;
            case inProgress:
                this.setState(prevState => ({inProgressTasks: prevState.inProgressTasks.concat([task])}));
                break;
            case done:
                this.setState(prevState => ({doneTasks: prevState.doneTasks.concat([task])}));
                break;
            default:
                break;
        }
    }


    render(){
        return(
            <React.Fragment>                
                <section className='projectContainer'>
                    <Search placeholder='Search tasks...' onSearchEvent={this.onSearchEvent}></Search>
                    <ProjectDetail projectId={this.state.id}></ProjectDetail>                    
                    <BacklogInfo tasks={this.state.backlogTasks} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}></BacklogInfo>
                    <InProgressInfo tasks={this.state.inProgressTasks} onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDrop={this.onDrop}></InProgressInfo>
                    <DoneInfo tasks={this.state.doneTasks}></DoneInfo>                   
                </section>
            </React.Fragment>            
        )
    }
}
export default withRouter(Project);