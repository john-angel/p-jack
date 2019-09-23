import React, {Component} from 'react';
import DashboardItemContainer from './dashboardItemContainer'
import TaskStatusChart from './taskStatusChart';
import RevenueChart from './revenueChart';
import RevenueTotal from './revenueTotal'
import {projects} from '../project/testData';
import TaskOverview from './taskOverview';

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
                        <div className={'taskInfoDashboard'}>
                          <TaskStatusChart divId={'taskStatusChart' + project.id}></TaskStatusChart>
                          <TaskOverview divId={'taskOverview' + project.id}></TaskOverview>
                        </div>
                        <div className={'revenueInfoDashboard'}>
                          <RevenueChart divId={'revenueChart'+project.id}></RevenueChart>
                          <RevenueTotal divId={'revenueTotal'+project.id}></RevenueTotal> 
                        </div>
                      </DashboardItemContainer> :
                      <DashboardItemContainer key={project.id} title={project.name}>
                        <div className={'taskInfoDashboard'}>
                          <TaskStatusChart divId={'taskStatusChart'+project.id}></TaskStatusChart>
                          <TaskOverview divId={'taskOverview' + project.id}></TaskOverview>
                        </div>                        
                        <div className={'revenueInfoDashboard'}>
                          <RevenueChart divId={'revenueChart'+project.id}></RevenueChart>
                          <RevenueTotal divId={'revenueTotal'+project.id}></RevenueTotal> 
                        </div>
                      </DashboardItemContainer>
                ))
            }             
            </div>
          </React.Fragment>
                       
        )
    }
}

export default Dashboard;