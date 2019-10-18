import {notStartedStatus, onHoldStatus, onTrackStatus, delayedStatus, atRiskStatus, completeStatus} from '../utils/status';

let projects = [
    {
      id: 1,
      name: 'Rocket',
      description: 'Rocket to Mars',
      start: '2018-01-05',
      plannedEnd: '2019-05-30',
      actualEnd: '2019-05-15',
      status: completeStatus,
      revenue:[]
    },
    {
      id: 2,
      name: 'House',
      description: 'House in the country side',
      start: '2018-04-12',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status: atRiskStatus,
      revenue:[
        {
          date:'Q1',
          amount:1500,
          status:atRiskStatus
        },
        {
          date:'Q2',
          amount:2300,
          status:onTrackStatus
        },
        {
          date:'Q3',
          amount:3200,
          status:completeStatus
        },
        {
          date:'Q4',
          amount:600,
          status:delayedStatus
        }
      ],
    },
    {
      id: 3,
      name: 'Book',
      description: 'Book for children',
      start: '2018-09-20',
      plannedEnd: '2019-04-30',
      actualEnd: '',
      status: notStartedStatus,
      revenue:[]
    },
    {
      id: 4,
      name: 'Job',
      description: 'Front End developer job',
      start: '2019-08-01',
      plannedEnd: '2019-11-30',
      actualEnd: '',
      status: onTrackStatus,
      revenue:[
        {
          date:'Q1',
          amount:500,
          status:notStartedStatus
        },
        {
          date:'Q2',
          amount:20000,
          status:onHoldStatus
        },
        {
          date:'Q3',
          amount:35000,
          status:onTrackStatus
        },
        {
          date:'Q4',
          amount:600,
          status:atRiskStatus
        }        
      ]
    },
    {
      id: 5,
      name: 'Drawing',
      description: 'Improve drawing skills',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status: delayedStatus,
      revenue:[]
    },
    {
      id: 6,
      name: 'Exercise',
      description: 'Establish a work out routine',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status: atRiskStatus,
      revenue:[]
    },
    {
      id: 7,
      name: 'Dancing',
      description: 'Improve dancing skills',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status: atRiskStatus,
      revenue:[]
    },
    {
      id: 8,
      name: 'Car',
      description: 'Buy a car',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status: notStartedStatus,
      revenue:[]
    },
    {
      id: 9,
      name: 'Cooking',
      description: 'Improve cooking skills',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status: onTrackStatus,
      revenue:[]
    },
    {
      id: 10,
      name: 'Writing',
      description: 'Improve writing skills',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status: delayedStatus,
      revenue:[]
    }
]

let tasks = {
  1: {
    1: {
      name: 'Design rocket',
      status: completeStatus,
      comments: 'Drawing made by hand',
      plannedEnd:'2010-09-08',
      actualEnd:'2010-09-08'
    },
    2: {
      name: 'Build rocket',
      status: completeStatus,
      comments: 'Rocket made on paper!',
      plannedEnd:'2010-10-01',
      actualEnd:'2010-10-02'
    }
  },
  4: {
    3: {
      name: 'Build portfolio',
      status: onTrackStatus,
      comments: 'Jack development in progress',
      plannedEnd: '2010-10-30',
      actualEnd: ''
    },
    4: {
      name: 'Buy domain',
      status: completeStatus,
      comments: 'www.johnangel.dev bought',
      plannedEnd: '2010-10-30',
      actualEnd: '2010-10-30'
    },
    5: {
      name: 'Publish portfolio project on domain',
      status: delayedStatus,
      comments: 'Jack app published through Netlify',
      plannedEnd: '2019-10-05',
      actualEnd: ''

    },
    6: {
      name: 'Update Linkedin profile',
      status: onHoldStatus,
      comments: 'Update profile following tips from Udacity and other sources',
      plannedEnd: '2010-10-28',
      actualEnd: ''
    },
    7: {
      name: 'Make public Linv source code',
      status: atRiskStatus,
      comments: 'Make public code on GitHub',
      plannedEnd: '2010-10-20',
      actualEnd: ''

    },
    10: {
      name: 'Setup blog',
      status: notStartedStatus,
      comments: 'Setup blog on www.johnangel.dev',
      plannedEnd: '',
      actualEnd: ''
    }
  },
  5: {
    8: {
      name: 'Copy cartoon',
      status: delayedStatus,
      comments: 'Copy a marvel character',
      plannedEnd:'2010-09-30',
      actualEnd:''
    },
    9: {
      name: 'Draw cartoon',
      status: delayedStatus,
      comments: 'Draw a hero',
      plannedEnd:'2010-10-16',
      actualEnd:''
    }
  },
  6: {
    11: {
      name: 'Go to Gym',
      status: atRiskStatus,
      comments: 'Follow a routine at least 3 times per week',
      plannedEnd:'2010-11-30',
      actualEnd:''
    },
    12: {
      name: 'Swim',
      status: delayedStatus,
      comments: 'Go swimming once per week',
      plannedEnd:'2010-10-05',
      actualEnd:''
    }
  }

}




export {projects,tasks}