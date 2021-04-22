let html = '';

//***MAIN VIEW***00000
function updateView() {
  todayTotalHours(); //tell opp dagen registrerte timer

  html = '';
  // html += `<div class='header'>${navButtons[0]}</div>`;
  html += `<div class='sidebar'>`;
  for (let i = 0; i < model.navButtons.length; i++) {
    // html += `<div class='navButtons'>${i}</div>`;
    html += `<button id="navButton${i}" class='navButtons link' type="button" onclick="${model.navView[i]}(); selectedNavButton(${i})">${model.navButtons[i]}</button>`;
  }
  html += `<div class="userInfo"></br>Logget inn som:<br></br>${activeUser}<br><br><button class="link">Logg Ut</button></div></div>`;
  
  // selectedNavButton(model.selectedPage);
  // console.log(model.selectedPage);
  
  document.getElementById('app').innerHTML = html;
}

// ***TIME REGISTRERING VIEW***11111
// TEGNE OPP NY REGISTRERING FELT
function hoursRegisterSheetView() {
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
      calcSpentHrsToday(i);
    }
    todayTotalHours();
    
   
    if (workOrSick == 'work') {workRegister()};
    if (workOrSick == 'sick') {sickRegister()};
    
  

  // TEGNE OPP "TIMER I DAG FELT"
  html += `<div class="todaysHoursClass"><h3>Registrerte timer i dag:</h3>`;
  html += `<table><tr><td class="style1">Prosjekt Navn:</td><td class="style2">Timer, Minutter</td></tr>
  `;
  // let todaysHours = 0;
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
    html += `<tr><td class="style1">${Object.values(theAProjects)[i].projectName}
            </td> 
             <td class="style2">${Object.values(theAProjects)[i].sumTimeSpentToday}</td></tr>`;
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

