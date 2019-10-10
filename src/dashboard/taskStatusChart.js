import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

class TaskStatusChart extends Component{

    componentDidMount(){
        window.google.charts.setOnLoadCallback(this.drawChart);
    }

    drawChart = () => {
        let slices = [];
        let tasks = {notStarted:0, onHold:0, onTrack:0, delayed:0, atRisk:0, complete:0};
        let dataTable = new window.google.visualization.DataTable();

        dataTable.addColumn('string','Status');
        dataTable.addColumn('number','Amount');

        if(this.props.tasks.length){
            this.props.tasks.forEach(task => {
            
                switch(task.status){
                    case 'notStarted': 
                        tasks.notStarted++;
                        break;
                    case 'onHold':
                        tasks.onHold++;
                        break;
                    case 'onTrack':
                        tasks.onTrack++;
                        break;
                    case 'delayed':
                        tasks.delayed++;
                        break;
                    case 'atRisk':
                        tasks.atRisk++;
                        break;
                    case 'complete':
                        tasks.complete++;
                        break;
                    default:
                        break;
                }
            });
    
            if(tasks.notStarted > 0){
                dataTable.addRow(['Not started',tasks.notStarted]);
                slices.push({color:'#EBEBEB'});
            }
            if(tasks.onHold > 0){
                dataTable.addRow(['On hold',tasks.onHold]);
                slices.push({color:'#CFCFCF'});
            }
            if(tasks.onTrack > 0){
                dataTable.addRow(['On track',tasks.onTrack]);
                slices.push({color:'#7ED3B2'});
            }
            if(tasks.delayed > 0){
                dataTable.addRow(['Delayed',tasks.delayed]);
                slices.push({color:'#FF8080'});
            }
            if(tasks.atRisk > 0){
                dataTable.addRow(['At risk',tasks.atRisk]);
                slices.push({color:'#FFBA92'});
            }
            if(tasks.complete > 0){
                dataTable.addRow(['Complete',tasks.complete]);
                slices.push({color:'#8AC6D1'});
            }
            var options = {
                pieHole: 0.4,
                tooltip:{trigger:this.props.tasks.length ? 'focus':'none'},
                legend: {alignment:'center',position:'right'},
                pieSliceText: 'none',
                slices:slices,
                chartArea: {left:2,top:5,width:'80%'}
            };
    
            var chart = new window.google.visualization.PieChart(document.getElementById(this.props.divId));
            chart.draw(dataTable, options);

        }
    }
    
    onAdd = () => console.log('onAdd'); 

    render(){
        return (
            <React.Fragment>
                <div id={this.props.divId} style={{display:'flex',alignItems:'center',justifyContent:'center',width: '270px', height: '180px'}}>
                    {
                        !this.props.tasks.length ?
                            <FontAwesomeIcon icon={faPlus} onClick={this.onAdd}></FontAwesomeIcon> :
                            null                       
                    }
                
                </div>
            </React.Fragment>
        )
    }
}

export default TaskStatusChart;