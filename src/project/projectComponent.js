import React, {Component} from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

class Project extends Component{

    state = {
        icon: faPlay,
        borderColor: 'black'
    }
    start = () => {
        this.setState({icon:faStop,borderColor:'red'})
        this.props.onProjectStarted(this.props.data.id);
    }

    stop = () => this.setState({icon:faPlay,borderColor:'black'})
    
    changeState = () =>  this.state.icon === faPlay ? this.start() : this.stop();
                                                    
    componentDidUpdate(){
        
        if(this.state.icon === faStop && this.props.started === false){
            this.stop();
        }
    }
    
    render(){
        return(
            <div className={'project'} style={{borderColor: this.state.borderColor}}>
                <p style={{justifyContent:'center'}}>{this.props.data.name}</p>
                <FontAwesomeIcon className={'icon'} icon={this.state.icon} onClick={this.changeState} />
            </div>

        )        
    }
}

export default Project;