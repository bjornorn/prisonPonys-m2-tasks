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
  for (let i = 0; i < model.hoursSheetForm.description.length; i++) {
    html += `<tr><td>${Object.values(model.hoursSheetForm.description)[i]}:</td></tr>`;
    }
    html += `</table><table class="hoursRegisterSheetContent2">`;
    for (let i = 0; i < (model.hoursSheetForm.description.length -1) ; i++) {
     html += `<tr><td><input type="${model.registerData.dtProjectActiveRegister[i]}"></td></tr>`;
    }  

  html += `<tr><td><select style="width: 200px">`;
          for (let i = 1; i < Object.keys(model.projectActiveRegister).length; i++) {     
          html += `<option ${i} value="${Object.values(model.projectActiveRegister)[i][1]}">${Object.values(model.projectActiveRegister)[i][1]}</option>`;
    }
          `</select></tr></td>`;
  html += `</table>`;
  html += `<button class="button">Registrer</button>`;
  html += `</div>`;

  // TEGNE OPP "TIMER I DAG FELT"
  html += `<div class="todaysHoursClass"><h3>Registrerte timer i dag:</h3>`;
  html += `<table><tr><td>Prosjekt Navn:</td><td>Antall timer</td></tr>
  `;
  for (let i = 0; i < Object.keys(theProjects).length; i++) {
    html += `<td class="style1">${Object.values(theProjects)[i].projectName
    }</td> 
                <td class="style2">${Object.values(registeredToday)[i][0]}</td>`;
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
  for (let i = 0; i < (Object.values(model.projectActiveRegister)[0].length - 2); i++) {
    html += `<tr class="projectRegisterSheetContent"><td>${
      Object.values(model.projectActiveRegister)[0][i]
    }</td>
        <td><input type="${model.registerData.dataType[i]}"
        
        oninput="model.registerData.actualValue[${i}] = this.value" 
        />
        </td></tr>`;
  }
  html += `</table>`;
  html += `<button class="clickButton" onclick="registerActiveProject()">Registrer nytt prosjekt</button>`;
  html += `</div>`;
  document.getElementById('app').innerHTML = html;
}

// ***TIME OVERSIKT VIEW***
function hoursOverviewPageView() {
  html += `<div class="hoursOverviewClass"><h2>Registrerte timer</h2></div>`;
  html +=`<a href="#" class="LM">&laquo; forige måned</a> >`
  html += `<div class="datDate"><b>Dat time of the Year</b></div>`
  html +=`<a href="#" class="NM">Neste måned &raquo;</a>`
  html += `<div>${registerListMarch}</div>`;

  html += `<div class="TimeRegister">${hoursJanuary.Object}</div>`;
  
  html += `<div id="timeHistorik" 
  <input type="button" value="" onclick="msg()"> time historikk
</div>`;

  document.getElementById('app').innerHTML = html;
}
function msg() {
  alert("change me and i will put in info");
}
function projectTimeUse (){}






// ***PROSJEKT OVERSIKT VIEW***
function projectOverviewPageView() {
  html += `<div class="projectRegisterSheet"><table class="projectRegisterSheetContent"><tr>`;

  for (let i = 0; i < Object.values(model.projectActiveRegister)[0].length; i++) {
    html += `<td>${Object.values(model.projectActiveRegister)[0][i]}</td>`;
  }
  html += `</tr>`;
  for (let i = 1; i < Object.keys(model.projectActiveRegister).length; i++) {
    html += `<tr>
                 <td>${Object.values(model.projectActiveRegister)[i][0]}</td>
                 <td>${Object.values(model.projectActiveRegister)[i][1]}</td>
                 <td>${Object.values(model.projectActiveRegister)[i][2]}</td>
                 <td>${Object.values(model.projectActiveRegister)[i][3]}</td>
                 <td>${Object.values(model.projectActiveRegister)[i][4]}</td>
                 </tr>`;
  }
  html += `</table></div>`;
  document.getElementById('app').innerHTML = html;
}
