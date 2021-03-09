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
            this.removeTaskFromBoard(taskData,board);            
        }
    }

    onDragEnter = (event,board) => {
        if(event.dataTransfer.types.includes('application/taskdata')){
            if(event.dataTransfer.effectAllowed === 'move'){
                event.preventDefault();
                event.dataTransfer.dropEffect = 'move';               
            }
        }
    }

    onDragOver = (event,board) => {        
        if(event.dataTransfer.types.includes('application/taskdata')){
            if(event.dataTransfer.effectAllowed === 'move'){
               event.preventDefault();
            }
        }
    }

    
    onDrop = (event,board) => {
        
        if(event.dataTransfer.types.includes('application/taskdata')){
            if(event.dataTransfer.effectAllowed === 'move'){                
                event.preventDefault();
                const taskData = JSON.parse(event.dataTransfer.getData('application/taskdata'));
                event.dataTransfer.dropEffect = 'move';                
                this.addTaskToBoard(taskData,board);            
            }
        }
    }

    removeTaskFromBoard = (task,board) => {
        switch (board) {
            case backlog:
                this.setState(prevState => ({backlogTasks: prevState.backlogTasks.filter(taskItem => taskItem.id !== task.id)}));
                break;
            case inProgress:
                this.setState(prevState => ({inProgressTasks: prevState.inProgressTasks.filter(taskItem => taskItem.id !== task.id)}));
                break;
            case done:
                this.setState(prevState => ({doneTasks: prevState.doneTasks.filter(taskItem => taskItem.id !== task.id)}));
                break;
            default:
                break;
        }
    }
    
    addTaskToBoard = (task,board) => {
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
                    <BacklogInfo tasks={this.state.backlogTasks} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDrop={this.onDrop}></BacklogInfo>
                    <InProgressInfo tasks={this.state.inProgressTasks} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDrop={this.onDrop}></InProgressInfo>
                    <DoneInfo tasks={this.state.doneTasks} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDrop={this.onDrop}></DoneInfo>                   
                </section>
            </React.Fragment>            
        )
    }
}
export default withRouter(Project);