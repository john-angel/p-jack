import React, {Component} from 'react';

class NavigationBar extends Component{

    render(){
        return(
            <nav className='navigationBar'>
                <ul>
                    <li><a href="/search">Search</a></li>
                    <li><a href="/add">Add</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/tasks">Tasks</a></li>
                    <li><a href="/revenue">Revenue</a></li>
                    <li><a href="/logout">Log out</a></li>
                </ul>    
            </nav>
        )
    }
}

export default NavigationBar;