function updateView(){
    let html = ``;
for (let i = 0; i < Object.keys(model.infoBlocks).length; i++)  {
    html += `<div>${Object.values(model.infoBlocks)[i]}</div>`;
}
html += `<div>${model.queryBlock.addQueryText} ${model.queryBlock.questionField}</div>`;
document.getElementById('page').innerHTML = html;
}

