let html = '';

//***MAIN VIEW***00000
function updateView() {
  todayTotalHours(); //tell opp dagen registrerte timer
  console.log('timer telt')
  html = '';
  // html += `<div class='header'>${navButtons[0]}</div>`;
  html += `<div class='sidebar'>`;
  for (let i = 0; i < model.navButtons.length; i++) {
    // html += `<div class='navButtons'>${i}</div>`;
    html += `<button class='navButtons' type="button" onclick="${model.navView[i]}()">${model.navButtons[i]}</button>`;
  }
  html += `</div>`;
  document.getElementById('app').innerHTML = html;
}

// ***TIME REGISTRERING VIEW***11111
// TEGNE OPP NY REGISTRERING FELT
function hoursRegisterSheetView() {
  model.registerData.hourActualValue = model.registerData.hourDefaultValue;
  html += `<div class="hoursRegisterSheet">`;
  html += `<div><h2>Ny Registrering</h2></div>`;
  html += `<table class="hoursRegisterSheetContent">`;
  for (let i = 0; i < model.hoursSheetForm.description.length; i++) {
    html += `<tr><td>${
      Object.values(model.hoursSheetForm.description)[i]
    }:</td></tr>`;
  }
  html += `</table><table class="hoursRegisterSheetContent2">`;
  for (let i = 0; i < model.hoursSheetForm.description.length - 1; i++) {
    html += `<tr><td><input type="${model.registerData.dtProjectActiveRegister[i]}"
              value="${model.registerData.hourDefaultValue[i]}" 
              oninput="model.registerData.hourActualValue[${i}] = this.value"/></td></tr>`;
  }
  //Dropdown meny
  html += `<tr><td><select id="psel" style="width: 200px" oninput="model.registerData.hourActualValue[${5}] = this.value">`;
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
    html += `<option ${i}>${
      Object.values(theAProjects)[i].projectName
    }</option>`;
  }
  // value="${Object.values(theAProjects)[i].projectName}" LA STÅ!

  html += `<option selected="selected"></option></select></tr></td>`;
  html += `</table>`;
  html += `<button class="button" onclick="registerCurrentHours()">Registrer</button>`;
  html += `</div>`;

  // TEGNE OPP "TIMER I DAG FELT"
  html += `<div class="todaysHoursClass"><h3>Registrerte timer i dag:</h3>`;
  html += `<table><tr><td class="style1">Prosjekt Navn:</td><td class="style2">Timer, Minutter</td></tr>
  `;
  // let todaysHours = 0;
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
    html += `<tr><td class="style1">${
      Object.values(theAProjects)[i].projectName
    }</td> 
             <td class="style2">${
               Object.values(theAProjects)[i].sumTimeSpentToday
             }</td></tr>`;
    // todaysHours += parseFloat(Object.values(theAProjects)[i].sumTimeSpentToday);
  }

  html += `<tr><td class="style1">&nbsp</td><td class="style2">&nbsp</td></tr>`;
  html += `<tr><td class="style1">Sum Timer</td><td class="style2">${tracking.todayHoursMinutes}</td>`;
  html += `</tr></table></div>`;

  // TEGNE OPP "KALENDER FELT"
  html += `<div class="infoFieldClass">`;
  html += `<div><h3>Timeregistering:</h3></div>`;
  html += `<div>I dag er det ${dateIsNow}</div><br>`;
  html += `<div>Klokken er: ${timeIsNow}</div>`;
  html += `</div>`;
  document.getElementById('app').innerHTML = html;
}
// ***PROSJEKT REGISTERING VIEW***22222
function projectRegisterPageView() {
  html += `<div class="projectRegisterSheet"><table class="projectRegisterSheetContent">`;
  for (let i = 0; i < Object.keys(model.projectInfoRegister).length - 4; i++) {
    html += `<tr class="projectRegisterSheetContent"><td>${
      Object.values(model.projectInfoRegister)[i]
    }</td>
        <td><input type="${model.registerData.dataType[i]}"
        
        oninput="model.registerData.actualValue[${i}] = this.value"/>
        </td></tr>`;
  }
  html += `</table>`;
  html += `<button class="clickButton" onclick="registerActiveProject()">Registrer nytt prosjekt</button>`;
  html += `</div>`;
  document.getElementById('app').innerHTML = html;
}

