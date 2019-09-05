import React, {Component} from 'react';
import DashboardItemContainer from './dashboardItemContainer'
import Project from '../project/projectComponent';
import TaskStatusChart from './taskStatusChart';
import RevenueChart from './revenueChart';
import {projects} from '../project/testData';

class Dashboard extends Component{

    

    state = {
      projectActive: 0
    }
    //TODO: Check how Observer pattern is implemented.
    onProjectActive = (id) => {
      this.setState({projectActive:id})
    }

    render(){
        return(
          <React.Fragment>
            <div className={'dashboardTitle'}>
            <h1>Dashboard</h1>
          </div>
            <div className={"projectsContainer"}>
            {
                projects.map(project => (
                  
                    
                      project.id === this.state.projectActive ?
                      <DashboardItemContainer key={project.id} title={project.name}>
                        <TaskStatusChart divId={'taskStatusChart'+project.id}></TaskStatusChart>
                        <RevenueChart divId={'revenueChart'+project.id}></RevenueChart>
                      </DashboardItemContainer> :
                      <DashboardItemContainer key={project.id} title={project.name}>
                        <TaskStatusChart divId={'taskStatusChart'+project.id}></TaskStatusChart>
                        <RevenueChart divId={'revenueChart'+project.id}></RevenueChart>
                      </DashboardItemContainer>
                ))
            }             
            </div>
          </React.Fragment>
                       
        )
    }
}

export default Dashboard;