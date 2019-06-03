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
          actualEnd: '2019-05-15'
        },
        {
          id: 2,
          name: 'House',
          description: 'House in the country side',
          start: '2018-04-12',
          plannedEnd: '2019-12-30',
          actualEnd: ''
        },
        {
          id: 3,
          name: 'Book',
          description: 'Book for children',
          start: '2018-09-20',
          plannedEnd: '2019-04-30',
          actualEnd: ''
        }
    ]

    state = {
      projectStarted: 0
    }
    //TODO: Check how Observer pattern is implemented.
    onProjectStarted = (id) => {
      this.setState({projectStarted:id})
    }

    render(){
        return(
            <div className={"projectsContainer"}>
            {
                this.projects.map(project => (
                  project.id === this.state.projectStarted ?
                    <Project key={project.id} data={project} onProjectStarted={this.onProjectStarted} started={true} /> :
                    <Project key={project.id} data={project} onProjectStarted={this.onProjectStarted} started={false} /> 
                ))
            }             
            </div>                     
        )
    }
}

export default Dashboard;