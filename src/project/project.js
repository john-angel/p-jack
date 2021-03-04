import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
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
            id: id
        };        
    }

    render(){
        return(
            <React.Fragment>                
                <section className='projectContainer'>
                    <Search placeholder='Search tasks...'></Search>
                    <ProjectDetail projectId={this.state.id}></ProjectDetail>                    
                    <BacklogInfo projectId={this.state.id} ></BacklogInfo>
                    <InProgressInfo></InProgressInfo>
                    <DoneInfo></DoneInfo>
                    
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