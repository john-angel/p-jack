import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavigationBar extends Component{

    onDashboardClick = (event) => {
        event.preventDefault();
        console.warn('Dashboard feature coming soon!');
    }

    onProjectsClick = (event) => {
        event.preventDefault();
        console.warn('Projects feature coming soon!');
    }
    
    onTasksClick = (event) => {
        event.preventDefault();
        console.warn('Tasks feature coming soon!');
    }

    onRevenueClick = (event) => {
        event.preventDefault();
        console.warn('Revenue feature coming soon!');
    }

    onSignOutClick = (event) => {
        event.preventDefault();
        console.warn('Sign out feature coming soon!');
    }

    render(){
        return( 
            <nav className='navigationBar'>
                <ul>
                    <li><NavLink to="/dashboard" className={'navBarLinkDefault'} activeClassName={'activeNavBarLink'}>Dashboard</NavLink></li>
                    <li><NavLink to="/projects" className={'navBarLinkDefault'} activeClassName={'activeNavBarLink'} onClick={this.onProjectsClick}>Projects</NavLink></li>
                    <li><NavLink to="/tasks" className={'navBarLinkDefault'} activeClassName={'activeNavBarLink'} onClick={this.onTasksClick}>Tasks</NavLink></li>
                    <li><NavLink to="/revenue" className={'navBarLinkDefault'} activeClassName={'activeNavBarLink'} onClick={this.onRevenueClick}>Revenue</NavLink></li>
                    <li><NavLink to="/signout" className={'navBarLinkDefault'} activeClassName={'activeNavBarLink'} onClick={this.onSignOutClick}>Sign out</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default NavigationBar;