// ***TIME OVERSIKT VIEW***33333
function hoursOverviewPageView() {
  html += `<table class="styleMonth"><tr>`;
  html += `<td><a href="#"> Forrige måned</a></td> `;
  html += `<td><div><b>Janumary</b></div></td>`; /* input month for change */
  html += `<td><a href="#">Neste måned</a></td>`;
  html += `</tr></table>`;
  html += `<div class="TimeRegister">`;
  html += `<table><tr>`;

  for (let i = 0; i < Object.values(hoursJanuary.dInfo).length; i++) {
    html += `<td class="styleTimereg">${
      Object.values(hoursJanuary.dInfo)[i]
    }</td>`;
  }
  html += `</tr></table>`;
  html += `<div class="TimeRegister2">`;
  html += `<table>`;

  for (let i = 1; i < Object.keys(hoursJanuary).length; i++) {
    html += `<tr>
       <td class="styleTimereg">${Object.values(hoursJanuary)[i][0]}</td>
       <td class="styleTimereg">${Object.values(hoursJanuary)[i][1]}</td>
       <td class="styleTimereg">${Object.values(hoursJanuary)[i][2]}</td>
       <td class="styleTimereg">${Object.values(hoursJanuary)[i][3]}</td>
       <td class="styleTimereg">${Object.values(hoursJanuary)[i][4]}</td>
       <td class="styleTimereg">${Object.values(hoursJanuary)[i][5]}</td>       
            </tr>`;
  }

  html += `</table> </div></div>`;

  document.getElementById('app').innerHTML = html;
}

// ***PROSJEKT OVERSIKT VIEW***44444
function showStats(n) {
  projectStats = '';

  for (
    let i = 1;
    i < Object.keys(Object.values(theAProjects)[n]).length - 8;
    i++
  ) {
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

function projectOverviewPageView() {
  html += `<div class="projectInsightSheet"><table class="projectInsightSheetContent"><tr>`;

  for (
    let i = 0;
    i < Object.values(model.projectActiveRegister)[0].length - 2;
    i++
  ) {
    html += `<td class="style4-2">${
      Object.values(model.projectActiveRegister)[0][i]
    }</td>`;
  }

  html += `</tr>`;
  // n = 0;
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
    html += `<tr>
                  <td class="style4-2">${
                    Object.values(theAProjects)[i].dateCreated
                  }</td>
                  <td class="style4-2" onclick="showStats(${i})">${
      Object.values(theAProjects)[i].projectName
    }</td>
                  <td class="style4-2" onclick="alert('kake')">${
                    Object.values(theAProjects)[i].budgetHours
                  }</td>
                  <td class="style4-2">${
                    Object.values(theAProjects)[i].sumTimeSpent
                  }</td>
                  <td class="style4-2">${
                    Object.values(theAProjects)[i].setDeadline
                  }</td>             
                 </tr>`;
  }

  html += `</table></div><div class="projectInsightSheet2"><table class="projectInsightSheetContent"><tr>`;

  html += `
  <td class="style4-2">${
    Object.values(model.registerData.datestampNames)[0]
  }</td>
  <td class="style4-2">${
    Object.values(model.registerData.datestampNames)[1]
  }</td>
  <td class="style4-2">${
    Object.values(model.registerData.datestampNames)[2]
  }</td>
  <td class="style4-2">${
    Object.values(model.registerData.datestampNames)[3]
  }</td>
  <td class="style4-2">${
    Object.values(model.registerData.datestampNames)[4]
  }</td>


  <td class="style4-2">${
    Object.values(model.registerData.datestampNames)[9]
  }</td>
  </tr>`;

  html += projectStats;
  html += `</table></div>`;

  document.getElementById('app').innerHTML = html;
}
