import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavigationBar extends Component{

    render(){
        return( 
            <nav className='navigationBar'>
                <ul>
                    <li><NavLink to="/search">Search</NavLink></li>
                    <li><NavLink to="/add">Add</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/tasks">Tasks</NavLink></li>
                    <li><NavLink to="/revenue">Revenue</NavLink></li>
                    <li><NavLink to="/logout">Log out</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default NavigationBar;