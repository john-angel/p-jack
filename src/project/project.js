import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import ProjectDetail from './projectDetail';
import TaskContainer from '../task/taskContainer';

class Project extends Component{

    constructor(props){
        super(props);
        
        const { id } = this.props.match.params;
        this.state = {
            id: id
        };
        
    }

    componentDidMount(){
       
        const { id } = this.props.match.params;
        this.setState({id:id});

    }

    render(){
        return(
            <React.Fragment>                
                <div className={'project'}>
                    <ProjectDetail projectId={this.state.id}>
                    </ProjectDetail>
                    <TaskContainer projectId={this.state.id}></TaskContainer>
                </div>
            </React.Fragment>            
        )
    }
}

export default withRouter(Project);