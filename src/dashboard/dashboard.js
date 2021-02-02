import React, {Component} from 'react';
import './dashboard.css';
import ProjectSummary from '../project/projectSummary';
import RevenueSummary from '../revenue/revenueSummary';
import DashboardItem from './dashboardItem'
import TaskStatusChart from './taskStatusChart';
import RevenueChart from './revenueChart';
import RevenueTotal from './revenueTotal'
import {projects,tasks,revenue} from '../utils/testData';
import TaskOverview from './taskOverview';

import Search from '../search/search';

class Dashboard extends Component{

    constructor(props){
      super(props);
      
      this.state = {
        projects: Object.keys(projects).map(item => projects[item]),
      }
    }  
   
    render(){
        return(
          <div className='dashBoardContainer'>
            <div className='dashboardSummary'>
              <Search></Search>            
              <ProjectSummary></ProjectSummary>
              <RevenueSummary></RevenueSummary>
            </div>
            <div className='dashboardDetails'>
            {
                this.state.projects.map(project => (
                    <DashboardItem key={project.id} title={project.name}>
                      <div className={'taskInfoDashboard'}>
                        <TaskStatusChart divId={'taskStatusChart' + project.id} projectId={project.id} tasks={tasks[project.id]}></TaskStatusChart>
                        <TaskOverview divId={'taskOverview' + project.id} tasks={tasks[project.id]}></TaskOverview>
                      </div>
                      <div className={'revenueInfoDashboard'}>
                        <RevenueChart divId={'revenueChart' + project.id} projectId={project.id} revenue={revenue[project.id]}></RevenueChart>
                        <RevenueTotal divId={'revenueTotal' + project.id} revenue={revenue[project.id]}></RevenueTotal>
                      </div>                                          
                    </DashboardItem>
                ))                
            }             
            </div>            
          </div>                       
        )
    }
}

export default Dashboard;