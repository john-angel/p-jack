import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

class Task extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: this.props.data.name,
            icon: faCircle
        };
    }

    onCheckIconClick = (event) => {
        console.log('onCheckIconClick');
        this.setState({icon:this.state.icon === faCircle ? faCheckCircle : faCircle})
    }

    handleClick = (event) => {
        this.props.onSelected(this.props.data);
    }
      
    handleChange = (event) => {
        event.persist();
        this.setState({name:event.target.value})
    }

    render(){
        return (
            <div className={'taskItem'}>
                <FontAwesomeIcon className={'taskCheckIcon'} icon={this.state.icon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                <textarea className={'taskDescription'} maxLength={'100'} rows={'2'} value={this.state.name} onClick={this.handleClick} onChange={this.handleChange}></textarea>                
            </div>
                           
        )
    }
}

export default Task;