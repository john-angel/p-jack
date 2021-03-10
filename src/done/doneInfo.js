import React, {Component} from 'react';
import {done} from '../utils/board';
import Task from '../task/task';
import parseRevenue from '../utils/revenue';

class DoneInfo extends Component {
    constructor(props){
        super(props);

        let revenue = 0;

        this.props.tasks.forEach(task => {
            revenue+= task.revenue;
        });

        this.state = {     
            invoiced: parseRevenue(revenue)
        }
    }

    onDragStart = (event,data) => {
        this.props.onDragStart(event,data,done);     
    }

    onDragEnd = (event,taskId) => {
        this.props.onDragEnd(event,taskId,done);
    }

    onDragEnter = (event) => {
        this.props.onDragEnter(event,done);        
    }

    onDragOver = (event) => {
        this.props.onDragOver(event,done);    
    }
    
    onDrop = (event) => {
        this.props.onDrop(event,done);        
    }
    
    render(){
        return(
            <section className='projectDoneContainer' onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDrop={this.onDrop} style={{outline: this.props.outline}}>
                <section className='projectDoneSummary'>
                    <p className='projectDoneInfoTitle'>Done</p>
                    <p className='projectDoneInfoTotalTasksValue'>{this.props.tasks.length}</p>
                    <p className='projectDoneInfoTotalTasksName'>Tasks</p>
                    <p className='projectDoneInfoInvoicedValue'>{this.state.invoiced}</p>
                    <p className='projectDoneInfoInvoicedName'>Invoiced</p>                    
                </section>
                {
                    this.props.tasks.map(task => <Task key={task.id} data={task} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}></Task>)
                }                
            </section>
        )
    }
}

export default DoneInfo;

