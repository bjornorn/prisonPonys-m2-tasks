let html = '';

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

function hoursRegisterSheet() {
    html += `<div class="hoursRegisterSheet">`;
    html += `<div><h2>Ny Registrering</h2></div>`;
    for (let i = 0; i < hoursSheetForm.length; i++) {
        html += `<div class="hoursRegisterSheetContent">${hoursSheetForm[i]}:</div>
        <input type="text">        
        </br>`;        
    };
    html += `<button class="hoursRegisterSheetContent">Registrer</button>`;
    html += `</div>`;
    document.getElementById("app").innerHTML = html;    
}

function hoursOverviewPage() {
    html += `<div class="hoursOverviewClass"><h2>Registrerte timer</h2></div>`;
    html += `<div>${registerListMarch)}</div>`;
    

    document.getElementById("app").innerHTML = html;    
}