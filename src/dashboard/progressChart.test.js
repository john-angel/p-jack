import { TestScheduler } from 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import ProgressChart from './progressChart';

test('Progress chart UI', () => {
    const component = renderer.create(
        <ProgressChart tasksPercentage='20%' revenuePercentage='50%'></ProgressChart>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('35% on revenue/task completion use 10% of the progress bar', () => {
    let value = '35%';
    const component = new ProgressChart();
    expect(component.getValuePosition(value)).toBe('10%');   
})

test('65% on revenue/task completion use 40% of the progress bar', () => {
    const value = '65%';
    const component = new ProgressChart();
    expect(component.getValuePosition(value)).toBe('40%');
});

test('95% on revenue/task completion use 70% of the progress bar', () => {
    const value = '95%';
    const component = new ProgressChart();
    expect(component.getValuePosition(value)).toBe('70%');
})