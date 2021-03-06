import React, {Component} from 'react';
import Task from '../task/task';

class DoneInfo extends Component {
    constructor(props){
        super(props);

        let revenue = 0;

        this.props.tasks.forEach(task => {
            revenue+= task.revenue;
        });

        this.state = {     
            invoiced: this.parseRevenue(revenue)
        }
    }

    parseRevenue = (value) => {
        const revenue = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          notation:'compact',                                        
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value);
  
        return revenue;
    }
    
    render(){
        return(
            <section className='projectDoneContainer'>
                <section className='projectDoneSummary'>
                    <p className='projectDoneInfoTitle'>Done</p>
                    <p className='projectDoneInfoTotalTasksValue'>{this.props.tasks.length}</p>
                    <p className='projectDoneInfoTotalTasksName'>Tasks</p>
                    <p className='projectDoneInfoInvoicedValue'>{this.state.invoiced}</p>
                    <p className='projectDoneInfoInvoicedName'>Invoiced</p>                    
                </section>
                {
                    this.props.tasks.map(task => <Task key={task.id} data={task}></Task>)
                }                
            </section>
        )
    }
}

export default DoneInfo;

