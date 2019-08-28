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
            iconPjStatus:  props.data.status === 'NotStarted' ? faPowerOff : props.data.status === 'OnTrack' ? faHistory : 
            props.data.status === 'Risk' ? faExclamation : props.data.status === 'Delayed' ? faTimes : faCheck,
            backgroundColor: props.data.status === 'NotStarted' ? gray : props.data.status === 'OnTrack' ? green : 
                        props.data.status === 'Risk' ? yellow : props.data.status === 'Delayed' ? orange : blue,
            animation: 'paused',
            classPjStatus:'classPjStatus',
            animationRule:''
        }
    }
    
    start = () => {
        this.setState({animation:'running',classPjStatus:'classPjStatus',animationRule:'statusAnimationRule'})
        this.props.onProjectActive(this.props.data.id);
    }

    stop = () => this.setState({animation:'paused',classPjStatus:'classPjStatus noAnimation'})

    changeState = () =>  this.state.animation === 'paused' ? this.start() : this.stop();
                                                    
    componentDidUpdate(){
        
        if(this.state.animation === 'running' && this.props.active === false){
            this.stop();
        }
    }
   
    render(){
        return(
            <div className={'projectContainer'} style={{backgroundColor: this.state.backgroundColor}}>
                <FontAwesomeIcon className={'iconPjStatus ' + this.state.classPjStatus} icon={this.state.iconPjStatus} style={{
                animationPlayState:this.state.animation, animationName:this.state.animationRule}}
                onClick={this.changeState}/>
                <p className={this.state.classPjStatus} style={{color:'white',animationPlayState:this.state.animation, 
                    animationName:this.state.animationRule}}>
                    {this.props.data.name}
                </p>
                <p>{this.props.data.tasks.length} tasks</p>               
            </div>
        )        
    }
}

export default Project;