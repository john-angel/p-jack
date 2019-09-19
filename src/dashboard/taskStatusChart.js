import React, {Component} from 'react';


class TaskStatusChart extends Component{

    componentDidMount(){
        window.google.charts.setOnLoadCallback(this.drawChart);
    }

    drawChart = () => {
        var data = window.google.visualization.arrayToDataTable([
          ['Status', 'Amount'],
          ['On track',     11],
          ['Delayed',      2],
          ['On hold',  2],
          ['Complete',5],
          ['At risk',3]          
        ]);

        var options = {
            pieHole: 0.4,
            legend: {alignment:'center',position:'right'},
            pieSliceText: 'none',
            slices:[{color:'#7ED3B2'},{color:'#FF8080'},{color:'#CFCFCF'},{color:'#8AC6D1'},{color:'FFBA92'}],
            chartArea: {left:2,top:5,width:'80%'}
        };

        var chart = new window.google.visualization.PieChart(document.getElementById(this.props.divId));
        chart.draw(data, options);
        
       
    }

    render(){
        return (
            <React.Fragment>
                <div id={this.props.divId} style={{width: '270px', height: '180px'}}></div>
            </React.Fragment>
        )
    }
}

export default TaskStatusChart;