import React from 'react';
import './revenue.css';

const RevenueSummary = () => (

    <section className={'revenueSummaryContainer'}>
        <p className={'revenueSummaryTitle'}>Revenue</p>
        <section className={'revenueSummaryGrid'}>            
            <p className={'revenueSummaryForecastedNumber'}>$80.5K</p>
            <p className={'revenueSummaryInvoicedNumber'}>$60.1K</p>
            <p className={'revenueSummaryAtRiskNumber'}>$20.4K</p>
            <p className={'revenueSummaryForecasted'}>Forecasted</p>            
            <p className={'revenueSummaryInvoiced'}>Invoiced</p>            
            <p className={'revenueSummaryAtRisk'}>At risk</p>
        </section>
    </section>
)

export default RevenueSummary;