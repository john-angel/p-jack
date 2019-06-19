import React, {Component} from 'react';
import '../App.css';
import {green,blue,yellow, orange} from '../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

class Project extends Component{

    constructor(props){
        super(props);

        console.log('Project ',props.data.name, ' is', props.data.status);
        
        this.state = {
            icon:faPlay,
            borderColor: props.data.status === 'NotStarted' ? 'white' : props.data.status === 'OnTrack' ? green : 
                        props.data.status === 'Risk' ? yellow : props.data.status === 'Delayed' ? orange : blue,
            animation: 'paused',
            className:'projectCircle',
            animationName:''
        }
    }
    
    start = () => {
        this.setState({icon:faStop,borderColor:this.state.borderColor,animation:'running',className:'projectCircle',animationName:'borderAnimate'})
        this.props.onProjectActive(this.props.data.id);
    }

    stop = () => this.setState({icon:faPlay,borderColor:this.state.borderColor,animation:'paused',className:'projectCircle noBorderAnimation'})

    changeState = () =>  this.state.icon === faPlay ? this.start() : this.stop();
                                                    
    componentDidUpdate(){
        
        if(this.state.icon === faStop && this.props.active === false){
            this.stop();
        }
    }
    
    render(){
        return(
            <div className={this.state.className} style={{backgroundColor: this.state.borderColor,animationPlayState:this.state.animation,
            animationName:this.state.animationName}}>
                <p style={{justifyContent:'center'}}>{this.props.data.name}</p>
                <FontAwesomeIcon className={'icon'} icon={this.state.icon} onClick={this.changeState} />
            </div>

        )        
    }
}

export default Project;