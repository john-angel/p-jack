import React, {useEffect} from 'react';
import {mainComponentsBackgroundColor,textDefaultColor,getColorFromStatus, infoColor} from '../utils/colors';
import parseRevenue from '../utils/revenue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo} from '@fortawesome/free-solid-svg-icons';


function RevenueChart(props){
    
    useEffect(()=>{
        if(typeof props.revenue !== 'undefined'){
            window.google.charts.setOnLoadCallback(drawChart);
        }
    })

    const drawChart = () => {

        const dataTable = createDataTable();

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
        
        let chart = new window.google.visualization.ColumnChart(document.getElementById(props.divId));
        chart.draw(dataTable, options);       
    }

    const createDataTable = () => {
       
        let dataTable = new window.google.visualization.DataTable();

        dataTable.addColumn('string','Date');
        dataTable.addColumn('number','Revenue');
        dataTable.addColumn({type:'string',role:'annotation'});
        dataTable.addColumn({type:'string',role:'style'});

        const revenueArray = Object.keys(props.revenue).map(projectId => props.revenue[projectId]);

        revenueArray.forEach(period => {
            dataTable.addRow([period.date,period.amount,parseRevenue(period.amount),`color:${getColorFromStatus(period.status)}`]);    
        });

        return dataTable;
    }


    return (
        <div className='dashboardProjectRevenueChart'>
            {
                typeof props.revenue === 'undefined' ?
                    <div className='dashboardRevenueNotForecasted'>
                        <FontAwesomeIcon icon={faInfo} style={{ color: infoColor }}></FontAwesomeIcon>
                        <p>No revenue forecasted</p>
                    </div>
                    :
                    <div id={props.divId}></div>
            }
        </div>
    )

}

export default RevenueChart;