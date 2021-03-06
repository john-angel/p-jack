import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import './dashboard.css';
import ProjectSummary from '../project/projectSummary';
import RevenueSummary from '../revenue/revenueSummary';
import DashboardItem from './dashboardItem'
import {getTextFromStatus} from '../utils/status';
import RevenueChart from './revenueChart';
import ProgressChart from './progressChart';
import {projects,tasks,revenue} from '../utils/testData';
import parseRevenue from '../utils/revenue';
import TaskOverview from './taskOverview';
import Search from '../search/search';

function Dashboard(props){

  const [projectsArray] = useState(Object.keys(projects).map(item => projects[item]));
  const [searchText, setSearchText] = useState('');

  const parseFinishDate = (project) => {

    let dateArray = project.finishDate.split('-');
    let month = Number(dateArray[1]) - 1;
    const date = new Date(dateArray[0], month, dateArray[2]);

    dateArray = date.toDateString().split(' ');

    return `${dateArray[2]} ${dateArray[1]} ${dateArray[3]}`;
  }

  const onSearchEvent = (text) => {
    setSearchText(text);
  }


  const onClick = (projectId) => {
    props.history.push({
      pathname: `/project/${projectId}`,
      state: { item: 'tasks' }
    })
  }

  return (


    <div className='dashBoardContainer'>
      <section className='dashboardSummary'>
        <Search placeholder='Search projects...' onSearchEvent={onSearchEvent}></Search>
        <ProjectSummary></ProjectSummary>
        <RevenueSummary></RevenueSummary>
      </section>
      <section className='dashboardDetails'>
        {
          projectsArray.map(project => {
            return project.name.toLowerCase().includes(searchText.toLowerCase()) ?
              (
                <DashboardItem key={project.id} title={project.name} onClickEvent={() => onClick(project.id)}>
                  <p className='dashboardProjectStatus'>Status: {getTextFromStatus(project.status)}</p>
                  <p className='dashboardProjectRevenue'>Revenue: {parseRevenue(project.revenue)}</p>
                  <p className='dashboardProjectFinishDate'>Finish date: {parseFinishDate(project)}</p>
                  <TaskOverview tasks={tasks[project.id]}></TaskOverview>
                  <RevenueChart divId={'revenueChart' + project.id} projectId={project.id} revenue={revenue[project.id]}></RevenueChart>
                  <ProgressChart tasksPercentage='20%' revenuePercentage='50%'></ProgressChart>
                </DashboardItem>
              ) :
              null
          })
        }
      </section>
    </div>
  )

}

export default withRouter(Dashboard);