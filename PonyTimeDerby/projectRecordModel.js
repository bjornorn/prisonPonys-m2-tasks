const tracking = {
    hourMinute: [ 12, ],

}

const theAProjects = {

projectNo1:  {
projectId:'',
projectName: 'Pony Time Derby',
budgetHours: '50',
setDeadline: '2020-01-02',
dateCreated: '2021-01-02',
dateFinished: '',
sumTimeSpent: 5.50,
sumTimeSpentToday: [5, 30],
datestampInfo: ['dateStamp', 'startTime', 'stoptime', 'pauseTrueFalse', 
                'pauseStart', 'pauseStop', 'sumHours', 'sumMinutes', 'totalTime'],    
datestamp1: ['2021-03-30', 0900, 1500, true, 1130, 1200, 5, 30, 5.30]    
},

projectNo2:  {
projectId:'',
projectName: 'Linn sin kahoot database',
budgetHours: '16',
setDeadline: '2020-01-02',
dateCreated: '2021-03-02',
dateFinished: '',
sumTimeSpent: 11,
sumTimeSpentToday: [5, 30],
datestampInfo: ['dateStamp', 'startTime', 'stoptime', 'pauseTrueFalse', 
                'pauseStart', 'pauseStop', 'sumHours', 'sumMinutes', 'totalTime'],    
datestamp1: ['2021-03-28', 0900, 1500, true, 1130, 1200, 5, 30, 5.30],    
datestamp2: ['2021-03-29', 0900, 1500, true, 1130, 1200, 5, 30, 5.30],    
datestamp3: ['2021-03-30', 0900, 1500, true, 1130, 1200, 5, 30, 5.30],    
datestamp4: ['2021-03-25', 0900, 1500, true, 1130, 1200, 5, 30, 5.30],    
},

projectNo3:  {
projectId:'',
projectName: 'Andreas Ninja Webshop',
budgetHours: '33',
setDeadline: '2020-01-02',
dateCreated: '2020-01-02',
dateFinished: '',
sumTimeSpent: 11,
sumTimeSpentToday: [5, 30],
datestampInfo: ['dateStamp', 'startTime', 'stoptime', 'pauseTrueFalse', 
                'pauseStart', 'pauseStop', 'sumHours', 'sumMinutes', 'totalTime'],    
datestamp1: ['2021-03-30', 0900, 1500, true, 1130, 1200, 5, 30, 5.30],    
datestamp2: ['2021-03-30', 0900, 1500, true, 1130, 1200, 5, 30, 5.30]    
},

} 

let recordCount = Object.keys(theAProjects).length;
