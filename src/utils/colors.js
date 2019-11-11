
export const notStartedColor = '#EBEBEB';
export const onHoldColor = '#CFCFCF';
export const onTrackColor = '#7ED3B2';
export const delayedColor = '#FF8080';
export const atRiskColor = '#FFBA92';
export const completeColor = '#8AC6D1';

export const projectDiagramColor = '#FF8080';
export const projectInfoColor = '#8AC6D1';
export const projectDateColor = '#7ED3B2';

export const linkColor = '#3579F6';

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