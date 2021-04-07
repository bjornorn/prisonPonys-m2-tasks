//ha et felt i modellen som heter "currentPage" og endre den stringen med controllerne
//ha et "hovedview" med if setninger som utifra "currentPage" kicker ut hvilket view som er aktivt
// function mainView(){
// if(currentpage == "hours"){hoursRegisterSheet()}
// if(currentpage == "noe annet"){noeAnnetView()} osv

function hoursRegisterView() {
  updateView();
  hoursRegisterSheetView();
}

function projectRegisterView() {
  updateView();
  projectRegisterPageView();
}

function hoursOverviewView() {
  updateView();
  hoursOverviewPageView();
}

function projectOverviewView() {
  updateView();
  projectOverviewPageView();
}

// REGISTER TIME FUNCTIONS
function registerCurrentHours() {
    calculateWorkTime();
  
  rightfulObj = model.registerData.hourActualValue[5];
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
    if (rightfulObj === Object.values(theAProjects)[i].projectName) {
      
      // old Shool
      rightfulObj = Object.values(theAProjects)[i];     
      keyCount = Object.keys(rightfulObj).length - 11;  
      datestamp = ('datestamp' + keyCount).toString();
      

      rightfulObj[datestamp] = model.registerData.hourActualValue.slice(); 

    
      // console.log(rightfulObj);
      console.log(datestamp);
      // console.log(rightfulObj);      
    }
  
  }  
  updateView();
  hoursRegisterSheetView();
}

// REGISTER PROJECT FUNCTIONS

function registerActiveProject() {
  recordCount++;
  navn = 'projectNo' + recordCount.toString();

  theAProjects[navn] = new Object();
  theAProjects[navn].projectId = model.registerData.actualValue[0];
  theAProjects[navn].projectName = model.registerData.actualValue[1];
  theAProjects[navn].budgetHours = model.registerData.actualValue[2];
  theAProjects[navn].setDeadline = model.registerData.actualValue[3];
  theAProjects[navn].dateCreated = '';
  theAProjects[navn].dateFinished = '';
  theAProjects[navn].sumTimeSpent = 0;
  theAProjects[navn].sumTimeSpentToday = [0, 0];
  theAProjects[navn].projectLeader = '',
  theAProjects[navn].activeParticipants = model.registerData.actualValue[4];
  theAProjects[navn].historicParticipants = [],
  theAProjects[navn].datestampInfo = [
    'dateStamp',
    'startTime',
    'stoptime',
    'pauseTrueFalse',
    'pauseStart',
    'pauseStop',
    'sumHours',
    'sumMinutes',
    'totalTime',
    'participant',
  ];
}

function calculateWorkTime() {
  let startTime = parseInt(model.registerData.hourActualValue[1].substr(0, 2));
  let startMinutt = parseInt(
    model.registerData.hourActualValue[1].substr(3, 2)
  );
  let stopTime = parseInt(model.registerData.hourActualValue[4].substr(0, 2));
  let stopMinutt = parseInt(model.registerData.hourActualValue[4].substr(3, 2));
  let startPauseHour = parseInt(
    model.registerData.hourActualValue[2].substr(0, 2)
  );
  let stopPauseHour = parseInt(
    model.registerData.hourActualValue[3].substr(0, 2)
  );
  let startPauseMinutt = parseInt(
    model.registerData.hourActualValue[2].substr(3, 2)
  );
  let stopPauseMinutt = parseInt(
    model.registerData.hourActualValue[3].substr(3, 2)
  );

  startSum = startTime * 60 + startMinutt;
  stopSum = stopTime * 60 + stopMinutt;

  pauseStartSum = startPauseHour * 60 + startPauseMinutt;
  pauseStopSum = stopPauseHour * 60 + stopPauseMinutt;

  sumPauseMin = pauseStopSum - pauseStartSum;
  totalPauseHour = Math.floor(sumPauseMin / 60);
  totalPauseMin = sumPauseMin - totalPauseHour * 60;

  // if (stopSum < startSum) {
  //   stopSum += 1440; // et døgn er 1440 minutter  // }

  sumMin = stopSum - startSum - (pauseStopSum - pauseStartSum);
  totalHour = Math.floor(sumMin / 60);
  totalMin = sumMin - totalHour * 60;
  // sleepTotalMsg =
  // totalHour.toString() + ' timer og ' + totalMin.toString() + ' min';
  // sleepTotal = totalHour + ':' + totalMin;

  model.registerData.hourActualValue[6] = totalHour;
  model.registerData.hourActualValue[7] = totalMin;
  model.registerData.hourActualValue[8] = totalHour + ':' + totalMin;

  if (sumPauseMin < 1) {
    model.registerData.hourActualValue[6] = false;
  }

  // console.log('timer tot ' + totalHour);
  // console.log('min tot' + totalMin);
}

