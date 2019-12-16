import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavigationBar extends Component{

    onSearchClick = (event) => {
        event.preventDefault();
        console.warn('Search feature coming soon!');
    }

    onAddClick = (event) => {
        event.preventDefault();
        console.warn('Add feature coming soon!');
    }

    onTasksClick = (event) => {
        event.preventDefault();
        console.warn('Tasks feature coming soon!');
    }

    onRevenueClick = (event) => {
        event.preventDefault();
        console.warn('Revenue feature coming soon!');
    }

    onLogoutClick = (event) => {
        event.preventDefault();
        console.warn('Logout feature coming soon!');
    }

    //TODO: Remove className property from links that are built.
    render(){
        return( 
            <nav className='navigationBar'>
                <ul>
                    <li><NavLink to="/search" className={'navBarLinkDisabled'} activeClassName={'activeNavBarLink'} onClick={this.onSearchClick}>Search</NavLink></li>
                    <li><NavLink to="/add" className={'navBarLinkDisabled'} activeClassName={'activeNavBarLink'} onClick={this.onAddClick}>Add</NavLink></li>
                    <li><NavLink to="/dashboard" className={'navBarLinkEnabled'} activeClassName={'activeNavBarLink'}>Dashboard</NavLink></li>
                    <li><NavLink to="/tasks" className={'navBarLinkDisabled'} activeClassName={'activeNavBarLink'} onClick={this.onTasksClick}>Tasks</NavLink></li>
                    <li><NavLink to="/revenue" className={'navBarLinkDisabled'} activeClassName={'activeNavBarLink'} onClick={this.onRevenueClick}>Revenue</NavLink></li>
                    <li><NavLink to="/logout" className={'navBarLinkDisabled'} activeClassName={'activeNavBarLink'} onClick={this.onLogoutClick}>Log out</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default NavigationBar;