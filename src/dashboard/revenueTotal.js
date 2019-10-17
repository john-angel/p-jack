import React, {Component} from 'react';

class RevenueTotal extends Component {

    constructor(props){
        super(props);
        this.state = {revenue:''}
    }

    componentDidMount(){
        let amount = 0;
        this.props.revenue.forEach(period => {
            amount+= period.amount;    
        });
        this.setState(() => ({revenue: Number(amount).toLocaleString('en',{ style: 'currency', currency: 'USD', useGrouping: true ,minimumFractionDigits:0,
            maximumFractionDigits:0})}))
    }
   
    render(){
        return(
            <React.Fragment>
                <p>
                    <a className={'revenueTotal'}href='/revenue' type='text/html' style={{ fontSize: '1.25em', fontWeight: 'bold', color: 'black'}}>{this.state.revenue}</a>
                </p> 
            </React.Fragment>
        )
    }
}

export default RevenueTotal;
