let html = '';

//***MAIN VIEW***
function updateView() {
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

// ***TIME REGISTRERING VIEW***
// TEGNE OPP NY REGISTRERING FELT
function hoursRegisterSheetView() {
  html += `<div class="hoursRegisterSheet">`;
  html += `<div><h2>Ny Registrering</h2></div>`;
  html += `<table class="hoursRegisterSheetContent">`;
  for (let i = 0; i < model.hoursSheetForm.length; i++) {
    html += `<tr><td>${
      Object.values(hoursSheetForm.description)[i]
    }:</td><td><input type="text"></td></tr>`;
    alert('kake');
  }
  html += `</table>`;
  html += `<button class="button">Registrer</button>`;
  html += `</div>`;

  // TEGNE OPP "TIMER I DAG FELT"
  html += `<div class="todaysHoursClass"><h3>Registrerte timer i dag:</h3>`;
  html += `<table><tr>`;
  for (let i = 0; i < Object.values(registeredToday).length; i++) {
    html += `<td class="style1">${Object.values(registeredToday)[i][1]}</td> 
                <td class="style2">${
                  Object.values(registeredToday)[i][0]
                }</td>`;
  }
  html += `<td class="style1">&nbsp</td><td class="style2">&nbsp</td>`;
  html += `<td class="style1">Sum Timer</td><td class="style2">4,5</td>`;
  html += `</tr></table></div>`;

  // TEGNE OPP "KALENDER FELT"
  html += `<div class="infoFieldClass">`;
  html += `<div><h3>Timeregistering:</h3></div>`;
  html += `<div>I dag er det ${dateIsNow}</div><br>`;
  html += `<div>Klokken er: ${timeIsNow}</div>`;
  html += `</div>`;
  document.getElementById('app').innerHTML = html;
}
// ***PROSJEKT REGISTERING VIEW***
function projectRegisterPageView() {
  html += `<div class="projectRegisterSheet"><table class="projectRegisterSheetContent">`;
  for (let i = 0; i < Object.values(model.projectNewRegister)[0].length; i++) {
    html += `<tr class="projectRegisterSheetContent"><td>${
      Object.values(model.projectNewRegister)[0][i]
    }</td>
        <td><input type="${model.registerData.dataType[i]}"
        
        oninput="model.registerData.actualValue[${i}] = this.value" 
        />
        </td></tr>`;
  }
  html += `</table>`;
  html += `<button class="clickButton" onclick="registerNewProject()">Registrer nytt prosjekt</button>`;
  html += `</div>`;
  document.getElementById('app').innerHTML = html;
}

// ***TIME OVERSIKT VIEW***
function hoursOverviewPageView() {
  html += `<div class="hoursOverviewClass"><h2>Registrerte timer</h2></div>`;

  html += `<div>${registerListMarch}</div>`;

  html += `<div class="TimeRegister">sortert på dag, uke, måned eller prosjekter.</div>`;

  html += `<div id="timeHistorik">aktive og ferdige projekter , registerte timer brukt it tid .eks foig mnd</div>`;

  document.getElementById('app').innerHTML = html;
}

// ***PROSJEKT OVERSIKT VIEW***
function projectOverviewPageView() {
  html += `<div class="projectRegisterSheet"><table class="projectRegisterSheetContent"><tr>`;

  for (let i = 0; i < Object.values(model.projectNewRegister)[0].length; i++) {
    html += `<td>${Object.values(model.projectNewRegister)[0][i]}</td>`;
  }
  html += `</tr>`;
  for (let i = 1; i < Object.keys(model.projectNewRegister).length; i++) {
    html += `<tr>
                 <td>${Object.values(model.projectNewRegister)[i][0]}</td>
                 <td>${Object.values(model.projectNewRegister)[i][1]}</td>
                 <td>${Object.values(model.projectNewRegister)[i][2]}</td>
                 <td>${Object.values(model.projectNewRegister)[i][3]}</td>
                 <td>${Object.values(model.projectNewRegister)[i][4]}</td>
                 </tr>`;
  }
  html += `</table></div>`;
  document.getElementById('app').innerHTML = html;
}
