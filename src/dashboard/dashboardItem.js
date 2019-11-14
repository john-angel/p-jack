import React, {Component} from 'react';
import '../App.css';

class DashboardItem extends Component {
    render(){
        return (            
            <div className={'dashboardItem'}>
                <div className={'dashboardItemTitle'}>
                    {this.props.title}
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default DashboardItem;