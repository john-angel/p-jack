import React, {Component} from 'react';
import Project from '../project/projectComponent';

class Dashboard extends Component{

    projects = [
        {
          id: 1,
          name: 'Rocket',
          description: 'Rocket to Mars',
          start: '2018-01-05',
          plannedEnd: '2019-05-30',
          actualEnd: '2019-05-15',
          status:'Complete'
        },
        {
          id: 2,
          name: 'House',
          description: 'House in the country side',
          start: '2018-04-12',
          plannedEnd: '2019-12-30',
          actualEnd: '',
          status:'Risk'
        },
        {
          id: 3,
          name: 'Book',
          description: 'Book for children',
          start: '2018-09-20',
          plannedEnd: '2019-04-30',
          actualEnd: '',
          status:'NotStarted'
        }
        ,
        {
          id: 4,
          name: 'Job',
          description: 'Front End developer job',
          start: '2019-08-01',
          plannedEnd: '2019-11-30',
          actualEnd: '',
          status:'OnTrack'
        },
        {
          id: 5,
          name: 'Drawing',
          description: 'Improve drawing skills',
          start: '2019-06-01',
          plannedEnd: '2019-12-30',
          actualEnd: '',
          status:'Delayed'
        },
        {
          id: 6,
          name: 'Swimming',
          description: 'Improve swimming skills',
          start: '2019-06-01',
          plannedEnd: '2019-12-30',
          actualEnd: '',
          status:'Complete'
        },
        {
          id: 7,
          name: 'Dancing',
          description: 'Improve dancing skills',
          start: '2019-06-01',
          plannedEnd: '2019-12-30',
          actualEnd: '',
          status:'Risk'
        },
        {
          id: 8,
          name: 'Car',
          description: 'Buy a car',
          start: '2019-06-01',
          plannedEnd: '2019-12-30',
          actualEnd: '',
          status:'NotStarted'
        },
        {
          id: 9,
          name: 'Cooking',
          description: 'Improve cooking skills',
          start: '2019-06-01',
          plannedEnd: '2019-12-30',
          actualEnd: '',
          status:'OnTrack'
        },
        {
          id: 10,
          name: 'Writing',
          description: 'Improve writing skills',
          start: '2019-06-01',
          plannedEnd: '2019-12-30',
          actualEnd: '',
          status:'Delayed'
        }
    ]

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
                this.projects.map(project => (
                  project.id === this.state.projectActive ?
                    <Project key={project.id} data={project} onProjectActive={this.onProjectActive} active={true} /> :
                    <Project key={project.id} data={project} onProjectActive={this.onProjectActive} active={false} /> 
                ))
            }             
            </div>
          </React.Fragment>
                       
        )
    }
}

export default Dashboard;