var registerListMarch = {
    01: [123, '01.03.2021', '08:00', '11:30', '12:00', '16:00', 'PonyTimeDerby'],
    02: [124, '02.03.2021', '08:00', '11:30', '12:00', '16:00', 'PonyTimeDerby'],
    03: [125, '03.03.2021', '08:00', '11:30', '12:00', '16:00', 'PonyTimeDerby'],
    04: [126, '04.03.2021', '08:00', '11:30', '12:00', '16:00', 'PonyTimeDerby'],
    05: [127, '05.03.2021', '08:00', '11:30', '12:00', '16:00', 'PonyTimeDerby'],
};

var registeredToday = {
    01: ['Antall timer', 'Prosjekt'],
    02: ['1', 'PonyTimeDerby'],
    03: ['0.5', 'Bjørns Bryggeblogg'],
    04: ['1', 'Get Academy - Declaration of Freedom'],
    05: ['2', 'PonyTimeDerby'],
  
}; 

currentDate = new Date;

dateIsNow = currentDate.toLocaleDateString();
currentHour = currentDate.getHours();
currentMinute = currentDate.getMinutes();
if (currentMinute < 10) {currentMinute = '0' + currentMinute.toString()} 
timeIsNow = currentHour + ':' + currentMinute;

// new prosject object

let newProjectObject = {
    projectId: 123,
    projectName: 'Pony Derby Time',
    todayDate: '17.03.2021',
    deadlineDate: '08:00',
    contributors: ['Dina', 'Andreas', 'Bjørn'],
    
};