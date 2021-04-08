//SIDENAVIGERING

//husk a "wrappe" alt i ett object som heter model

//dato og tid del 1
currentDate = new Date();
dateIsNow = currentDate.toLocaleDateString();
currentHour = currentDate.getHours();
currentMinute = currentDate.getMinutes();
timeIsNow = currentHour + ':' + currentMinute;



// dato og tid del 2
let d = ('0' + currentDate.getDate()).slice(-2);
let m = ('0' + (currentDate.getMonth() + 1)).slice(-2);
let y = currentDate.getFullYear();
let iDag = y + '-' + m + '-' + d;

let kalenderMnd = ['Januar','Februar','Mars','April','Mai','juni','juli','August','September','Oktober','November','Desember'];
let denneMnd = iDag.substr(5, 2) -1;
let visningsMnd;
let visningsAr;

let projectStats = '';
let hourStats = '';
let thisMonthsHours = '';
let workOrSick = 'work';


let activeUser = 'Andreas';

const model = {

 
 navButtons: ['Time Registrering', 'Prosjekt Registrering', 'Oversikt Timer', 'Oversikt Prosjekter']
 ,


navView: ['hoursRegisterView', 'projectRegisterView', 'hoursOverviewView', 'projectOverviewView']
,


// TIME OBJEKTER




projectInfoRegister: {
    projectId: 'Lag en Prosjekt ID',
    projectName: 'Gi Prosjektet et navn',
    budgetHours: 'Hvor mange timer er budsjetert',
    setDeadline: 'Når skal prosjektet være ferdig',
    participants: [],
    dateCreated: '',
    dateFinished: '',
    sumTimeSpent: '',
    sumTimeSpentToday: '',
 },

hoursSheetForm: {
     description: ['Dato', 'Tid Startet', 'Pausen Startet', 'Pausen Stoppet', 'Tid Stoppet', 'Navn på prosjekt'],
     hourRecord1: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Pony Time Derby'],
     hourRecord2: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Get Academy - declaration of freedom'],
     hourRecord3: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Dinas nabos borretips - webside'],
     hourRecord4: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Pony Time Derby'],
     hourRecord5: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Andreas Ninja Webshop'],
     hourRecord6: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Linn sin kahoot database'],
     hourRecord7: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Pony Time Derby'],
 },
// PROSJEKT OBJEKTER

projectActiveRegister: {
    description: ['Dato:', 'Navn på prosjekt:', 'Budsjettert timer:', 'Timer brukt:', 'Tidsfrist:', 'DateFinished', 'isFinished'],
    projectRecord1: ['2021-03-23', 'Pony Time Derby', '50', '22', '2021-03-27', '', false],
    projectRecord2: ['2021-03-25', 'Linn sin kahoot database', '25', '6', '2021-03-28', '', false],
    projectRecord3: ['2021-03-29', 'Andreas Ninja Webshop', '45', '2', '2021-04-05', '', false],
},

projectFinishedRegister: {
    description: ['Dato:', 'Navn på prosjekt:', 'Budsjettert timer:', 'Timer brukt:', 'Tidsfrist:', 'DateFinished', 'isFinished'],
    projectRecord1: ['2021-03-23', 'Pony Time Derby', '50', '22', '2021-03-27', '', true],
    projectRecord2: ['2021-03-25', 'Linn sin kahoot database', '25', '6', '2021-03-28', '', true],
    projectRecord3: ['2021-03-29', 'Andreas Ninja Webshop', '45', '2', '2021-04-05', '', true],
},

registerData: {    
    // Til PROSJEKT REGISTRERING
    dataType: ['text', 'text', 'number', 'date', [], 'date', 'number', 'number', 'number'],
    actualValue: ['', '', '', '', [], '', '', '', ''],
    // Til TIME REGISTERING
    datestampNames: [
        'Dato', 
      'Startet', 
        'Pause Startet', 
        'Pause Stoppet', 
        'Ferdig', 
        'Prosjekt Navn',
        'Var det pause',
        'Sum Timer', 
        'Sum Minutter', 
        'Tid Brukt',
        'Deltager'],
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
        'participant'],
    dtProjectActiveRegister: ['Date', 'time', 'time', 'time', 'time', 'select'],
    hourDefaultValue: [iDag, '08:00', '11:30', '12:00', '16:00', '', true, '', '', activeUser, ''],
    hourActualValue: ['', '', '', '', '', '', '', '', '', '', ''],

    monthlyHours: {},

},

users: {

    username: '',
    password: '',                                                  
    userType: '',                       
    userID:   '',
    phonenumber: '',
    email: '',
    activeInProject: false,
},



userTypes : {

    "Admin":{
    userID: '',
    },

    "Team-leder":{
    userID: '', 
        
    },

    "Bruker":{
    userID:'',
        
    },


}
};
let activeProjectsList = '';

// let recordCount = Object.keys(theAProjects).length;

