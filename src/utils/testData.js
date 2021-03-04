import {notStartedStatus, onHoldStatus, onTrackStatus, delayedStatus, atRiskStatus, completeStatus} from './status';
import {backlog, inProgress, done} from './board';

//TODO: Check if delayed status is required
let projects = {
  1: {
    id: 1,
    name: 'Job',
    description: 'Front End developer job',
    startDate: '2019-08-01',
    finishDate: '2021-05-30',
    revenue: 56100,    
    status: onTrackStatus
  },
  2: {
    id: 2,
    name: 'House',
    description: 'House in the country side',
    startDate: '2018-04-12',
    finishDate: '2019-12-30',
    revenue: 7600,
    status: delayedStatus
  },
  3: {
    id: 3,
    name: 'Drawing',
    description: 'Improve drawing skills',
    startDate: '2019-06-01',
    finishDate: '2019-12-30',
    revenue: 0,
    status: onHoldStatus
  },
  4: {
    id: 4,
    name: 'Exercise',
    description: 'Establish a work out routine',
    startDate: '2019-06-01',
    finishDate: '2019-12-30',
    revenue: 0,
    status: atRiskStatus
  }  
}

let tasks = {
  1: {
    1: {
      id:'1',
      name: 'Build portfolio',
      status: onTrackStatus,
      comments: 'Jack development in progress',
      dueDate: '2021-03-15',
      boardList: inProgress
    },
    2: {
      id:'2',
      name: 'Buy domain',
      status: delayedStatus,
      comments: 'www.johnangel.dev bought',
      dueDate: '2021-02-01',
      boardList: backlog
    },
    3: {
      id:'3',
      name: 'Publish portfolio project on domain',
      status: completeStatus,
      comments: 'Jack app published through Netlify',
      dueDate: '2021-03-30',
      boardList: inProgress
    },
    4: {
      id:'4',
      name: 'Update Linkedin profile',
      status: atRiskStatus,
      comments: 'Update profile following tips from Udacity and other sources',
      dueDate: '2021-02-28',
      boardList: inProgress,
    },
    5: {
      id:'5',
      name: 'Make public Linv source code',
      status: atRiskStatus,
      comments: 'Make public code on GitHub',
      dueDate: '2021-02-26',
      boardList: backlog
    },
    6: {
      id:'6',
      name: 'Setup blog',
      status: notStartedStatus,
      comments: 'Setup blog on www.johnangel.dev',
      dueDate: '2021-02-15',
      boardList: done
    }
  },
  3: {
    1: {
      id:'1',
      name: 'Copy cartoon',
      status: delayedStatus,
      comments: 'Copy a marvel character',
      dueDate:'2010-09-30'
    },
    2: {
      id:'2',
      name: 'Draw cartoon',
      status: delayedStatus,
      comments: 'Draw a hero',
      dueDate:'2010-10-16'
    }
  },
  4: {
    1: {
      id:'1',
      name: 'Go to Gym',
      status: atRiskStatus,
      comments: 'Follow a routine at least 3 times per week',
      dueDate:'2010-11-30'
    },
    2: {
      id:'2',
      name: 'Swim',
      status: delayedStatus,
      comments: 'Go swimming once per week',
      dueDate:'2010-10-05'
    }
  }
}

let revenue = {
  2: {
    1: {
      id: 1,
      name: 'Land',
      date: 'Q1',
      amount: 1500,
      status: completeStatus
    },
    2: {
      id: 2,
      name: 'Architect',
      date: 'Q2',
      amount: 2300,
      status: onTrackStatus
    },
    3: {
      id: 3,
      name: 'Materials',
      date: 'Q3',
      amount: 3200,
      status: atRiskStatus
    },
    4: {
      id: 4,
      name: 'Quote',
      date: 'Q4',
      amount: 600,
      status: onHoldStatus
    }
  },
  1: {
    1: {
      id: 1,
      name: 'Domain',
      date: 'Q1',
      amount: 1000000,
      status: atRiskStatus
    },
    2: {
      id: 2,
      name: 'Portfolio',
      date: 'Q2',
      amount: 100000,
      status: onHoldStatus
    },
    3: {
      id: 3,
      name: 'Profile',
      date: 'Q3',
      amount: 80500,
      status: onTrackStatus
    },
    4: {
      id: 4,
      name: 'Blog',
      date: 'Q4',
      amount: 1300000,
      status: delayedStatus
    }
  }  
}

export {projects,tasks,revenue}