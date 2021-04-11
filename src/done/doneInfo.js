import React from 'react';
import {done} from '../utils/board';
import Task from '../task/task';
import parseRevenue from '../utils/revenue';

function DoneInfo(props){
    let revenue = 0;

    props.tasks.forEach(task => {
        revenue += task.revenue;
    });

    const onDragStart = (event,data) => {
        props.onDragStart(event,data,done);     
    }

    const onDragEnd = (event,taskId) => {
        props.onDragEnd(event,taskId,done);
    }

    const onDragEnter = (event) => {
        props.onDragEnter(event,done);        
    }

    const onDragOver = (event) => {
        props.onDragOver(event,done);    
    }
    
    const onDrop = (event) => {
        props.onDrop(event,done);        
    }
    
    return (
        <section className='projectDoneContainer' onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDrop} style={{ outline: props.outline }}>
            <section className='projectDoneSummary'>
                <p className='projectDoneInfoTitle'>Done</p>
                <p className='projectDoneInfoTotalTasksValue'>{props.tasks.length}</p>
                <p className='projectDoneInfoTotalTasksName'>Tasks</p>
                <p className='projectDoneInfoInvoicedValue'>{parseRevenue(revenue)}</p>
                <p className='projectDoneInfoInvoicedName'>Invoiced</p>
            </section>
            {
                props.tasks.map(task => <Task key={task.id} data={task} onDragStart={onDragStart} onDragEnd={onDragEnd}></Task>)
            }
        </section>
    )

}

export default DoneInfo;

