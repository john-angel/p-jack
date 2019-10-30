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
                            <textarea className={'taskItem'} maxLength={'100'} rows={'2'}>{task}</textarea>
                        )
                    }
                </div>
                <TaskDetail></TaskDetail>
            </React.Fragment>
        )
    }
}

export default Task;