import React, {Component} from 'react';
import {getColorFromStatus} from '../utils/colors';

class RevenueChart extends Component{
    
    componentDidMount(){
        if(this.props.revenue.length){
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
            chartArea: {left:2, top:5,width:'100%'}
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

        this.props.revenue.forEach(period => {
            dataTable.addRow([period.date,period.amount,period.amount,getColorFromStatus(period.status)]);    
        });

        return dataTable;
    }
    
    render(){
        return(
            <React.Fragment>
                    <div id={this.props.divId} style={{width: '200px', height: '180px'}}></div>
            </React.Fragment>
        )
    }
}

export default RevenueChart;