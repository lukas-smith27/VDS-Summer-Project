
var d = new Date();
var day = d.getDate().toString();

var mths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var mth = mths[d.getMonth().toString()];

var yr = d.getFullYear().toString().slice(-2);


document.getElementById("day").innerHTML = day;

document.getElementById("mth").innerHTML = mth;

document.getElementById("yr").innerHTML = yr;

var retrievedObject = JSON.parse(localStorage.getItem('testObject'));

window.onload = function() {
    document.getElementById("dealersh").innerHTML = retrievedObject.dealers[0].dealerinfo.dealership;

    document.getElementById("crp").innerHTML = retrievedObject.dealers[0].dealerinfo.corporation;

    document.getElementById("city1").innerHTML = retrievedObject.dealers[0].dealerinfo.dealercity;

    document.getElementById("st").innerHTML = retrievedObject.dealers[0].dealerinfo.dealerstate;;

    document.getElementById("dsh").innerHTML = retrievedObject.dealers[0].dealerinfo.dealership;

    document.getElementById("own").innerHTML = retrievedObject.dealers[0].dealerinfo.principal;

    document.getElementById("dsh2").innerHTML = retrievedObject.dealers[0].dealerinfo.dealership;


    document.getElementById("att").innerHTML = retrievedObject.dealers[0].dealerinfo.principal;

    document.getElementById("add").innerHTML = retrievedObject.dealers[0].dealerinfo.dealeraddress;

    document.getElementById("cy").innerHTML = retrievedObject.dealers[0].dealerinfo.dealercity;

    document.getElementById("st2").innerHTML = retrievedObject.dealers[0].dealerinfo.dealerstate;

    document.getElementById("zp").innerHTML = retrievedObject.dealers[0].dealerinfo.dealerzip;

    document.getElementById("dsh3").innerHTML = retrievedObject.dealers[0].dealerinfo.dealership;

    document.getElementById("own1").innerHTML = retrievedObject.dealers[0].dealerinfo.pos;
}