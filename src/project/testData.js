let projects = [
    {
      id: 1,
      name: 'Rocket',
      description: 'Rocket to Mars',
      start: '2018-01-05',
      plannedEnd: '2019-05-30',
      actualEnd: '2019-05-15',
      status:'Complete',
      tasks:[
        {
          id:1,
          projectId:1,//Rocket
          name:'Design rocket',
          status:'Complete',
          comments:'Drawing made by hand'
        },
        {
          id:2,
          projectId:1,//Rocket
          name:'Build rocket',
          status:'Complete',
          comments:'Rocket made on paper!'
        }
      ]
    },
    {
      id: 2,
      name: 'House',
      description: 'House in the country side',
      start: '2018-04-12',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status:'Risk',
      tasks:[]
    },
    {
      id: 3,
      name: 'Book',
      description: 'Book for children',
      start: '2018-09-20',
      plannedEnd: '2019-04-30',
      actualEnd: '',
      status:'NotStarted',
      tasks:[]
    }
    ,
    {
      id: 4,
      name: 'Job',
      description: 'Front End developer job',
      start: '2019-08-01',
      plannedEnd: '2019-11-30',
      actualEnd: '',
      status:'OnTrack',
      tasks:[
        {
          id:3,
          name:'Build portfolio',
          status:'OnTrack',
          comments:'P-Jack development in progress'
        },
        {
          id:4,
          name:'Buy domain',
          status:'Complete',
          comments:'www.johnangel.dev bought'
        },
        {
          id:5,
          name:'Publish portfolio project on domain',
          status:'OnTrack',
          comments:'P-Jack source code published through Netlify'
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
      status:'Delayed',
      tasks:[
        {
          id: 6,
          name: 'Copy cartoon',
          status: 'Delayed',
          comments: 'Copy a marvel character'
        },
        {
          id: 7,
          name: 'Draw cartoon',
          status: 'Delayed',
          comments: 'Draw a hero'
        }
      ]
    },
    {
      id: 6,
      name: 'Swimming',
      description: 'Improve swimming skills',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status:'Complete',
      tasks:[]
    },
    {
      id: 7,
      name: 'Dancing',
      description: 'Improve dancing skills',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status:'Risk',
      tasks:[]
    },
    {
      id: 8,
      name: 'Car',
      description: 'Buy a car',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status:'NotStarted',
      tasks:[]
    },
    {
      id: 9,
      name: 'Cooking',
      description: 'Improve cooking skills',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status:'OnTrack',
      tasks:[]
    },
    {
      id: 10,
      name: 'Writing',
      description: 'Improve writing skills',
      start: '2019-06-01',
      plannedEnd: '2019-12-30',
      actualEnd: '',
      status:'Delayed',
      tasks:[]
    }
]

export {projects}