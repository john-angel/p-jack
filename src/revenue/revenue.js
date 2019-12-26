import React, {Component} from 'react';
import {getTextFromStatus} from '../utils/status';

class Revenue extends Component{

    onNameChange = (event) => {
        event.persist();
        this.props.onNameChange(this.props.data.id,event.target.value);
    }

    render(){
        return(
            <div className={'revenueItem'}>
                <input className={'revenueDescription'} type={'text'} maxLength={'100'}value={this.props.data.name} onChange={this.onNameChange}></input>
                <p>{this.props.data.amount}</p>
                <p>{this.props.data.date}</p>
                <p>{getTextFromStatus(this.props.data.status)}</p>                           
            </div>      
        )
    }
}

export default Revenue;