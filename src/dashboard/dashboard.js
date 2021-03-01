import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './dashboard.css';
import ProjectSummary from '../project/projectSummary';
import RevenueSummary from '../revenue/revenueSummary';
import DashboardItem from './dashboardItem'
import {getTextFromStatus} from '../utils/status';
import RevenueChart from './revenueChart';
import ProgressChart from './progressChart';
import {projects,tasks,revenue} from '../utils/testData';
import TaskOverview from './taskOverview';
import Search from '../search/search';

class Dashboard extends Component{

    constructor(props){
      super(props);
      
      this.state = {
        projects: Object.keys(projects).map(item => projects[item]),
        searchText:''
      }
    }  

    parseRevenue = (project) => {
      const revenue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation:'compact',                                        
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(project.revenue);

      return revenue;
    }

    parseFinishDate = (project) => {

      let dateArray = project.finishDate.split('-');      
      let month = Number(dateArray[1]) - 1;
      const date = new Date(dateArray[0], month, dateArray[2]);

      dateArray = date.toDateString().split(' ');

      return `${dateArray[2]} ${dateArray[1]} ${dateArray[3]}`;
    }

    onSearchEvent = (text) => {
      this.setState({searchText:text})
    }
  

    onClick = (projectId) => {
      this.props.history.push({
        pathname: `/project/${projectId}`,
        state: { item: 'tasks' }
      })
    }

    render(){

      return (
        <div className='dashBoardContainer'>
          <section className='dashboardSummary'>
            <Search placeholder='Search projects...' onSearchEvent={this.onSearchEvent}></Search>
            <ProjectSummary></ProjectSummary>
            <RevenueSummary></RevenueSummary>
          </section>
          <section className='dashboardDetails'>
            {
              this.state.projects.map(project => {
                return project.name.toLowerCase().includes(this.state.searchText.toLowerCase()) ?
                (
                  <DashboardItem key={project.id} title={project.name} onClickEvent={() => this.onClick(project.id)}>
                    <p className='dashboardProjectStatus'>Status: {getTextFromStatus(project.status)}</p>
                    <p className='dashboardProjectRevenue'>Revenue: {this.parseRevenue(project)}</p>
                    <p className='dashboardProjectFinishDate'>Finish date: {this.parseFinishDate(project)}</p>
                    <TaskOverview tasks={tasks[project.id]}></TaskOverview>
                    <RevenueChart divId={'revenueChart' + project.id} projectId={project.id} revenue={revenue[project.id]}></RevenueChart>
                    <ProgressChart tasksPercentage='20%' revenuePercentage='50%'></ProgressChart>
                  </DashboardItem>
                ):
                null
              })
            }
          </section>
        </div>
      )
    }
}

export default withRouter(Dashboard);