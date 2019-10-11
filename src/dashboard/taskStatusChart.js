import React, {Component} from 'react';
import {notStartedColor, onHoldColor, onTrackColor, delayedColor, atRiskColor, completeColor} from '../utils/colors';
import {notStartedStatus, onHoldStatus, onTrackStatus, delayedStatus, atRiskStatus, completeStatus} from '../utils/status';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

class TaskStatusChart extends Component{

    componentDidMount(){

        if(this.props.tasks.length){
            window.google.charts.setOnLoadCallback(this.drawChart);
        }
    }

    drawChart = () => {        

        const tasks = this.getTasksAmount();

        const { dataTable, slices } = this.createDataTable(tasks);

        const options = {
            pieHole: 0.4,
            legend: { alignment: 'center', position: 'right' },
            pieSliceText: 'none',
            slices: slices,
            chartArea: { left: 2, top: 5, width: '80%' }
        };

        const chart = new window.google.visualization.PieChart(document.getElementById(this.props.divId));
        chart.draw(dataTable, options);        
    }

    getTasksAmount = () => {

        let tasks = {notStarted:0, onHold:0, onTrack:0, delayed:0, atRisk:0, complete:0};

        this.props.tasks.forEach(task => {

            switch (task.status) {
                case notStartedStatus:
                    tasks.notStarted++;
                    break;
                case onHoldStatus:
                    tasks.onHold++;
                    break;
                case onTrackStatus:
                    tasks.onTrack++;
                    break;
                case delayedStatus:
                    tasks.delayed++;
                    break;
                case atRiskStatus:
                    tasks.atRisk++;
                    break;
                case completeStatus:
                    tasks.complete++;
                    break;
                default:
                    break;
            }
        });

        return tasks;
    }

    createDataTable = (tasks) => {
        let slices = [];

        let dataTable = new window.google.visualization.DataTable();

        dataTable.addColumn('string','Status');
        dataTable.addColumn('number','Amount');

        if(tasks.notStarted > 0){
            dataTable.addRow(['Not started',tasks.notStarted]);
            slices.push({color:notStartedColor});
        }
        if(tasks.onHold > 0){
            dataTable.addRow(['On hold',tasks.onHold]);
            slices.push({color:onHoldColor});
        }
        if(tasks.onTrack > 0){
            dataTable.addRow(['On track',tasks.onTrack]);
            slices.push({color:onTrackColor});
        }
        if(tasks.delayed > 0){
            dataTable.addRow(['Delayed',tasks.delayed]);
            slices.push({color:delayedColor});
        }
        if(tasks.atRisk > 0){
            dataTable.addRow(['At risk',tasks.atRisk]);
            slices.push({color:atRiskColor});
        }
        if(tasks.complete > 0){
            dataTable.addRow(['Complete',tasks.complete]);
            slices.push({color:completeColor});
        }

        return {dataTable,slices};
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