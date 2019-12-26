import React, {Component} from 'react';
import {getTextFromStatus} from '../utils/status';

class Revenue extends Component{

    onNameChange = (event) => {
        event.persist();
        this.props.onNameChange(this.props.data.id,event.target.value);
    }

    onAmountChange = (event) => {
        event.persist();
        this.props.onAmountChange(this.props.data.id,event.target.value);
    }

    render(){
        const namePlaceholder = this.props.data.id !== 0 ? '' : 'Description...';
        const amountPlaceholder = this.props.data.id !== 0 ? '' : 'Amount...';


        return(
            <div className={'revenueItem'}>
                <input className={'revenueDescription'} type={'text'} maxLength={'100'} value={this.props.data.name} placeholder={namePlaceholder} onChange={this.onNameChange}></input>
                <input className={'revenueAmount'} type={'text'} maxLength={'20'} value={this.props.data.amount} placeholder={amountPlaceholder} onChange={this.onAmountChange}></input>
                <p>{this.props.data.date}</p>
                <p>{getTextFromStatus(this.props.data.status)}</p>                           
            </div>      
        )
    }
}

export default Revenue;