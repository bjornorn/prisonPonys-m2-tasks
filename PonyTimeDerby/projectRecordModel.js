const tracking = {
  todayHoursMinutes: [,],
};

const theAProjects = {
  projectNo1: {
    projectId: '',
    projectName: 'Pony Time Derby',
    budgetHours: '50',
    setDeadline: '2020-01-02',
    dateCreated: '2021-01-02',
    dateFinished: '',
    sumTimeSpent: 0,
    sumTimeSpentToday: [0, 0],
    projectLeader: '',
    activeParticipants: [],
    historicParticipants: [],
    datestampInfo: [
      'dateStamp',
      'startTime',
      'pauseStart',
      'pauseStop',
      'stoptime',
      'projectName',
      'pauseTrueFalse',
      'sumHours',
      'sumMinutes',
      'totalTime',
      'participant',
    ],
    datestamp1: ["2021-03-31", "08:00", "11:30", "12:00", "16:00", "Pony Time Derby", 7, 30, "7:30", "Dina", ""],
  },

  projectNo2: {
    projectId: '',
    projectName: 'Linn sin kahoot database',
    budgetHours: '16',
    setDeadline: '2020-01-02',
    dateCreated: '2021-03-02',
    dateFinished: '',
    sumTimeSpent: 0,
    sumTimeSpentToday: [0 , 0],
    projectLeader: '',
    activeParticipants: [],
    historicParticipants: [],
    datestampInfo: [
      'dateStamp',
      'startTime',
      'pauseStart',
      'pauseStop',
      'stoptime',
      'projectName',
      'pauseTrueFalse',
      'sumHours',
      'sumMinutes',
      'totalTime',
      'participant',
    ],
    datestamp1: ["2021-04-06", "08:00", "11:30", "12:00", "16:00", "Linn sin kahoot database", 7, 30, "7:30", "Andreas", ""],
    datestamp2: ["2021-03-30", "08:00", "11:30", "12:00", "16:00", "Linn sin kahoot database", 7, 30, "7:30", "Dina", ""],
    datestamp3: ["2021-03-29", "08:00", "11:30", "12:00", "16:00", "Linn sin kahoot database", 7, 30, "7:30", "Bjorn", ""],
    datestamp4: ["2021-03-28", "08:00", "11:30", "12:00", "16:00", "Linn sin kahoot database", 7, 30, "7:30", "Andreas", ""],
  },

  projectNo3: {
    projectId: '',
    projectName: 'Andreas Ninja Webshop',
    budgetHours: '33',
    setDeadline: '2020-01-02',
    dateCreated: '2020-01-02',
    dateFinished: '',
    sumTimeSpent: 0,
    sumTimeSpentToday: [0, 0],
    projectLeader: '',
    activeParticipants: [],
    historicParticipants: [],
    datestampInfo: [
      'dateStamp',
      'startTime',
      'pauseStart',
      'pauseStop',
      'stoptime',
      'projectName',
      'pauseTrueFalse',
      'sumHours',
      'sumMinutes',
      'totalTime',
      'participant',
    ],
    datestamp1: ["2021-01-01", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp2: ["2021-01-02", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp3: ["2021-01-03", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp4: ["2021-01-04", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp5: ["2021-01-05", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp6: ["2021-01-06", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp7: ["2021-01-07", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp8: ["2021-01-08", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp9: ["2021-01-09", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp10: ["2021-01-10", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Dina", ""],
    datestamp11: ["2021-01-11", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Dina", ""],
    datestamp12: ["2021-01-12", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Dina", ""],
    datestamp13: ["2021-01-13", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Dina", ""],
    datestamp14: ["2021-01-14", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Dina", ""],
    datestamp15: ["2021-01-15", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Dina", ""],
    datestamp16: ["2021-01-16", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Dina", ""],
    datestamp17: ["2021-01-17", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Dina", ""],
    datestamp18: ["2021-01-18", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Dina", ""],
    datestamp19: ["2021-01-19", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Bjorn", ""],
    datestamp20: ["2021-01-20", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Bjorn", ""],
    datestamp21: ["2021-01-21", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Bjorn", ""],
    datestamp22: ["2021-01-22", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Bjorn", ""],
    datestamp23: ["2021-01-23", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Bjorn", ""],
    datestamp24: ["2021-01-24", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Bjorn", ""],
    datestamp25: ["2021-01-25", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Bjorn", ""],
    datestamp26: ["2021-01-26", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Bjorn", ""],
    datestamp27: ["2021-01-27", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Bjorn", ""],
    datestamp28: ["2021-01-28", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp29: ["2021-01-29", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp30: ["2021-01-30", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
    datestamp31: ["2021-01-31", "08:00", "11:30", "12:00", "16:00", "Andreas Ninja Webshop", 7, 30, "7:30", "Andreas", ""],
  },
  };

userdata = {

  user1: {

    username: 'Dina',
    password: 'Pass1',                                                  
    userType: 'Admin',                       
    userID:   'D007',
    phonenumber: '123',
    email: 'dina@epost.no',
    activeInProject: false,
},
  user2: {

    username: 'Bjorn',
    password: 'Pass2',                                                  
    userType: 'Admin',                       
    userID:   'D008',
    phonenumber: '122',
    email: 'bjorn@epost.no',
    activeInProject: false,
},
  user3: {

    username: 'Andreas',
    password: 'Pass3',                                                  
    userType: 'Admin',                       
    userID:   'D009',
    phonenumber: '123',
    email: 'Andro@epost.no',
    activeInProject: false,
},


}

const theAbsence = {
  projectNo1: {
    projectId: '',
    projectName: 'Syk',
    budgetHours: '',
    setDeadline: '',
    dateCreated: '',
    dateFinished: '',
    sumTimeSpent: 0,
    sumTimeSpentToday: [0, 0],
    projectLeader: '',
    activeParticipants: [],
    historicParticipants: [],
    datestampInfo: [
      'dateStamp',
      'startTime',
      'pauseStart',
      'pauseStop',
      'stoptime',
      'projectName',
      'pauseTrueFalse',
      'sumHours',
      'sumMinutes',
      'totalTime',
      'participant',
    ],
    datestamp1: ["2021-03-31", "08:00", "11:30", "12:00", "16:00", "Syk", 7, 30, "7:30", "Dina", ""],
  },
}

let recordCount = Object.keys(theAProjects).length;
