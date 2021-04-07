let html = '';

//***MAIN VIEW***00000
function updateView() {
  todayTotalHours(); //tell opp dagen registrerte timer
  html = '';
  // html += `<div class='header'>${navButtons[0]}</div>`;
  html += `<div class='sidebar'>`;
  for (let i = 0; i < model.navButtons.length; i++) {
    // html += `<div class='navButtons'>${i}</div>`;
    html += `<button class='navButtons' type="button" onclick="${model.navView[i]}()">${model.navButtons[i]}</button>`;
  }
  html += `<div class="userInfo"></br>Logget inn som:<br><b>${model.currentUser.username}</b><br><button>Logg Ut</button></div></div>`;
  document.getElementById('app').innerHTML = html;
}

// ***TIME REGISTRERING VIEW***11111
// TEGNE OPP NY REGISTRERING FELT
function hoursRegisterSheetView() {
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
      calcSpentHrsToday(i);
    }
    todayTotalHours();

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
  for (let i = 0; i < Object.keys(userdata).length; i++) {
    Object.values(userdata)[i].activeInProject = false;
  }

  html += `<div class="projectRegisterSheet"><table class="projectRegisterSheetContent">`;
  for (let i = 0; i < Object.keys(model.projectInfoRegister).length - 5; i++) {
    html += `<tr class="projectRegisterSheetContent"><td>${
      Object.values(model.projectInfoRegister)[i]
    }</td>
        <td><input type="${model.registerData.dataType[i]}"        
        oninput="model.registerData.actualValue[${i}] = this.value"/>
        </td></tr>`;
  }
  html += `<tr><td id="deltagere">Hvem skal delta på prosjektet?</td><td>`;
  for (let i = 0; i < Object.keys(userdata).length; i++) {
    html += `<p id="user${i}" class="allUsers" onclick="addUser2Project(${i})">${Object.values(userdata)[i].username}</p>`
  }
  html += `</td></tr></table>`;
  html += `<button class="clickButton" onclick="registerActiveProject()">Registrer nytt prosjekt</button>`;
  html += `</div>`;
  document.getElementById('app').innerHTML = html;
}

// ***TIME OVERSIKT VIEW***33333
function hoursOverviewPageView() {
  showHoursByMonth();

  html += `<table class="styleMonth"><tr>`;
  html += `<td onclick="forrigeMnd()">Forrige måned</td> `;
  html += `<td><b>${kalenderMnd[visningsMnd]}<br> ${visningsAr}</b></td>`; /* input month for change */
  html += `<td onclick="nesteMnd()">Neste måned</td>`;
  html += `</tr></table>`;

  html += `<div class="infoPlace">`;
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
  html += `</div><div class="infoPlace2"><table>${hourStats}</table>`;
  
  html += ` </div>`;

  document.getElementById('app').innerHTML = html;
}

// ***PROSJEKT OVERSIKT VIEW***44444


function projectOverviewPageView() {
  html += `<div class="infoField4-1"><table class="infoContent4-1"><tr>`;

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

  html += `</table></div><div class="infoField4-2"><table class="infoContent4-1"><tr>`;

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
  }</td>`;
  
  html += `</tr></table></div>`;
  html += `<div class="infoField4-3"><table class="infoContent4-2">${projectStats}</table></div>`;

  document.getElementById('app').innerHTML = html;
}
