import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faFilledCircle, faCheckCircle,faPlus } from '@fortawesome/free-solid-svg-icons'
import {notStartedStatus,onHoldStatus,onTrackStatus,delayedStatus,atRiskStatus,completeStatus,getTextFromStatus} from '../utils/status';
import {getColorFromStatus} from '../utils/colors'

class Revenue extends Component{

    infoComplete = () => {
        if (this.props.data.name !== '' && this.props.data.amount !== '' && this.props.data.date !== 'yyyy-mm-dd'){
            return true;
        }
        return false
    }

    onCheckIconClick = (event) => {
        event.persist();
        if(this.props.data.id === 0){
            if(this.infoComplete()){
                this.props.onNewRevenue(this.props.data);
            }
        }else{
            this.props.onRevenueMarked(this.props.data.id,this.props.data.status);
        }           
    }

    onNameChange = (event) => {
        event.persist();
        this.props.onNameChange(this.props.data.id,event.target.value);
    }

    onAmountChange = (event) => {
        event.persist();
        this.props.onAmountChange(this.props.data.id,event.target.value);
    }

    onDateChange = (event) => {
        event.persist();        
        this.props.onDateChange(this.props.data.id,event.target.value);
    }

    onDateFocus = (event) => {
        event.target.type = 'date';
    }

    onStatusChange = (event) => {
        event.persist();
        this.props.onStatusChange(this.props.data.id,event.target.value);
    }

    render(){
        const checkIcon = this.props.data.id !== 0 ? this.props.data.status === completeStatus ? faCheckCircle : faCircle : faPlus;
        const namePlaceholder = this.props.data.id !== 0 ? '' : 'Description...';
        const amountPlaceholder = this.props.data.id !== 0 ? '' : 'Amount...';
        const datePlaceholder = this.props.data.id !== 0 ? '' : 'Date...';
        const dateColor = this.props.data.date !== 'yyyy-mm-dd' ? 'white' : '#727272';
        const statusIconColor = getColorFromStatus(this.props.data.status);
        let statusTextColor = '#727272'

        if(this.infoComplete()){
            statusTextColor = 'white';
        }

        return(
            <div className={'revenueItem'}>
                <FontAwesomeIcon className={'revenueCheckIcon'} icon={checkIcon} onClick={this.onCheckIconClick}></FontAwesomeIcon>
                <input className={'revenueDescription'} type={'text'} maxLength={'100'} value={this.props.data.name} placeholder={namePlaceholder} onChange={this.onNameChange}></input>
                <input className={'revenueAmount'} type={'text'} maxLength={'20'} value={this.props.data.amount} placeholder={amountPlaceholder} onChange={this.onAmountChange}></input>
                <input className={'revenueDate'} type={'text'} value={this.props.data.date} name={'revenueDate'} placeholder={datePlaceholder} style={{color:dateColor}} onChange={this.onDateChange} onFocus={this.onDateFocus}></input>
                <section>
                    <FontAwesomeIcon icon={faFilledCircle} style={{ fontSize: '0.8em', color: statusIconColor, marginRight: '4px' }}></FontAwesomeIcon>
                    <select id={'statusDataList'} value={this.props.data.status} style={{color:statusTextColor}} onChange={this.onStatusChange}>
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

export default Revenue;