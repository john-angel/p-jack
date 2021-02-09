
export const notStartedColor = '#EBEBEB';
export const onHoldColor = '#63C6E7';
export const onTrackColor = '#7ED3B2';
export const delayedColor = '#E87998';
export const atRiskColor = '#FFB185';
export const completeColor = '#5D7FF5';
export const defaultColor = '#E0E0E0';
export const infoColor = '#B290EB';


export const projectDiagramColor = '#FF8080';
export const projectInfoColor = '#8AC6D1';
export const projectDateColor = '#7ED3B2';

export const linkColor = '#55ADDA';

export const green = '#4ABF84';
export const blue = '#3F93EE';
export const yellow = '#FDAE2A';
export const orange = '#FC6921';
export const gray = '#B3B3B3';

const statusColorMap = {
    notStartedStatus: notStartedColor,
    onHoldStatus: onHoldColor,
    onTrackStatus: onTrackColor,
    delayedStatus: delayedColor,
    atRiskStatus: atRiskColor,
    completeStatus: completeColor
};

export function getColorFromStatus(status) {
    return statusColorMap[status];    
}