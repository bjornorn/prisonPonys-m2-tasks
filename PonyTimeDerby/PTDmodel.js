//SIDENAVIGERING

//husk a "wrappe" alt i ett object som heter model
const model = {

 
 navButtons: ['Time Registrering', 'Prosjekt Registrering', 'Oversikt Timer', 'Oversikt Prosjekter']
 ,


navView: ['hoursRegisterView', 'projectRegisterView', 'hoursOverviewView', 'projectOverviewView']
,


// TIME OBJEKTER

dayTimeRegister: {
    id: 123,
    date: '17.03.2021',
    startDay: '08:00',
    pauseStart: '11:30',
    pauseStop: '12:00',
    stopDay: '16:00',
   projectName: 'Pony Derby Time',
 },

hoursSheetForm: {
     description: ['Dato', 'Dagen Startet', 'Pausen Startet', 'Pausen Stoppet', 'Dagen ferdig', 'Navn på prosjekt'],
     hourRecord1: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Pony Time Derby'],
     hourRecord2: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Get Academy - declaration of freedom'],
     hourRecord3: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Dinas nabos borretips - webside'],
     hourRecord4: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Pony Time Derby'],
     hourRecord5: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Andreas Ninja Webshop'],
     hourRecord6: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Linn sin kahoot database'],
     hourRecord7: ['01.03.2021', '08:00', '11:30', '12:00', '16:00', 'Pony Time Derby'],
 },
// PROSJEKT OBJEKTER

projectNewRegister: {
    description: ['Dato:', 'Navn på prosjekt:', 'Budsjettert timer:', 'Timer brukt:', 'Tidsfrist:'],
    projectRecord1: ['23.03.2021', 'Pony Time Derby', '50', '22', '27.03.2021'],
    projectRecord2: ['25.03.2021', 'Linn sin kahoot database', '25', '6', '28.03.2021'],
    projectRecord3: ['29.03.2021', 'Andreas Ninja Webshop', '45', '2', '05.04.2021'],
},



registerData: {
    dataType: ['Date', 'Text', 'Number', 'Number', 'Date'],
    actualValue: ['', '', '', '', ''],
},
};

let recordCount = Object.keys(model.projectNewRegister).length;