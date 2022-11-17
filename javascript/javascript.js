$(function(){
    initDMS();
    initbiweek();
});

function cloneTable() {
    var table = document.getElementById("taxtable");
    var clone = table.cloneNode(true);
    clone.id = "newTable";
    $(clone).insertAfter('.taxtable:last');
    var inputs = clone.querySelectorAll("input[type='text']");
    for(var i=0; i<inputs.length; i++){
        inputs[i].value = "";
    } 
    var checks = clone.querySelectorAll("input[type='checkbox']");
    for(var i=0; i<checks.length; i++){
        checks[i].checked = false;
    }
}

function createRow(row) {
    var row = document.getElementById("clone");
    var table = document.getElementById("table");
    var clone = row.cloneNode(true);
    clone.id = "newID"; 
    table.appendChild(clone); 
    var inputs = clone.querySelectorAll("input[type='text']");
    for(var i=0; i<inputs.length; i++) {
        inputs[i].value = "";
    }
    var checks = clone.querySelectorAll("input[type='checkbox']");
    for(var i=0; i<checks.length; i++){
        checks[i].checked = false;
    }
}

function createRow2(row) {
    var row = document.getElementById("clone2");
    var table = document.getElementById("products");
    var clone = row.cloneNode(true);
    table.appendChild(clone); 
    var inputs = clone.querySelectorAll("input[type='text']");
    for(var i=0; i<inputs.length; i++) {
        inputs[i].value = "";
    }
    var checks = clone.querySelectorAll("input[type='checkbox']");
    for(var i=0; i<checks.length; i++){
        checks[i].checked = false;
    }
}

function createRow3(row) {
    var row = document.getElementById("clone3");
    var table = document.getElementById("gapproducts");
    var clone = row.cloneNode(true);
    table.appendChild(clone); 
    var inputs = clone.querySelectorAll("input[type='text']");
    for(var i=0; i<inputs.length; i++){
        inputs[i].value = "";
    }
    var checks = clone.querySelectorAll("input[type='checkbox']");
    for(var i=0; i<checks.length; i++){
        checks[i].checked = false;
    }
}

function createRow4(row) {
    var row = document.getElementById("clone4");
    var table = document.getElementById("ancillary");
    var clone = row.cloneNode(true);
    table.appendChild(clone); 
    var inputs = clone.querySelectorAll("input[type='text']");
    for(var i=0; i<inputs.length; i++) {
        inputs[i].value = "";
    }
    var checks = clone.querySelectorAll("input[type='checkbox']");
    for(var i=0; i<checks.length; i++){
        checks[i].checked = false;
    }
}

function createRow5(row) {
    var row = document.getElementById("clone5");
    var table = document.getElementById("lendertable");
    var clone = row.cloneNode(true); 
    table.appendChild(clone); 
    var inputs = clone.querySelectorAll("input[type='text']");
    for(var i=0; i<inputs.length; i++)
        inputs[i].value = "";
}

function createRow6(row) {
    var row = document.getElementById("emp");
    var table = document.getElementById("employees");
    var clone = row.cloneNode(true);
    table.appendChild(clone); 
    var inputs = clone.querySelectorAll("input[type='text']");
    for(var i=0; i<inputs.length; i++){
        inputs[i].value = "";
    }   
    var checks = clone.querySelectorAll("input[type='checkbox']");
    for(var i=0; i<checks.length; i++){
        checks[i].checked = false;
    }
}

function createRow7(button) {
    var row = $(button).closest('.statetaxes').siblings('.addtax').first();
    var table = $(button).closest('table');
    var clone = $(row).clone(); 
    $(table).append(clone); 
    var inputs = $(clone).children("input[type='text']");
    for(var i=0; i<inputs.length; i++)
        inputs[i].value = "";

}

function createRow8(row) {
    var row = document.getElementById("clone6");
    var table = document.getElementById("table2");
    var clone = row.cloneNode(true);
    table.appendChild(clone); 
    var inputs = clone.querySelectorAll("input[type='text']");
    for(var i=0; i<inputs.length; i++) {
        inputs[i].value = "";
    }
    var checks = clone.querySelectorAll("input[type='checkbox']");
    for(var i=0; i<checks.length; i++){
        checks[i].checked = false;
    }
}


function deleteRow(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

function deleteRow2(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("products").deleteRow(i);
}

function deleteRow3(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("gapproducts").deleteRow(i);
}

function deleteRow4(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("ancillary").deleteRow(i);
}

function deleteRow5(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("lendertable").deleteRow(i);
}

function deleteRow6(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("employees").deleteRow(i);
}

function deleteRow7(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table2").deleteRow(i);
}



function initDMS(){
    var dmsList = [
        {"id":1,"name":"Automate"},
        {"id":2,"name":"Autosoft"},
        {"id":3,"name":"CDK"},
        {"id":4,"name":"CDK Lightspeed"},
        {"id":5,"name":"DealerBuilt"},
        {"id":6,"name":"DealerSocket - IDMS"},
        {"id":7,"name":"DealerTrack"},
        {"id":8,"name":"Dominion ACS"},
        {"id":9,"name":"Dominion VUE"},
        {"id":10,"name":"DX1"},
        {"id":11,"name":"IDS"},
        {"id":12,"name":"Motility"},
        {"id":13,"name":"PBS"},
        {"id":14,"name":"Reynolds & Reynolds"},
        {"id":15,"name":"Tekion"}
    ];

    dmsList.forEach(function(dms){
        var label = document.createElement('label');
        label.innerHTML=dms.name;
        var input = document.createElement('input');
        input.type = "radio";
        input.name = "dms";
        input.value = dms.id;
        document.getElementById('test').appendChild(input);
        document.getElementById('test').appendChild(label);
        document.getElementById('test').appendChild(document.createElement('br'));
    });
}

function initbiweek(){
    var biweekpro = [
    {"id":1,"name":"Equity 4U Bi-Weekly"},
    {"id":2,"name":"NPN Bi-Weekly"},
    {"id":3,"name":"Payments Systems Group"},
    {"id":4,"name":"Smart Payment Plan"},
    {"id":5,"name":"USEA Bi-Weekly"}
    ];

    biweekpro.forEach(function(pro){
    var label = document.createElement('label');
    label.innerHTML=pro.name;
    var input = document.createElement('input');
    input.type = "radio";
    input.name = "pro";
    input.value = pro.id;
    document.getElementById('providerlist').appendChild(input);
    document.getElementById('providerlist').appendChild(label);
    document.getElementById('providerlist').appendChild(document.createElement('br'));
    });
}
