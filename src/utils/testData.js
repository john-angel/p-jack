import {notStartedStatus, onHoldStatus, onTrackStatus, delayedStatus, atRiskStatus, completeStatus} from './status';
//TODO: Check if delayed status is required
let projects = {
  1: {
    id: 1,
    name: 'Job',
    description: 'Front End developer job',
    startDate: '2019-08-01',
    dueDate: '2021-05-30',
    revenue: 56100,
    status: onTrackStatus
  },
  2: {
    id: 2,
    name: 'House',
    description: 'House in the country side',
    startDate: '2018-04-12',
    dueDate: '2019-12-30',
    revenue: 7600,
    status: delayedStatus
  },
  3: {
    id: 3,
    name: 'Drawing',
    description: 'Improve drawing skills',
    startDate: '2019-06-01',
    dueDate: '2019-12-30',
    revenue: 0,
    status: onHoldStatus
  },
  4: {
    id: 4,
    name: 'Exercise',
    description: 'Establish a work out routine',
    startDate: '2019-06-01',
    dueDate: '2019-12-30',
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
      dueDate: '2021-03-15'
    },
    2: {
      id:'2',
      name: 'Buy domain',
      status: delayedStatus,
      comments: 'www.johnangel.dev bought',
      dueDate: '2021-02-01'
    },
    3: {
      id:'3',
      name: 'Publish portfolio project on domain',
      status: completeStatus,
      comments: 'Jack app published through Netlify',
      dueDate: '2021-03-30'
    },
    4: {
      id:'4',
      name: 'Update Linkedin profile',
      status: atRiskStatus,
      comments: 'Update profile following tips from Udacity and other sources',
      dueDate: '2021-02-28'
    },
    5: {
      id:'5',
      name: 'Make public Linv source code',
      status: atRiskStatus,
      comments: 'Make public code on GitHub',
      dueDate: '2021-02-26'
    },
    6: {
      id:'6',
      name: 'Setup blog',
      status: notStartedStatus,
      comments: 'Setup blog on www.johnangel.dev',
      dueDate: '2021-02-15'
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
      date: '2019-01-13',
      amount: 1500,
      status: atRiskStatus
    },
    2: {
      id: 2,
      name: 'Architect',
      date: '2019-05-20',
      amount: 2300,
      status: onTrackStatus
    },
    3: {
      id: 3,
      name: 'House design',
      date: '2019-07-16',
      amount: 3200,
      status: completeStatus
    },
    4: {
      id: 4,
      name: 'Quote',
      date: '2019-11-30',
      amount: 600,
      status: delayedStatus
    }
  },
  1: {
    1: {
      id: 1,
      name: 'Domain',
      date: '2019-02-15',
      amount: 500,
      status: notStartedStatus
    },
    2: {
      id: 2,
      name: 'Portfolio',
      date: '2019-04-13',
      amount: 20000,
      status: onHoldStatus
    },
    3: {
      id: 3,
      name: 'Profile',
      date: '2019-07-18',
      amount: 35000,
      status: onTrackStatus
    },
    4: {
      id: 4,
      name: 'Blog',
      date: '2019-12-21',
      amount: 600,
      status: atRiskStatus
    }
  }
}

export {projects,tasks,revenue}