import React, {Component} from 'react';

class RevenueTotal extends Component {

    constructor(props){
        super(props);
        this.state = {revenue:''}
    }

    componentDidMount(){
        let amount = 0;
        
        if(typeof this.props.revenue !== 'undefined'){
            const revenueArray = Object.keys(this.props.revenue).map(projectId => this.props.revenue[projectId]);
            revenueArray.forEach(period => {
                amount+= period.amount;    
            })
        }

        this.setState(() => ({revenue: Number(amount).toLocaleString('en',{ style: 'currency', currency: 'USD', useGrouping: true ,minimumFractionDigits:0,
            maximumFractionDigits:0})}))
    }
   
    render(){
        return(
            <React.Fragment>
            {
                typeof this.props.revenue !== 'undefined' ?
                    <a className={'revenueTotal'}href='/revenue' type='text/html' style={{ fontSize: '1.25em', fontWeight: 'bold', color: 'green'}}>{this.state.revenue}</a>                
                :
                null
            }                
            </React.Fragment>
        )
    }
}

export default RevenueTotal;
