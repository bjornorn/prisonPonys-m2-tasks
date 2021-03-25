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
     html += `<tr><td><input type="${model.registerData.dtProjectActiveRegister[i]}" 
              oninput="model.registerData.hourActualValue[${i}] = this.value"/></td></tr>`;
        }  
    //Dropdown meny
  html += `<tr><td><select style="width: 200px" oninput="model.registerData.hourActualValue[${5}] = this.value">`;
          for (let i = 0; i < Object.keys(theAProjects).length; i++) {     
          html += `<option ${i} value="${Object.values(theAProjects)[i].projectName}">${Object.values(theAProjects)[i].projectName}</option>`;
    }
          `</select></tr></td>`;
  html += `</table>`;
  html += `<button class="button">Registrer</button>`;
  html += `</div>`;

  // TEGNE OPP "TIMER I DAG FELT"
  html += `<div class="todaysHoursClass"><h3>Registrerte timer i dag:</h3>`;
  html += `<table><tr><td class="style1">Prosjekt Navn:</td><td class="style2">Antall timer</td></tr>
  `;
  let todaysHours = 0;
  for (let i = 0; i < Object.keys(theAProjects).length; i++) {
    html += `<tr><td class="style1">${Object.values(theAProjects)[i].projectName}</td> 
             <td class="style2">${Object.values(theAProjects)[i].sumTimeSpentToday}</td></tr>`;
             todaysHours += parseFloat(Object.values(theAProjects)[i].sumTimeSpentToday);
           
            }
  
  html += `<tr><td class="style1">&nbsp</td><td class="style2">&nbsp</td></tr>`;
  html += `<tr><td class="style1">Sum Timer</td><td class="style2">${todaysHours}</td>`;
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
  for (let i = 0; i < (Object.keys(model.projectInfoRegister).length - 4); i++) {
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



// ***TIME OVERSIKT VIEW***
function hoursOverviewPageView() {

  html += `<table class="styleMonth"><tr>`;
html +=`<td><a href="#"> Forrige måned</a></td> `
html += `<td><div><b>Janumary</b></div></td>`; /* input month for change */
html +=`<td><a href="#">Neste måned</a></td>`
html += `</tr></table>`;

 

  html+= `<div class="TimeRegister">`;
  html += `<table><tr>`;
  
  for (let i = 0; i < Object.values(hoursJanuary.dInfo).length; i++) {
    html += `<td class="styleTimereg">${Object.values(hoursJanuary.dInfo)[i]}</td>`;    
  }
  html += `</tr></table>`;
  html+= `<div class="TimeRegister2">`;
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
