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

// REGISTER DATA FUNCTIONS

function registerNewProject() {
    navn = 'projectRecord' + recordCount.toString();
    model.projectNewRegister[navn] = [
      model.registerData.actualValue[0],
      model.registerData.actualValue[1],
      model.registerData.actualValue[2],
      model.registerData.actualValue[3],
      model.registerData.actualValue[4],      
    ];
    recordCount++;
}