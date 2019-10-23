import React, {Component} from 'react';
import {linkColor,getColorFromStatus} from '../utils/colors';

class RevenueChart extends Component{
    
    componentDidMount(){
        if(typeof this.props.revenue !== 'undefined'){
            window.google.charts.setOnLoadCallback(this.drawChart);
        }        
    }

    drawChart = () => {

        const dataTable = this.createDataTable();

        let options = {
            
            annotations: {
                alwaysOutside: true                
            },
            
            bar: { groupWidth: "80%" },
            legend: { position: "none" },
            vAxis: {
                gridlines: {
                    count: 0
                },
                textPosition: 'none'
            },
            chartArea: {left:2, top:5, width:'100%'}
        };

        let formatter = new window.google.visualization.NumberFormat({ prefix: '$' });

        formatter.format(dataTable, 1);
        formatter.format(dataTable, 2);

        let chart = new window.google.visualization.ColumnChart(document.getElementById(this.props.divId));
        chart.draw(dataTable, options);       
    }

    createDataTable = () => {
        let dataTable = new window.google.visualization.DataTable();

        dataTable.addColumn('string','Date');
        dataTable.addColumn('number','Revenue');
        dataTable.addColumn({type:'number',role:'annotation'});
        dataTable.addColumn({type:'string',role:'style'});

        const revenueArray = Object.keys(this.props.revenue).map(projectId => this.props.revenue[projectId]);

        revenueArray.forEach(period => {
            dataTable.addRow([period.date,period.amount,period.amount,getColorFromStatus(period.status)]);    
        });

        return dataTable;
    }
    
    render(){
        return(
            <React.Fragment>
            {
                typeof this.props.revenue === 'undefined' ?
                    <a href='/tasks' type='text/html' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '180px', textDecoration: 'none', color: linkColor }}>
                            Do you want to add some revenue?
                    </a> :
                    <div id={this.props.divId} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px', height: '180px'}}></div>

            }
            </React.Fragment>
        )
    }
}

export default RevenueChart;