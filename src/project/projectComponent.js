import React, {Component} from 'react';
import '../App.css';
import {green,blue,yellow, orange, gray} from '../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPowerOff, faHistory, faTimes, faExclamation } from '@fortawesome/free-solid-svg-icons'

class Project extends Component{

    constructor(props){
        super(props);

        console.log('Project ',props.data.name, ' is', props.data.status);
        
        this.state = {
            iconStatus:  props.data.status === 'NotStarted' ? faPowerOff : props.data.status === 'OnTrack' ? faHistory : 
            props.data.status === 'Risk' ? faExclamation : props.data.status === 'Delayed' ? faTimes : faCheck,
            backgroundColor: props.data.status === 'NotStarted' ? gray : props.data.status === 'OnTrack' ? green : 
                        props.data.status === 'Risk' ? yellow : props.data.status === 'Delayed' ? orange : blue,
            animation: 'paused',
            className:'projectCircle',
            animationName:''
        }
    }
    
    start = () => {
        this.setState({animation:'running',className:'projectCircle',animationName:'projectAnimation'})
        this.props.onProjectActive(this.props.data.id);
    }

    stop = () => this.setState({animation:'paused',className:'projectCircle noAnimation'})

    changeState = () =>  this.state.animation === 'paused' ? this.start() : this.stop();
                                                    
    componentDidUpdate(){
        
        if(this.state.animation === 'running' && this.props.active === false){
            this.stop();
        }
    }
   
    render(){
        return(
            <div className={this.state.className} style={{backgroundColor: this.state.backgroundColor,
                animationPlayState:this.state.animation, animationName:this.state.animationName}}>
                <FontAwesomeIcon className={'iconStatus'} icon={this.state.iconStatus} style={{fontSize:'2em'}}
                onClick={this.changeState}/>
                <p>{this.props.data.name}</p>               
            </div>
        )        
    }
}

export default Project;