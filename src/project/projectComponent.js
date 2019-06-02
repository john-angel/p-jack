import React, {Component} from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

class Project extends Component{

    state = {
        icon: faPlay
    }
    changeState = () => this.state.icon === faPlay ? this.setState({icon:faStop}) : this.setState({icon:faPlay})
    
    render(){
        return(
            <div className={'project'}>
                <FontAwesomeIcon className={'icon'} icon={this.state.icon} onClick={this.changeState} />
            </div>

        )        
    }
}

export default Project;