import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import {projects} from '../utils/testData'
import {notStartedStatus,onHoldStatus,onTrackStatus,delayedStatus,atRiskStatus,completeStatus,getTextFromStatus} from '../utils/status'
import {getColorFromStatus,infoColor} from '../utils/colors'

class ProjectDetail extends Component{

    constructor(props){
        super(props);
              
        this.state = {
            name: projects[this.props.projectId].name,
            description: projects[this.props.projectId].description,
            start: projects[this.props.projectId].startDate,
            finish: projects[this.props.projectId].finishDate,           
            revenue: this.parseRevenue(projects[this.props.projectId].revenue),
            status: projects[this.props.projectId].status,
            statusColor: getColorFromStatus(projects[this.props.projectId].status)
        };
    }

    parseRevenue = (value) => {
        const revenue = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          notation:'compact',                                        
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value);
  
        return revenue;
      }

    onChange = (event) => {
        event.persist();
        this.setState({description:event.target.value})
    }

    onStartDateChange = (event) => {
        event.persist();
        this.setState({start:event.target.value});
    }

    onFinishDateChange = (event) => {
        event.persist();
        this.setState({finish:event.target.value});        
    }

    onStatusChange = (event) => {
        event.persist();
        this.setState({
            status:event.target.value,
            statusColor:getColorFromStatus(event.target.value)
        });
    }

    onRevenueChange = (event) => {
        event.persist();
        this.setState({revenue:event.target.value});
    }
    
    render(){
        return (
            <div className='projectDetailContainer'>
                <h1 className='projectDetailTitle'><FontAwesomeIcon icon={faProjectDiagram} style={{ color: infoColor }}></FontAwesomeIcon> {this.state.name}</h1>
                <textarea className='projectDetailDescription' maxLength='125' rows='2' value={this.state.description} onChange={this.onChange}></textarea>
                <section className='projectDetailDates'>
                    <label className='projectDetailStartLabel' htmlFor={'projectDetailStartValue'}>Start:</label>
                    <input type='date' id='projectDetailStartValue' value={this.state.start} name='projectDetailStartLabel' style={{color:infoColor}} onChange={this.onStartDateChange}></input>
                    <label className='projectDetailFinishLabel' htmlFor={'projectDetailFinishValue'}>Finish:</label>
                    <input type='date' id='projectDetailFinishValue' value={this.state.finish} name='projectDetailFinishLabel' style={{color:this.state.statusColor}} onChange={this.onFinishDateChange}></input>
                </section>
                <section className='projectDetailStatus'>
                    <label className='projectDetailRevenueLabel' htmlFor='projectDetailRevenueValue'>Revenue:</label>
                    <input type='text' id='projectDetailRevenueValue' value={this.state.revenue} name='projectDetailRevenueValue' style={{color:infoColor}} onChange={this.onRevenueChange}></input>
                    <label className='projectDetailStatusLabel' htmlFor='projectDetailStatusValue'>Status:</label>
                    <select id='projectDetailStatusValue' value={this.state.status} style={{color:this.state.statusColor}} onChange={this.onStatusChange}>
                            <option value={notStartedStatus}>{getTextFromStatus(notStartedStatus)}</option>
                            <option value={onHoldStatus}>{getTextFromStatus(onHoldStatus)}</option>
                            <option value={onTrackStatus}>{getTextFromStatus(onTrackStatus)}</option>
                            <option value={delayedStatus}>{getTextFromStatus(delayedStatus)}</option>
                            <option value={atRiskStatus}>{getTextFromStatus(atRiskStatus)}</option>
                            <option value={completeStatus}>{getTextFromStatus(completeStatus)}</option>
                        </select>
                </section>                     
            </div>
        )
    }
}

export default ProjectDetail;