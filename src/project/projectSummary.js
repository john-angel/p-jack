import React from 'react';
import './project.css'

const ProjectSummary = (props) =>     
    <section className={'projectSummaryContainer'}>
        <p className={'projectSummaryTitle'}>Projects</p>
        <section className={'projectSummaryDetail'}>            
            <p className={'projectSummaryOnTrackNumber'}>4</p>
            <p className={'projectSummaryAtRiskNumber'}>1</p>
            <p className={'projectSummaryOnHoldNumber'}>2</p>
            <p className={'projectSummaryOnTrack'}>On track</p>            
            <p className={'projectSummaryAtRisk'}>At risk</p>            
            <p className={'projectSummaryOnHold'}>On hold</p>
        </section>
    </section>

export default ProjectSummary;