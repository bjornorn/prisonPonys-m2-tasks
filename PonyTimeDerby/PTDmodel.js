//SIDENAVIGERING

//husk a "wrappe" alt i ett object som heter model

const navButtons = [
    "Time Registrering",
    "Prosjekt Registrering",
    "Oversikt Timer",
    "Oversikt Prosjekter", 
]

const navView = ['hoursRegister', 'projectRegister', 'hoursOverview', 'projectOverview'];


// TIME OBJEKTER

let dayTimeRegister = {
    id: 123,
    date: '17.03.2021',
    startDay: '08:00',
    pauseStart: '11:30',
    pauseStop: '12:00',
    stopDay: '16:00',
    projectName: 'Pony Derby Time',
};

let hoursSheetForm = ['Dato', 'Dagen Startet', 'Pausen Startet', 'Pausen Stoppet', 'Dagen ferdig', 'Navn på prosjekt'];