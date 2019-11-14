import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {notStartedColor, onHoldColor, onTrackColor, delayedColor, atRiskColor, completeColor, linkColor} from '../utils/colors';
import {notStartedStatus, onHoldStatus, onTrackStatus, delayedStatus, atRiskStatus, completeStatus} from '../utils/status';

class TaskStatusChart extends Component{

    componentDidMount(){

        if(typeof this.props.tasks !== 'undefined'){
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

        const tasksArray = Object.keys(this.props.tasks).map(projectId => this.props.tasks[projectId]);
            
        tasksArray.forEach(task => {

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

    onSelect = (event) => {
        console.log('Chart selected:', this.props.projectId);
        this.props.history.push({
            pathname:`/project/${this.props.projectId}`                       
        })
    }
    
    onAdd = () => console.log('onAdd'); 

    render(){
        return (
            <React.Fragment>
            {
                typeof this.props.tasks === 'undefined' ?
                <a href='/tasks' type='text/html' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '180px', textDecoration: 'none', color:linkColor}}>
                    Let's add the first task
                </a> :
                <div id={this.props.divId} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '270px', height: '180px'}} onClick={this.onSelect}></div>
            }
            </React.Fragment>
             
        )
    }
}

export default withRouter(TaskStatusChart);