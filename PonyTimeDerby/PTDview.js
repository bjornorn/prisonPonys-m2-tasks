let html = '';

//***MAIN VIEW***
    function updateView() {
        html = '';
        // html += `<div class='header'>${navButtons[0]}</div>`;
        html += `<div class='sidebar'>`;
        for (let i = 0; i < navButtons.length; i++) {
            // html += `<div class='navButtons'>${i}</div>`;
            html += `<button class='navButtons' type="button" onclick="${navView[i]}()">${navButtons[i]}</button>`;
        }
        html += `</div>`;    
        document.getElementById("app").innerHTML = html;
}

// ***TIME REGISTRERING VIEW***
    // TEGNE OPP NY REGISTRERING FELT
    function hoursRegisterSheet() {
        html += `<div class="hoursRegisterSheet">`;
        html += `<div><h2>Ny Registrering</h2></div>`;
        for (let i = 0; i < hoursSheetForm.length; i++) {
            html += `<div class="hoursRegisterSheetContent">${hoursSheetForm[i]}:<input type="text"></div>
           
            `;             
        };
        html += `<button class="hoursRegisterSheetContent reg" type="button">Registrer</button>`;
        html += `</div>`;

    // TEGNE OPP "TIMER I DAG FELT"
        html += `<div class="todaysHoursClass"><h3>Registrerte timer i dag:</h3>`;
        html += `<table><tr>`;
        for (let i = 0; i < (Object.values(registeredToday).length); i++) {
        html += `<td class="style1">${Object.values(registeredToday)[i][1]}</td> 
                <td class="style2">${Object.values(registeredToday)[i][0]}</td>`
        };
        html += `<td class="style1">&nbsp</td><td class="style2">&nbsp</td>`;           
        html += `<td class="style1">Sum Timer</td><td class="style2">4,5</td>`;           
        html += `</tr></table></div>`;     
            
    // TEGNE OPP "KALENDER FELT"
        html += `<div class="infoFieldClass">`;
        html += `<div><h3>Timeregistering:</h3></div>`;
        html += `<div>I dag er det ${dateIsNow}</div><br>`;
        html += `<div>Klokken er: ${timeIsNow}</div>`;
        html += `</div>`;
        document.getElementById("app").innerHTML = html;    
}
// ***PROSJEKT REGISTERING VIEW***


// ***TIME OVERSIKT VIEW***
function hoursOverviewPage() {
    html += `<div class="hoursOverviewClass"><h2>Registrerte timer</h2></div>`;
    html += `<div>${registerListMarch}</div>`;
    document.getElementById("app").innerHTML = html;    
}

// ***PROSJEKT OVERSIKT VIEW***