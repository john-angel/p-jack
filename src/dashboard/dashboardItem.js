import React, {Component} from 'react';
import '../App.css';

class DashboardItem extends Component {
    render(){
        return (            
            <div className={'dashboardItem'}>            
                <p className={'dashboardItemTitle'}>
                    {this.props.title}
                </p>
                {this.props.children}                          
            </div>
        )
    }
}

export default DashboardItem;