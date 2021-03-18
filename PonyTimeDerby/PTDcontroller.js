function hoursRegister() {
    updateView();
    hoursRegisterSheet();
}

//ha et felt i modellen som heter "currentPage" og endre den stringen med controllerne
//ha et "hovedview" med if setninger som utifra "currentPage" kicker ut hvilket view som er aktivt
// function mainView(){
// if(currentpage == "hours"){hoursRegisterSheet()}
// if(currentpage == "noe annet"){noeAnnetView()} osv

function projectRegister() {
    updateView();
    projectRegisterPage();
    
} 

function hoursOverview() {
    updateView();
    hoursOverviewPage();
    
} 

function projectOverview() {
    updateView();
    
}