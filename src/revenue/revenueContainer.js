import React, {Component} from 'react';
import {revenue} from '../utils/testData';
import {notStartedStatus} from '../utils/status';
import Revenue from './revenue';

class RevenueContainer extends Component {

    constructor(props){
        super(props);

        let revenueItems = [{
            id:0,
            name:'',
            status: notStartedStatus,
            due: ''
        }];

        let revenueObj = revenue[this.props.projectId];
        
        if(typeof revenueObj !== 'undefined'){            
            revenueItems = revenueItems.concat(Object.keys(revenueObj).map(item => revenueObj[item]));           
        }

        this.state = {
            revenueItems: revenueItems            
        };        
    }

    onNameChange = (id,name) => this.updateProperty(id,'name',name)

    updateProperty = (id,property,value) => {
        console.log('updateProperty id', id, property, value )
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

    render(){
        return(
            <div className={'revenueContainer'}>
                <div className={'revenueGrid'} style={{width: '100%', marginRight: '10px'}}>                                        
                {
                    this.state.revenueItems.map(item =>
                        <Revenue key={item.id} data={item} onNameChange={this.onNameChange}></Revenue>
                    )
                }
                </div>                
            </div>     
        )
    }
}

export default RevenueContainer;