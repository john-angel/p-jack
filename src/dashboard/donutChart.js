import React, {Component} from 'react';


class DonutChart extends Component{

    componentDidMount(){
        window.google.charts.load("current", {packages:["corechart"]});
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
            legend: {alignment:'center'},
            pieSliceText: 'none',
            slices:[{color:'#7ED3B2'},{color:'#FF8080'},{color:'#CFCFCF'},{color:'#8AC6D1'},{color:'FFBA92'}],
            chartArea: {left:2,top:5}
        };

        var chart = new window.google.visualization.PieChart(document.getElementById(this.props.divId));
        chart.draw(data, options);
        
       
    }

    render(){
        return (
            <React.Fragment>
                <div id={this.props.divId} style={{width: '350px', height: '200px'}}></div>
            </React.Fragment>
        )
    }
}

export default DonutChart;