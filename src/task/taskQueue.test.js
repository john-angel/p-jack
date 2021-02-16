import TaskQueue from './taskQueue';
import {notStartedStatus,onHoldStatus,onTrackStatus,delayedStatus,atRiskStatus, statusPriorityEnum, completeStatus} from '../utils/status';



const task1 = {
    id: '1',
    name: 'Build portfolio',
    status: statusPriorityEnum[onTrackStatus],
    comments: 'Jack development in progress',
    dueDate: new Date('2021','03','15')
};

const task2 = {
    id: '2',
    name: 'Buy domain',
    status: statusPriorityEnum[delayedStatus],
    comments: 'www.johnangel.dev bought',
    dueDate: new Date('2021','02','01')
};

const task3 = {
    id: '3',
    name: 'Publish portfolio project on domain',
    status: statusPriorityEnum[completeStatus],
    comments: 'Jack app published through Netlify',
    dueDate: new Date('2021', '03', '30')
}


test('Add 3 tasks to the queue with onTrackStatus, delayedStatus, and completeStatus priorities. The task with delayedStatus priority has to be the first element in the queue', () => {
    let queue = new TaskQueue();
    
    queue.add(task1);
    queue.add(task2);
    queue.add(task3);

    let element = queue.front();
    expect(element.name).toBe('Buy domain');
    
    expect(queue.size()).toBe(3);
  });

  test('Test that the queue stores the 3 tasks passed', () => {
    let queue = new TaskQueue();
    
    queue.add(task1);
    queue.add(task2);
    queue.add(task3);

    expect(queue.size()).toBe(3);
  });

  
