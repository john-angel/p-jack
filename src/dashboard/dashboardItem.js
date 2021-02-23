import React from 'react';
import '../App.css';

function DashboardItem(props) {

    return (
        <div className={'dashboardItem'} onClick={props.onClickEvent}>
            <p className={'dashboardItemTitle'}>
                {props.title}
            </p>
            {props.children}
        </div>
    )
}


export default DashboardItem;