function calcSpentHrsToday(i) {
  let sumHoursSpentToday = 0;
  let sumMinutesSpentToday = 0;
  // for (let i = 0; i < Object.keys(theAProjects).length; i++) {
  // console.log(Object.keys(Object.values(theAProjects)[i]).length - 12);
  for (
    let j = 1;
    j < Object.keys(Object.values(theAProjects)[i]).length - 11;
    j++
  ) {
    // console.log('what ' + Object.values(theAProjects.projectNo3)[j + 11]);

    if (Object.values(theAProjects)[i]['datestamp' + j][0] == iDag) {
      sumHoursSpentToday =
        sumHoursSpentToday + Object.values(theAProjects)[i]['datestamp' + j][6];
      sumMinutesSpentToday =
        sumMinutesSpentToday +
        Object.values(theAProjects)[i]['datestamp' + j][7];
      // alert ('jippu');
    }
    // console.log('min før' + sumMinutesSpentToday);
    // console.log('timer før' + sumHoursSpentToday)
    if (sumMinutesSpentToday > 59) {
      sumHoursSpentToday++;
      sumMinutesSpentToday = sumMinutesSpentToday - 60;
    }
    // console.log('min etter' + sumMinutesSpentToday)
    // console.log('timer etter' + sumHoursSpentToday)
    //den hellige setning:
    // console.log(Object.values(theAProjects)[i]['datestamp' + j][0])
  }
  Object.values(theAProjects)[i].sumTimeSpentToday[0] = sumHoursSpentToday;
  Object.values(theAProjects)[i].sumTimeSpentToday[1] = sumMinutesSpentToday;

  // console.log('denne ' + Object.values(theAProjects)[i].sumTimeSpentToday)

  // return sumHoursSpentToday;
}

function todayTotalHours() {
  let hourMinute = [0, 0];

  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
    hourMinute[0] += Object.values(theAProjects)[i].sumTimeSpentToday[0];
    hourMinute[1] += Object.values(theAProjects)[i].sumTimeSpentToday[1];

    if (hourMinute[1] > 59) {
      hourMinute[0]++;
      hourMinute[1] = hourMinute[1] - 60;
    }
  }
  // console.log(hourMinute);
  tracking.todayHoursMinutes = hourMinute;
  // console.log(tracking.todayHoursMinutes);
}

function showHoursByMonth() {
if (visningsMnd == undefined) {
  visningsMnd = denneMnd
}
if (visningsAr == undefined) {
  visningsAr = iDag.substr(0,4)
}
hourStats = '';
for (let i = 0; i < Object.keys(theAProjects).length; i++) {
  for (let j = 1; j < Object.keys(Object.values(theAProjects)[i]).length - 11; j++) {
    if (Object.values(theAProjects)[i]['datestamp' + j][0].substr(5,2) == ('0' + (1 + visningsMnd).toString()).slice(-2)
    && (Object.values(theAProjects)[i]['datestamp' + j][0].substr(0,4) == visningsAr)) {
  // console.log('prosjektNo ' + i + 'Timestamp ' + j);
    hourStats += `<tr>
                  <td class="styleTimereg2">${Object.values(theAProjects)[i]['datestamp' + j][0]}</td>
                  <td class="styleTimereg2">${Object.values(theAProjects)[i]['datestamp' + j][1]}</td>
                  <td class="styleTimereg2">${Object.values(theAProjects)[i]['datestamp' + j][2]}</td>
                  <td class="styleTimereg2">${Object.values(theAProjects)[i]['datestamp' + j][3]}</td>
                  <td class="styleTimereg2">${Object.values(theAProjects)[i]['datestamp' + j][4]}</td>
                  <td class="styleTimereg2">${Object.values(theAProjects)[i]['datestamp' + j][5]}</td>
                  <td class="styleTimereg2">${Object.values(theAProjects)[i]['datestamp' + j][8]}</td>
                  </tr>`;
    }
  }
}
}

function forrigeMnd() {
  visningsMnd--
  if (visningsMnd < 0) {
      visningsMnd = visningsMnd +12;
      visningsAr = visningsAr -1;
  }
// console.log(('0' + (1 + visningsMnd).toString()).slice(-2))  
updateView();
hoursOverviewPageView();
}

function nesteMnd() {
  visningsMnd++
  if (visningsMnd > 11) {
      visningsMnd = visningsMnd -12;
      visningsAr = visningsAr +1;
  }
// console.log(('0' + (1 + visningsMnd).toString()).slice(-2))  
updateView();
hoursOverviewPageView();
}

function addUser2Project(n) {
  let selected = document.getElementById('user' + n)
  selected.classList.toggle("selectedUser");

  if (Object.values(userdata)[n].activeInProject == false) {
    Object.values(userdata)[n].activeInProject = true;
    Object.values(model.registerData.actualValue)[4].push(Object.values(userdata)[n].username)
  }

  else if (Object.values(userdata)[n].activeInProject == true) {
    Object.values(userdata)[n].activeInProject = false;
    Object.values(model.registerData.actualValue)[4].pop(Object.values(userdata)[n].username)
  }

}

function showStats(n) {
  projectStats = ''; 

  for (let i = 1; i < Object.keys(Object.values(theAProjects)[n]).length - 11; i++) {
    projectStats += `<tr>
                <td class="style4-2">${
                  Object.values(theAProjects)[n]['datestamp' + i][0]
                }</td>
                <td class="style4-2">${
                  Object.values(theAProjects)[n]['datestamp' + i][1]
                }</td>
                <td class="style4-2">${
                  Object.values(theAProjects)[n]['datestamp' + i][2]
                }</td>
                <td class="style4-2">${
                  Object.values(theAProjects)[n]['datestamp' + i][3]
                }</td>
                <td class="style4-2">${
                  Object.values(theAProjects)[n]['datestamp' + i][4]
                }</td>
                <td class="style4-2">${
                  Object.values(theAProjects)[n]['datestamp' + i][8]
                }</td>    
                 </tr>`;
    }
  updateView();
  projectOverviewPageView();
}