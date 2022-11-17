var d = new Date();
var day = d.getDate().toString();

var mths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var mth = mths[d.getMonth().toString()];

var yr = d.getFullYear().toString()

var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
 window.onload = function() {

    document.getElementById("group").innerHTML = retrievedObject.dealers[0].dealerinfo.corporation;

    document.getElementById("date").innerHTML = day + " " + mth + ", " + yr;

    document.getElementById("d1").innerHTML = retrievedObject.dealers[0].dealerinfo.dealership;
    document.getElementById("add1").innerHTML = retrievedObject.dealers[0].dealerinfo.dealeraddress;
    document.getElementById("city1").innerHTML = retrievedObject.dealers[0].dealerinfo.dealercity;
    document.getElementById("st1").innerHTML = retrievedObject.dealers[0].dealerinfo.dealerstate;
    document.getElementById("zp1").innerHTML = retrievedObject.dealers[0].dealerinfo.dealerzip;
    document.getElementById("dnum1").innerHTML = retrievedObject.dealers[0].dealerinfo.dealerphone;

    if (retrievedObject.dealers[1]) {
        document.getElementById("d2").innerHTML = retrievedObject.dealers[1].dealerinfo.dealership;
        document.getElementById("add2").innerHTML = retrievedObject.dealers[1].dealerinfo.dealeraddress;
        document.getElementById("city2").innerHTML = retrievedObject.dealers[1].dealerinfo.dealercity;
        document.getElementById("st2").innerHTML = retrievedObject.dealers[1].dealerinfo.dealerstate;
        document.getElementById("zp2").innerHTML = retrievedObject.dealers[1].dealerinfo.dealerzip;
        document.getElementById("dnum2").innerHTML = retrievedObject.dealers[1].dealerinfo.dealerphone;
    }

    if (retrievedObject.dealers[2]) {
        document.getElementById("d3").innerHTML = retrievedObject.dealers[2].dealerinfo.dealership;
        document.getElementById("add3").innerHTML = retrievedObject.dealers[2].dealerinfo.dealeraddress;
        document.getElementById("city3").innerHTML = retrievedObject.dealers[2].dealerinfo.dealercity;
        document.getElementById("st3").innerHTML = retrievedObject.dealers[2].dealerinfo.dealerstate;
        document.getElementById("zp3").innerHTML = retrievedObject.dealers[2].dealerinfo.dealerzip;
        document.getElementById("dnum3").innerHTML = retrievedObject.dealers[2].dealerinfo.dealerphone;
    }

    if (retrievedObject.dealers[3]) {
        document.getElementById("d4").innerHTML = retrievedObject.dealers[3].dealerinfo.dealership;
        document.getElementById("add4").innerHTML = retrievedObject.dealers[3].dealerinfo.dealeraddress;
        document.getElementById("city4").innerHTML = retrievedObject.dealers[3].dealerinfo.dealercity;
        document.getElementById("st4").innerHTML = retrievedObject.dealers[3].dealerinfo.dealerstate;
        document.getElementById("zp4").innerHTML = retrievedObject.dealers[3].dealerinfo.dealerzip;
        document.getElementById("dnum4").innerHTML = retrievedObject.dealers[3].dealerinfo.dealerphone;
    }

    if (retrievedObject.dealers[4]) {
        document.getElementById("d5").innerHTML = retrievedObject.dealers[4].dealerinfo.dealership;
        document.getElementById("add5").innerHTML = retrievedObject.dealers[4].dealerinfo.dealeraddress;
        document.getElementById("city5").innerHTML = retrievedObject.dealers[4].dealerinfo.dealercity;
        document.getElementById("st5").innerHTML = retrievedObject.dealers[4].dealerinfo.dealerstate;
        document.getElementById("zp5").innerHTML = retrievedObject.dealers[4].dealerinfo.dealerzip;
        document.getElementById("dnum5").innerHTML = retrievedObject.dealers[4].dealerinfo.dealerphone;
    }

    if (retrievedObject.dealers[5]) {
        document.getElementById("d6").innerHTML = retrievedObject.dealers[5].dealerinfo.dealership;
        document.getElementById("add6").innerHTML = retrievedObject.dealers[5].dealerinfo.dealeraddress;
        document.getElementById("city6").innerHTML = retrievedObject.dealers[5].dealerinfo.dealercity;
        document.getElementById("st6").innerHTML = retrievedObject.dealers[5].dealerinfo.dealerstate;
        document.getElementById("zp6").innerHTML = retrievedObject.dealers[5].dealerinfo.dealerzip;
        document.getElementById("dnum6").innerHTML = retrievedObject.dealers[5].dealerinfo.dealerphone;
    }

    if (retrievedObject.dealers[6]) {
        document.getElementById("d7").innerHTML = retrievedObject.dealers[6].dealerinfo.dealership;
        document.getElementById("add7").innerHTML = retrievedObject.dealers[6].dealerinfo.dealeraddress;
        document.getElementById("city7").innerHTML = retrievedObject.dealers[6].dealerinfo.dealercity;
        document.getElementById("st7").innerHTML = retrievedObject.dealers[6].dealerinfo.dealerstate;
        document.getElementById("zp7").innerHTML = retrievedObject.dealers[6].dealerinfo.dealerzip;
        document.getElementById("dnum7").innerHTML = retrievedObject.dealers[6].dealerinfo.dealerphone;
    }

    if (retrievedObject.dealers[7]) {
        document.getElementById("d8").innerHTML = retrievedObject.dealers[7].dealerinfo.dealership;
        document.getElementById("add8").innerHTML = retrievedObject.dealers[7].dealerinfo.dealeraddress;
        document.getElementById("city8").innerHTML = retrievedObject.dealers[7].dealerinfo.dealercity;
        document.getElementById("st8").innerHTML = retrievedObject.dealers[7].dealerinfo.dealerstate;
        document.getElementById("zp8").innerHTML = retrievedObject.dealers[7].dealerinfo.dealerzip;
        document.getElementById("dnum8").innerHTML = retrievedObject.dealers[7].dealerinfo.dealerphone;
    }

    if (retrievedObject.dealers[8]) {
        document.getElementById("d9").innerHTML = retrievedObject.dealers[8].dealerinfo.dealership;
        document.getElementById("add9").innerHTML = retrievedObject.dealers[8].dealerinfo.dealeraddress;
        document.getElementById("city9").innerHTML = retrievedObject.dealers[8].dealerinfo.dealercity;
        document.getElementById("st9").innerHTML = retrievedObject.dealers[8].dealerinfo.dealerstate;
        document.getElementById("zp9").innerHTML = retrievedObject.dealers[8].dealerinfo.dealerzip;
        document.getElementById("dnum9").innerHTML = retrievedObject.dealers[8].dealerinfo.dealerphone;
    }
}
