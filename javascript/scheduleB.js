$(document).ready(function(){
    const querystring = window.location.search;
    console.log(querystring);
    const urlParams = new URLSearchParams(querystring);


    const day2 = urlParams.get('day2');
    document.getElementById("day2").innerHTML = day2;

});
