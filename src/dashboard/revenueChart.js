import React, {Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom'
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
            backgroundColor: '#161F2C',            
            annotations: { alwaysOutside: true },            
            bar: { groupWidth: '80%' },
            legend: { position: 'none' },
            hAxis: { textStyle: { color:'white', fontSize: 11} },
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

    onSelect = () => {
        this.props.history.push({
            pathname:`/project/${this.props.projectId}`,
            state:{item:'revenue'}                       
        })
    }
    
    render(){
        const link = `/project/${this.props.projectId}`;
        return(
            <React.Fragment>
            {
                typeof this.props.revenue === 'undefined' ?
                    <NavLink to={link} onClick={this.onSelect} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '180px', textDecoration: 'none', color:linkColor}}>
                        Do you want to add some revenue?
                    </NavLink> :
                    <div id={this.props.divId} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px', height: '180px'}} onClick={this.onSelect}></div>

            }
            </React.Fragment>
        )
    }
}

export default withRouter(RevenueChart);