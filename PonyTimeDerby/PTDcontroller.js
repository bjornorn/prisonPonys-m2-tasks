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
  rightfulObj = model.registerData.hourActualValue[5];
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
    if (rightfulObj == Object.values(theAProjects)[i].projectName) {
      rightfulObj = Object.values(theAProjects)[i];
      keyCount = Object.keys(rightfulObj).length - 9 + 1;
      datestamp = 'datestamp' + keyCount.toString();
      rightfulObj[datestamp] = model.registerData.hourActualValue;
      console.log(rightfulObj);
      // console.log(datestamp);
    }
  }
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
  theAProjects[navn].sumTimeSpentToday = 0;
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
  ];
}
