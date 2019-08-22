import React, {Component} from 'react';
import '../App.css';

class DashboardItemContainer extends Component {
    render(){
        return (
            
            <div className={'dashboardItemContainer'}>
                <div className={'dashboardItemContainerTitle'}>
                    {this.props.title}
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default DashboardItemContainer;