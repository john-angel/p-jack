import React, {Component} from 'react';
import DashboardItem from './dashboardItem'
import TaskStatusChart from './taskStatusChart';
import RevenueChart from './revenueChart';
import RevenueTotal from './revenueTotal'
import {projects,tasks,revenue} from '../utils/testData';
import TaskOverview from './taskOverview';

class Dashboard extends Component{

    constructor(props){
      super(props);
      
      this.state = {
        projects: Object.keys(projects).map(item => projects[item]),
        projectActive: 0
      }
    }
   
    //TODO: Check how Observer pattern is implemented.
    onProjectActive = (id) => {
      this.setState({projectActive:id})
    }

    
    render(){
        return(
          <React.Fragment>
            <div className={"projectsContainer"}>
            {
                this.state.projects.map(project => (                
                  project.id === this.state.projectActive ?
                    <DashboardItem key={project.id} title={project.name}>
                      <div className={'taskInfoDashboard'}>
                        <TaskStatusChart divId={'taskStatusChart' + project.id} tasks={tasks[project.id]}></TaskStatusChart>
                        <TaskOverview divId={'taskOverview' + project.id} tasks={tasks[project.id]}></TaskOverview>
                      </div>
                      <div className={'revenueInfoDashboard'}>
                        <RevenueChart divId={'revenueChart' + project.id} revenue={revenue[project.id]}></RevenueChart>
                        <RevenueTotal divId={'revenueTotal' + project.id} revenue={revenue[project.id]}></RevenueTotal>
                      </div>
                    </DashboardItem>:
                    <DashboardItem key={project.id} title={project.name}>
                      <div className={'taskInfoDashboard'}>
                        <TaskStatusChart divId={'taskStatusChart'+project.id} tasks={tasks[project.id]}></TaskStatusChart>
                        <TaskOverview divId={'taskOverview' + project.id} tasks={tasks[project.id]}></TaskOverview>
                      </div>
                      <div className={'revenueInfoDashboard'}>
                        <RevenueChart divId={'revenueChart' + project.id} revenue={revenue[project.id]}></RevenueChart>
                        <RevenueTotal divId={'revenueTotal' + project.id} revenue={revenue[project.id]}></RevenueTotal>
                      </div>
                    </DashboardItem>
                ))                
            }             
            </div>
          </React.Fragment>
                       
        )
    }
}

export default Dashboard;