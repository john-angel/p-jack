import React, {Component} from 'react';

class RevenueTotal extends Component {

    constructor(props){
        super(props);
        this.total = Number(125000).toLocaleString('en',{ style: 'currency', currency: 'USD', useGrouping: true ,minimumFractionDigits:0,
        maximumFractionDigits:0})

    }
    render(){
        return(
            <React.Fragment>
                <p>
                    <a className={'revenueTotal'}href='/revenue' type='text/html' style={{ fontSize: '1.25em', fontWeight: 'bold', color: 'black'}}>{this.total}</a>
                </p> 
            </React.Fragment>
        )
    }
}

export default RevenueTotal;
