import React, {Component} from 'react';

class RevenueChart extends Component{
    
    componentDidMount(){
        window.google.charts.setOnLoadCallback(this.drawChart);
    }

    drawChart = () => {
        let data = window.google.visualization.arrayToDataTable([
            ['Q', 'Revenue',{type:'number', role:'annotation'}, { role: 'style' }],            
            ['Q1', 1500,1500, '#8AC6D1'],            
            ['Q2', 15200, 15200,'#7ED3B2'],            
            ['Q3', 0, 0,'#74BEC1'],
            ['Q4', 5400, 5400,'#FFBA92']
        ]);

        let options = {
            
            annotations: {
                alwaysOutside: true,
                textStyle: {
                    color: '#000000'
                }
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

        formatter.format(data, 1);
        formatter.format(data, 2);

        let chart = new window.google.visualization.ColumnChart(document.getElementById(this.props.divId));
        chart.draw(data, options);
       
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