import React, {Component} from 'react';
import TaskDetail from './taskDetail';

class Task extends Component {
    tasks =['a','b','c']

    render(){
        return (
            <React.Fragment>
                <div className={'tasksContainer'}>
                    {
                        this.tasks.map(task =>
                            <p className={'taskItem'} contentEditable={'true'} >{task}</p>
                        )
                    }
                </div>
                <TaskDetail></TaskDetail>
            </React.Fragment>
        )
    }
}

export default Task;