function workRegister() {
  model.registerData.hourActualValue = model.registerData.hourDefaultValue;
  html += `<div class="hoursRegisterSheet">`;
  html += `<div><h2>Ny Registrering - Arbeid</h2></div>`;
  html += `<table class="hoursRegisterSheetContentWork">`;
  for (let i = 0; i < model.hoursSheetForm.description.length; i++) {
    html += `<tr><td>${
      Object.values(model.hoursSheetForm.description)[i]
    }:</td></tr>`;
  }
  html += `</table><table class="hoursRegisterSheetContentWork">
          <tr><td><input type="checkbox" value="false" 
            onclick="pauseCheckBox()" ${model.registerData.pauseCheckBox.checked}></input>
          </td></tr>            `;
  for (let i = 0; i < model.hoursSheetForm.description.length - 2; i++) {
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
  html += `<button class="button2 link" onclick="workOrSick = 'sick'; updateView(); hoursRegisterSheetView();">Trykk her for å registrere fravær</button>`;
  html += `<button class="button link" onclick="registerCurrentHours()">Registrer</button>`;
  html += `</div>`;
}

function sickRegister() {
  model.registerData.sickHourActualValue = model.registerData.sickHourDefaultValue;
  html += `<div class="hoursRegisterSheet">`;
  html += `<div><h2>Ny Registrering - Fravær</h2></div>`;
  html += `<table class="hoursRegisterSheetContentSick">
            <tr><td>Fravær hele dagen:</td>
            <td><input type="checkbox" value="false" 
            onclick="sickCheckBox()" ${model.registerData.sickCheckBox.checked}></input>
            </td>
            </tr>`;
  for (let i = 0; i < model.hoursSheetForm.sickDescription.length; i++) {
    html += `<tr>
                  <td>
                    ${Object.values(model.hoursSheetForm.sickDescription)[i]}:
                  </td>
           <td>
                    <input id="sickInput${i}" type="${model.registerData.sickProjectActiveRegister[i]}"
                    value="${model.registerData.sickHourDefaultValue[i]}" 
                    oninput="model.registerData.sickHourActualValue[${i}] = this.value"/>
                  </td>
                </tr>`;
  }

  //Dropdown meny
  html += `<tr><td>Årsak til fravær</td><td><select id="psel" style="width: 200px" oninput="model.registerData.sickHourActualValue[${5}] = this.value">`;
  for (let i = 0; i < Object.keys(theAbsence).length; i++) {
    html += `<option ${i}>${Object.values(theAbsence)[i].projectName}</option>`;
  }
  // value="${Object.values(theAProjects)[i].projectName}" LA STÅ!

  html += `<option selected="selected"></option></select></tr></td>`;
  html += `</table>`;
  html += `<button class="button2 link" onclick="workOrSick = 'work'; updateView(); hoursRegisterSheetView();">Trykk her for å registrere vanlige timer</button>`;
  html += `<button class="button link" onclick="registerCurrentHoursSick()">Registrer</button>`;
  html += `</div>`;

  
}
// ***PROSJEKT REGISTERING VIEW***22222
function projectRegisterPageView() {
  for (let i = 0; i < Object.keys(userdata).length; i++) {
    Object.values(userdata)[i].activeInProject = false;
  }
  
  html += `<div class="projectRegisterSheet"><table class="projectRegisterSheetContent">`;
  for (let i = 0; i < Object.keys(model.projectInfoRegister).length - 5; i++) {
    html += `<tr class="projectRegisterSheetContent"><td>${Object.values(model.projectInfoRegister)[i]}</td>
        <td><input type="${model.registerData.dataType[i]}" oninput="model.registerData.actualValue[${i}] = this.value"/></td>
        </tr>`;
  }
  html += `<tr><td id="deltagere">Hvem skal delta på prosjektet?</td><td>`;
  for (let i = 0; i < Object.keys(userdata).length; i++) {
    html += `<p id="user${i}" class="allUsers link" onclick="addUser2Project(${i})">${Object.values(userdata)[i].username}</p>`
  }
  html += `</td></tr></table>`;
  html += `<button class="clickButton link" onclick="registerActiveProject()">Registrer nytt prosjekt</button>`;
  html += `</div>`;
  document.getElementById('app').innerHTML = html;
}

// ***TIME OVERSIKT VIEW***33333
function hoursOverviewPageView() {
  showHoursByMonth();

  html += `<table class="styleMonth"><tr>`;
  html += `<td class="link" onclick="forrigeMnd()">Forrige måned</td> `;
  html += `<td><b>${kalenderMnd[visningsMnd]}<br> ${visningsAr}</b></td>`; /* input month for change */
  html += `<td class="link" onclick="nesteMnd()">Neste måned</td>`;
  html += `</tr></table>`;

  html += `<div class="infoPlace0"><table>
          <tr>
              <td class="styleTimereg0">Antall timer: </td>
          </tr>
          <tr>
              <td class="styleTimereg0">Jobbet: ${thisMonthsHours}</td> 
              <td class="styleTimereg0">Syk: ${thisMonthsSickHours[0]}</td>
          </tr>
          <tr>     
              <td class="styleTimereg0">Fravær med lønn: ${thisMonthsSickHours[1]}</td> 
              <td class="styleTimereg0">Fravær uten lønn: ${thisMonthsSickHours[2]}</td> 
          </tr>
          <tr>
              <td class="styleTimereg0">Ferie: ${thisMonthsSickHours[3]}</td> 
              <td class="styleTimereg0">Timebank:</td>
          </tr>
              </table></div>`;

  html += `<div class="infoPlace1">`;
  html += `<table>`;

  
    html += `
    <td class="styleTimereg1">${Object.values(model.registerData.datestampNames)[0]}</td>
    <td class="styleTimereg1">${Object.values(model.registerData.datestampNames)[1]}</td>
    <td class="styleTimereg1">${Object.values(model.registerData.datestampNames)[2]}</td>
    <td class="styleTimereg1">${Object.values(model.registerData.datestampNames)[3]}</td>
    <td class="styleTimereg1">${Object.values(model.registerData.datestampNames)[4]}</td>
    <td class="styleTimereg1">${Object.values(model.registerData.datestampNames)[5]}</td>
    <td class="styleTimereg1">${Object.values(model.registerData.datestampNames)[9]}</td>
    `;
  
  html += `</table>`;
  html += `</div><div class="infoPlace2"><table class="styleTimereg3">${hourStats}${hourSickStats}</table>`;
  
  html += ` </div>`;

  document.getElementById('app').innerHTML = html;
}

// ***PROSJEKT OVERSIKT VIEW***44444
function projectOverviewPageView() {
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
    showProjectTotalHrs(i)
  }
  html += `<div class="infoField4-1"><table class="infoContent4-1"><tr>`;

  for (let i = 0; i < Object.values(model.projectActiveRegister)[0].length - 2; i++) {
    html += `<td class="style4-1">${Object.values(model.projectActiveRegister)[0][i]}
            </td>`;
  }
// legger til style tag for og se om det gjør en endring //
  html += `</tr>`;
  // n = 0;
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
    html += `<tr id="statsRow${i}">
                  <td class="style4-2">${Object.values(theAProjects)[i].dateCreated}
                  </td>
                  <td class="style4-2 link" onclick="showStats(${i})">${Object.values(theAProjects)[i].projectName}
                  </td>
                  <td class="style4-2">${Object.values(theAProjects)[i].budgetHours}
                  </td>
                  <td class="style4-2">${Object.values(theAProjects)[i].sumTimeSpent}
                  </td>
                  <td class="style4-2">${Object.values(theAProjects)[i].setDeadline}
                  </td>             
              </tr>`;
  }

  html += `</table><div id="whatProjectsButton" class="link">Bytt til <br>ferdige <br>prosjekter</div></div><div class="infoField4-2"><table class="infoContent4-2"><tr>`;

  html += `
  <td class="style4-2">${Object.values(model.registerData.datestampNames)[0]}</td>
  <td class="style4-2">${Object.values(model.registerData.datestampNames)[1]}</td>
  <td class="style4-2">${Object.values(model.registerData.datestampNames)[2]}</td>
  <td class="style4-2">${Object.values(model.registerData.datestampNames)[3]}</td>
  <td class="style4-2">${Object.values(model.registerData.datestampNames)[4]}</td>
  <td class="style4-2">${Object.values(model.registerData.datestampNames)[9]}</td>
  <td class="style4-2">${Object.values(model.registerData.datestampNames)[10]}</td>`;
  
  html += `</tr></table></div>`;
  html += `<div class="infoField4-3"><table class="infoContent4-2">${projectStats}</table></div>`;

  document.getElementById('app').innerHTML = html;
}
