import React, {Component} from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class Project extends Component{
    render(){
        return(
            <div className={'project'}>
                <FontAwesomeIcon className={'icon'} icon={faPlay} />
            </div>

        )        
    }
}

export default Project;