import React, {Component} from 'react';
import TaskDetail from './taskDetail';

class Task extends Component {

    constructor(props){
        super(props);
        this.state = {name: this.props.data.name};
    }

    handleClick = (event) => {
        console.log('Display detail for task with id', this.props.data.id);
    }

      
    handleChange = (event) => {
        event.persist();
        this.setState({name:event.target.value})
    }

    render(){
        return (
            <React.Fragment>
                <textarea className={'taskItem'} maxLength={'100'} rows={'2'} value={this.state.name} onClick={this.handleClick} onChange={this.handleChange}></textarea>                
            </React.Fragment>
        )
    }
}

export default Task;