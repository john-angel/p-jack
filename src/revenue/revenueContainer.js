import React, {Component} from 'react';
import {revenue} from '../utils/testData';
import {notStartedStatus,completeStatus} from '../utils/status';
import Revenue from './revenue';

class RevenueContainer extends Component {

    constructor(props){
        super(props);

        let revenueItems = [{
            id:0,
            name:'',
            amount:'',
            status: notStartedStatus,
            date: 'yyyy-mm-dd'
        }];

        let revenueObj = revenue[this.props.projectId];
        
        if(typeof revenueObj !== 'undefined'){            
            revenueItems = revenueItems.concat(Object.keys(revenueObj).map(item => revenueObj[item]));           
        }

        this.state = {
            revenueItems: revenueItems            
        };        
    }

    onRevenueMarked = (id,status) => status === completeStatus ? this.updateProperty(id,'status',notStartedStatus) : this.updateProperty(id,'status',completeStatus)

    onNameChange = (id,name) => this.updateProperty(id,'name',name)

    onAmountChange = (id,amount) => this.updateProperty(id,'amount',amount)

    onDateChange = (id,date) => this.updateProperty(id,'date',date)

    onStatusChange = (id,status) => this.updateProperty(id,'status',status)

    updateProperty = (id,property,value) => {
        let newItem;
        let newItems = [...this.state.revenueItems];

        newItems = newItems.map(item => {
            if (item.id === id) {             
                newItem = Object.assign({}, item)
                newItem[property] = value;
                return newItem;
            }
            return item;
        })

        this.setState({
            revenueItems: newItems
        })
    }
    
    onNewRevenue = (revenue) => {

        let newItem;
        let newItems = [...this.state.revenueItems];

        //TODO:Unify this with updateProperty
        newItems = newItems.map(item => {
            if (item.id === revenue.id) {             
                newItem = Object.assign({}, item)
                newItem.name = '';
                newItem.amount = '';
                newItem.date = 'yyyy-mm-dd';
                newItem.status = notStartedStatus;
                return newItem;
            }
            return item;
        })
        
        this.setState({
            revenueItems: newItems
        })       

        
        let newRevenue = [{
            id:200, //TODO:id has to be id(n) + 1.
            name:revenue.name,
            amount:revenue.amount,
            date:revenue.date,
            status: revenue.amount            
        }]

        this.setState((prevState) => {
            return {
                revenueItems:prevState.revenueItems.concat(newRevenue)
            }
        })        
    }

    render(){
        return(
            <div className={'revenueContainer'}>
                <div className={'revenueGrid'} style={{width: '100%', marginRight: '10px'}}>                                        
                {
                    this.state.revenueItems.map(item =>
                        <Revenue key={item.id} data={item} onRevenueMarked={this.onRevenueMarked} onNewRevenue={this.onNewRevenue} onNameChange={this.onNameChange} onAmountChange={this.onAmountChange} onDateChange={this.onDateChange} onStatusChange={this.onStatusChange}></Revenue>
                    )
                }
                </div>                
            </div>     
        )
    }
}

export default RevenueContainer;