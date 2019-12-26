import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import ProjectDetail from './projectDetail';
import TaskContainer from '../task/taskContainer';
import RevenueContainer from '../revenue/revenueContainer';

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
                    {
                        this.props.location.state.item === 'tasks' ?
                        <TaskContainer projectId={this.state.id}></TaskContainer> :
                        <RevenueContainer projectId={this.state.id}></RevenueContainer>
                    }
                    
                </div>
            </React.Fragment>            
        )
    }
}
export default withRouter(Project);