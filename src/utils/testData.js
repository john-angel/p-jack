import {notStartedStatus, onHoldStatus, onTrackStatus, delayedStatus, atRiskStatus, completeStatus} from './status';

let projects = {
  1: {
    id: 1,
    name: 'Rocket',
    description: 'Rocket to Mars',
    start: '2018-01-05',
    due: '2019-05-30',
    status: completeStatus
  },
  2: {
    id: 2,
    name: 'House',
    description: 'House in the country side',
    start: '2018-04-12',
    due: '2019-12-30',
    status: atRiskStatus
  },
  3: {
    id: 3,
    name: 'Book',
    description: 'Book for children',
    start: '2018-09-20',
    due: '2019-04-30',
    status: notStartedStatus
  },
  4: {
    id: 4,
    name: 'Job',
    description: 'Front End developer job',
    start: '2019-08-01',
    due: '2019-11-30',
    status: onTrackStatus
  },
  5: {
    id: 5,
    name: 'Drawing',
    description: 'Improve drawing skills',
    start: '2019-06-01',
    due: '2019-12-30',
    status: delayedStatus
  },
  6: {
    id: 6,
    name: 'Exercise',
    description: 'Establish a work out routine',
    start: '2019-06-01',
    due: '2019-12-30',
    status: atRiskStatus
  },
  7: {
    id: 7,
    name: 'Dancing',
    description: 'Improve dancing skills',
    start: '2019-06-01',
    due: '2019-12-30',
    status: atRiskStatus
  },
  8: {
    id: 8,
    name: 'Car',
    description: 'Buy a car',
    start: '2019-06-01',
    due: '2019-12-30',
    status: notStartedStatus
  },
  9: {
    id: 9,
    name: 'Cooking',
    description: 'Improve cooking skills',
    start: '2019-06-01',
    due: '2019-12-30',
    status: onTrackStatus
  },
  10: {
    id: 10,
    name: 'Writing',
    description: 'Improve writing skills',
    start: '2019-06-01',
    due: '2019-12-30',
    status: delayedStatus
  }
}

let tasks = {
  1: {
    1: {
      id:'1',
      name: 'Design rocket',
      status: completeStatus,
      comments: 'Drawing made by hand',
      due:'2010-09-08'
    },
    2: {
      id:'2',
      name: 'Build rocket',
      status: completeStatus,
      comments: 'Rocket made on paper!',
      due:'2010-10-01'
    }
  },
  4: {
    3: {
      id:'3',
      name: 'Build portfolio',
      status: onTrackStatus,
      comments: 'Jack development in progress',
      due: '2010-10-30'
    },
    4: {
      id:'4',
      name: 'Buy domain',
      status: completeStatus,
      comments: 'www.johnangel.dev bought',
      due: '2010-10-30'
    },
    5: {
      id:'5',
      name: 'Publish portfolio project on domain',
      status: delayedStatus,
      comments: 'Jack app published through Netlify',
      due: '2019-10-05'
    },
    6: {
      id:'6',
      name: 'Update Linkedin profile',
      status: onHoldStatus,
      comments: 'Update profile following tips from Udacity and other sources',
      due: '2010-10-28'
    },
    7: {
      id:'7',
      name: 'Make public Linv source code',
      status: atRiskStatus,
      comments: 'Make public code on GitHub',
      due: '2010-10-20'
    },
    10: {
      id:'10',
      name: 'Setup blog',
      status: notStartedStatus,
      comments: 'Setup blog on www.johnangel.dev',
      due: ''
    }
  },
  5: {
    8: {
      id:'8',
      name: 'Copy cartoon',
      status: delayedStatus,
      comments: 'Copy a marvel character',
      due:'2010-09-30'
    },
    9: {
      id:'9',
      name: 'Draw cartoon',
      status: delayedStatus,
      comments: 'Draw a hero',
      due:'2010-10-16'
    }
  },
  6: {
    11: {
      id:'11',
      name: 'Go to Gym',
      status: atRiskStatus,
      comments: 'Follow a routine at least 3 times per week',
      due:'2010-11-30'
    },
    12: {
      id:'12',
      name: 'Swim',
      status: delayedStatus,
      comments: 'Go swimming once per week',
      due:'2010-10-05'
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
  4: {
    5: {
      id: 5,
      name: 'Domain',
      date: '2019-02-15',
      amount: 500,
      status: notStartedStatus
    },
    6: {
      id: 6,
      name: 'Portfolio',
      date: '2019-04-13',
      amount: 20000,
      status: onHoldStatus
    },
    7: {
      id: 7,
      name: 'Profile',
      date: '2019-07-18',
      amount: 35000,
      status: onTrackStatus
    },
    8: {
      id: 8,
      name: 'Blog',
      date: '2019-12-21',
      amount: 600,
      status: atRiskStatus
    }
  }
}

export {projects,tasks,revenue}