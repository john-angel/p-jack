export const notStartedStatus = 'notStartedStatus';
export const onHoldStatus = 'onHoldStatus';
export const onTrackStatus = 'onTrackStatus';
export const delayedStatus = 'delayedStatus';
export const atRiskStatus = 'atRiskStatus';
export const completeStatus = 'completeStatus';

const statusTextMap = {
    notStartedStatus: 'Not started',
    onHoldStatus: 'On hold',
    onTrackStatus: 'On track',
    delayedStatus: 'Delayed',
    atRiskStatus: 'At risk',
    completeStatus: 'Complete'
};

export function getTextFromStatus(status) {
    return statusTextMap[status];    
}