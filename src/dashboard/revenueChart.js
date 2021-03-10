import React, {Component} from 'react';
import {mainComponentsBackgroundColor,textDefaultColor,getColorFromStatus, infoColor} from '../utils/colors';
import parseRevenue from '../utils/revenue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo} from '@fortawesome/free-solid-svg-icons';


class RevenueChart extends Component{
    
    componentDidMount(){
        if(typeof this.props.revenue !== 'undefined'){
            window.google.charts.setOnLoadCallback(this.drawChart);
        }        
    }

    drawChart = () => {

        const dataTable = this.createDataTable();

        let options = {
            backgroundColor: mainComponentsBackgroundColor,            
            annotations: { 
                alwaysOutside: true,
                textStyle: {
                    color:textDefaultColor
                }                
            },            
            bar: { groupWidth: '80%' },
            legend: { position: 'none' },
            hAxis: { textStyle: { color:textDefaultColor, fontSize: 11} },
            vAxis: {
                gridlines: {
                    count: 0
                },
                textPosition: 'none'
            },
            chartArea: {left:0, top:0, width:'100%'}
        };

        let formatter = new window.google.visualization.NumberFormat({ prefix: '$' });

        formatter.format(dataTable, 1);//Apply format to 2nd column
        
        let chart = new window.google.visualization.ColumnChart(document.getElementById(this.props.divId));
        chart.draw(dataTable, options);       
    }

    createDataTable = () => {
       
        let dataTable = new window.google.visualization.DataTable();

        dataTable.addColumn('string','Date');
        dataTable.addColumn('number','Revenue');
        dataTable.addColumn({type:'string',role:'annotation'});
        dataTable.addColumn({type:'string',role:'style'});

        const revenueArray = Object.keys(this.props.revenue).map(projectId => this.props.revenue[projectId]);

        revenueArray.forEach(period => {
            dataTable.addRow([period.date,period.amount,parseRevenue(period.amount),`color:${getColorFromStatus(period.status)}`]);    
        });

        return dataTable;
    }

    render(){        
        return(
            <div className='dashboardProjectRevenueChart'>
            {
                typeof this.props.revenue === 'undefined' ?
                    <div className='dashboardRevenueNotForecasted'>
                        <FontAwesomeIcon icon={faInfo} style={{color:infoColor}}></FontAwesomeIcon>
                        <p>No revenue forecasted</p>
                    </div>
                    :                    
                    <div id={this.props.divId}></div>
            }
            </div>
        )
    }
}

export default RevenueChart;