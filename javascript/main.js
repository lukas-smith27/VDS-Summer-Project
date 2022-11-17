
var submitData = {
    dealers:[],
    menu:{},
    quest:{},
    visionproducts:{}
};

var dealer = {};
dealer.dealerinfo = {};

function validate(){

    var visionMenu = $('.vm').is(':checked');
    submitData.visionproducts.visionMenu = visionMenu;

    var vSign = $('.vs').is(':checked');
    submitData.visionproducts.vSign = vSign;

    var standalone = $('.pj').is(':checked');
    submitData.visionproducts.standalone = standalone;

    var visionTouch = $('.vt').is(':checked');
    submitData.visionproducts.visionTouch = visionTouch;

    var visionReports = $('.vr').is(':checked');
    submitData.visionproducts.visionReports = visionReports;


////////////////////////////////////////////////////////////////////////////////

    var dealership = document.getElementById("dealership");
    dealer.dealerinfo.dealership = dealership.value;
    if (dealership.value.trim() == ''){
        throw "Please Enter Dealership Name";
    }

    var principal = document.getElementById("principal");
    dealer.dealerinfo.principal = principal.value;
    if (principal.value.trim() == ''){
        throw "Please Enter Dealership Principal";
    }

    var dealeraddress = document.getElementById("address");
    dealer.dealerinfo.dealeraddress = dealeraddress.value;
    if (dealeraddress.value.trim() == ''){
        throw "Please Enter Address";
    }

    var dealercity = document.getElementById("city");
    dealer.dealerinfo.dealercity = dealercity.value;
    if (dealercity.value.trim() == ''){
        throw "Please Enter City";
    }

    var dealerstate = document.getElementById("state");
    dealer.dealerinfo.dealerstate = dealerstate.value;
    if (dealerstate.value.trim() == ''){
        throw "Please Enter State";
    }

    var dealerzip = document.getElementById("zip");
    if (!dealerzip.value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
        throw "Enter Valid Dealership Zip Code";
    } else {
        dealer.dealerinfo.dealerzip = dealerzip.value;
    }

    var dealerphone = document.getElementById("phone");
    dealer.dealerinfo.contactphone = dealerphone.value;
    if (!dealerphone.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
        throw "Enter Valid Dealer Phone Number";
    } else {
        dealer.dealerinfo.dealerphone = dealerphone.value;
    }

  ////////////////////////////////////////////////////////////////

    var corporation = document.getElementById("corporation");
    dealer.dealerinfo.corporation = corporation.value;

    var owner = document.getElementById("owner");
    dealer.dealerinfo.owner = owner.value;

    var corpaddress = document.getElementById("caddress");
    dealer.dealerinfo.corpaddress = corpaddress.value;

    var corpcity = document.getElementById("ccity");
    dealer.dealerinfo.corpcity = corpcity.value;


    var corpstate = document.getElementById("cstate");
    dealer.dealerinfo.corpstate = corpstate.value;

    var corpzip = document.getElementById("czip");
    dealer.dealerinfo.corpzip = corpzip.value;

    var pos = document.getElementById("position");
    dealer.dealerinfo.pos = pos.value;



/////////////////////////////////////////////////////////////////////////


    var contact = document.getElementById("cname");
    dealer.dealerinfo.contact = contact.value;
    if (contact.value.trim() == ''){
        throw "Please Enter Name";
    }

    var contactphone = document.getElementById("contactnum");
    dealer.dealerinfo.contactphone = contactphone.value;
    if (!contactphone.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
        throw "Enter Valid Contact Phone Number";
    } else {
        dealer.dealerinfo.contactphone = contactphone.value;
    }

    var contactemail = document.getElementById("email");
    if (!contactemail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        throw "Enter Valid Contact Email";
    } else {
        dealer.dealerinfo.contactemail = contactemail.value;
    }

    var contactTitle = document.getElementById("title");
    dealer.dealerinfo.contactTitle = contactTitle.value;
    if (contactTitle.value.trim() == ''){
        throw "Please Enter Title";
    }

    var agent = document.getElementById("agentname");
    dealer.dealerinfo.agent = agent.value;

    var agency = document.getElementById("agencyname");
    dealer.dealerinfo.agency = agency.value;

    var agentemail = document.getElementById("aemail");
    dealer.dealerinfo.agentemail = agentemail.value

    var agentphone = document.getElementById("agentnum");
    dealer.dealerinfo.agentphone = agentphone.value;

    submitData.dealers.push(dealer);

}

function validate2() {
    dealer.dealerinfo.statetaxes = [];
    $('.boxp2 > table').each(function(){
        var tax = {
            "state": $(this).find('.statesdrop').val(),
            "state_rate": $(this).find('.staterate').val(),
            additionalTax:[]
        };
        $(this).find('tr.addtax').each(function(){
            var additionaltax = {
            "additionalTax": $(this).find('.addTaxes').val(),
            "additionalRate": $(this).find('.addRate').val()
            };
            tax.additionalTax.push(additionaltax);
        });
        dealer.dealerinfo.statetaxes.push(tax);
    });



    dealer.dealerinfo.retailfees = [];
    $('tr.clone').each(function(){
        var fee = {
            "feetype": $(this).find('.retailfeetype').val(),
            "price": $(this).find('.retailprice').val(),
            "taxable": $(this).find('.taxcheck').is(":checked")
        };

        dealer.dealerinfo.retailfees.push(fee);
    });

    dealer.dealerinfo.leasefees = [];
    $('tr.clone6').each(function(){
        var fee = {
            "feetype": $(this).find('.leasefeetype').val(),
            "price": $(this).find('.leaseprice').val(),
            "feeUpfront": $(this).find('.upfrontfeecheck').is(":checked"),
            "taxable": $(this).find('.leasetaxcheck').is(":checked"),
            "taxableUpfront": $(this).find('.upfronttaxcheck').is(":checked")
        };

        dealer.dealerinfo.leasefees.push(fee);
    });  
}
    


    /////////////////////////Page 2//////////////////////////////
 
function validate3() {
    dealer.dealerinfo.integrate = [];

    var dmsintegrate = $('input:radio[name="group1"]:checked').val();
    dealer.dealerinfo.integrate.dmsintegrate = dmsintegrate;

    var dmschoice = $('input:radio[name="dms"]:checked').val();
    if (dmsintegrate == 'Yes' && !dmschoice) {
        throw "Please Select DMS";
    } else {
        dealer.dealerinfo.integrate.dmschoice = dmschoice;
    }

    var dmsnumber = document.getElementById("dmsdealer");
    dealer.dealerinfo.integrate.dmsnumber = dmsnumber.value;

    var dmsfinancenum = document.getElementById("finance");

    dealer.dealerinfo.integrate.dmsfinancenum = dmsfinancenum.value;

    var dmscashnum = document.getElementById("cash");
    dealer.dealerinfo.integrate.dmscashnum = dmscashnum.value;

    var dmsleasenum = document.getElementById("lease");
    dealer.dealerinfo.integrate.dmsleasenum = dmsleasenum.value;


    dealer.dealerinfo.biweek = [];

    var biweekyn = $('input:radio[name="group2"]:checked').val();
    dealer.dealerinfo.biweek.biweekyn = biweekyn;

    var biweekchoice = $('input:radio[name="pro"]:checked').val();
    if (biweekyn == 'Yes' && !biweekchoice) {
        throw "Please Select Bi-Week Provider";
    } else {
        dealer.dealerinfo.biweek.biweekchoice = biweekchoice;
    }
}


    ////////////////////////////////Page 3///////////////////////////
function validate4() {
    dealer.dealerinfo.products = [];
    $('tr.clone2').each(function(){
        var vsc = {
            "VSC Name": $(this).find('.vscname').val(),
            "Primary": $(this).find('.primaryvsc').is(":checked"),
            "Provider": $(this).find('.productprovider').val(),
            "Cost": $(this).find('.vsccost').val(),
            "Retail": $(this).find('.vscretail').val(),
            "Markup": $(this).find('.vscmarkup').val(),
            "Taxable": $(this).find('.taxablevsc').is(":checked")
        };

        dealer.dealerinfo.products.push(vsc);
    });



    $('tr.clone3').each(function(){
        var gap = {
            "GAP Name": $(this).find('.gapname').val(),
            "Primary": $(this).find('.primarygap').is(":checked"),
            "Provider": $(this).find('.gproductprovider').val(),
            "Cost": $(this).find('.gcost').val(),
            "Retail": $(this).find('.gretail').val(),
            "Markup": $(this).find('.gmarkup').val(),
            "Taxable": $(this).find('.taxablegap').is(":checked")
        };

        dealer.dealerinfo.products.push(gap);
    });


    $('tr.clone4').each(function(){
        var ancillary = {
            "Ancillary Name": $(this).find('.apname').val(),
            "Product Type": $(this).find('.aproducts').val(),
            "Provider": $(this).find('.aproductprovider').val(),
            "Cost": $(this).find('.acost').val(),
            "Retail": $(this).find('.aretail').val(),
            "Markup": $(this).find('.amarkup').val(),
            "Taxable": $(this).find('.taxableanc').is(":checked")
        };

        dealer.dealerinfo.products.push(ancillary);
    });
}


    ////////////////////////////Page 4///////////////////////////////
function validate5() {
    submitData.menu.style = []
    $('tr.menus').each(function(){
        var style = {
            "Classic Menu": $(this).find('.classic').is(":checked"),
            "Header Menu": $(this).find('.header').is(":checked"),
            "Simple Menu": $(this).find('.extheader').is(":checked"),
            "2 Column Menu": $(this).find('.cols').is(":checked")
        };
        submitData.menu.style.push(style);
    });



    submitData.menu.columns = [];
    $('table.menucolumnoptions').each(function(){
        var menucolumns = {
            "Finance 1 Col": $(this).find('.f1col').is(':checked'),
            "Cash 1 Col": $(this).find('.c1col').is(':checked'),
            "Lease 1 Col": $(this).find('.l1col').is(':checked'),
            "Finance 2 Col": $(this).find('.f2col').is(':checked'),
            "Cash 2 Col": $(this).find('.c2col').is(':checked'),
            "Lease 2 Col": $(this).find('.l2col').is(':checked'),
            "Finance 3 Col": $(this).find('.f3col').is(':checked'),
            "Cash 3 Col": $(this).find('.c3col').is(':checked'),
            "Lease 3 Col": $(this).find('.l3col').is(':checked'),
            "Finance 4 Col": $(this).find('.f4col').is(':checked'),
            "Cash 4 Col": $(this).find('.c4col').is(':checked'),
            "Lease 4 Col": $(this).find('.l4col').is(':checked')

        };
        submitData.menu.columns.push(menucolumns);
    })    

    //Term Pricing
    submitData.menu.term_pricing = [];
    $('table.termpricing').each(function(){
        var term_pricing = {
            "No Product Pricing": $(this).find('.npp').is(':checked'),
            "Daily": $(this).find('.daily').is(':checked'),
            "1 Term": $(this).find('.term1').is(':checked'),
            "Monthly": $(this).find('.monthly').is(':checked'),
            "2 Term": $(this).find('.term2').is(':checked'),
            "Total": $(this).find('.total').is(':checked'),
            "Month and Total": $(this).find('.monthtotal').is(':checked'),
            
        };
        submitData.menu.term_pricing.push(term_pricing);
    });

    //Section B Page 4
    submitData.menu.remote = [];
    $('table.sectionbp4').each(function(){
        var remotecols = {
            "Finance 1 Col": $(this).find('.f1col1').is(':checked'),
            "Cash 1 Col": $(this).find('.c1col1').is(':checked'),
            "Lease 1 Col": $(this).find('.l1col1').is(':checked'),
            "Finance 2 Col": $(this).find('.f2col2').is(':checked'),
            "Cash 2 Col": $(this).find('.c2col2').is(':checked'),
            "Lease 2 Col": $(this).find('.l2col2').is(':checked'),
            "Finance 3 Col": $(this).find('.f3col3').is(':checked'),
            "Cash 3 Col": $(this).find('.c3col3').is(':checked'),
            "Lease 3 Col": $(this).find('.l3col3').is(':checked')
        };
        submitData.menu.remote.push(remotecols);
    });

    //Remote Terms

    $('table.remoteterm').each(function(){
        var remote_terms = {
            "1 Term Menus": $(this).find('.remotet1').is(':checked'),
            "2 Term Menus": $(this).find('.remotet2').is(':checked'),
            "Both": $(this).find('.remotet1and2').is(':checked')
        };
        submitData.menu.remote.push(remote_terms)
    });
  

    //Section C
    submitData.menu.touch = [];
    $('table.remoteterms').each(function(){
        var touchTerms = {
            "No Touch Term": $(this).find('.noterm').is(':checked'),
            "Default 1 Term": $(this).find('.default1t').is(':checked'),
            "Default 2 Term": $(this).find('.default2t').is(':checked')
        };
        submitData.menu.touch.push(touchTerms);
    });


    //Questionnaire
    submitData.menu.touch.questionnaire = [];
    var questyes = $('#questioncheck1').is(':checked');
    submitData.quest.questyes = questyes;

    var questno = $('#questioncheck2').is(':checked');
    submitData.quest.questno = questno;
}


function validate6() {
    //Section D
    submitData.menu.specialmenu = [];

    var zeroplan = $('#zp').is(':checked');
    submitData.menu.specialmenu.zeroplan = zeroplan;

    var teamone = $('#tom').is(':checked');
    submitData.menu.specialmenu.teamone = teamone;

    var redflags = $('#rf').is(':checked');
    submitData.menu.specialmenu.redflags = redflags;


    //Section E
    submitData.menu.product_disclosure = [];
    $('table.disclosuretable').each(function(event){
        var product_disclosure = {
            "Accepted: No Pricing": $(this).find('.nopp').is(':checked'),
            "Declined: No Pricing": $(this).find('.nopp2').is(':checked'),
            "Accepted: Daily": $(this).find('.day').is(':checked'),
            "Declined: Daily": $(this).find('.day2').is(':checked'),
            "Accepted: Monthly": $(this).find('.mon1').is(':checked'),
            "Declined: Monthly": $(this).find('.mon2').is(':checked'),
            "Accepted: Total": $(this).find('.tot').is(':checked'),
            "Declined: Total": $(this).find('.tot2').is(':checked')
        };
        submitData.menu.product_disclosure.push(product_disclosure);
        
    });


    //Section E Part 2

    var total_payments = $('#tomp').is(':checked');
    submitData.menu.specialmenu.total_payments = total_payments;

    var hide_desc = $('#hide').is(':checked');
    submitData.menu.specialmenu.hide_desc = hide_desc;

    var required_state_ia = $('#requiredstate').is(':checked');
    submitData.menu.specialmenu.required_state_ia = required_state_ia;

    var rsaccepted_only = $('#payment').is(':checked');
    submitData.menu.specialmenu.rsaccepted_only = rsaccepted_only;

    var rsaccepted_finance = $('#amfin').is(':checked');
    submitData.menu.specialmenu.rsaccepted_finance = rsaccepted_finance;
}


    //////////////////////////////Page 6////////////////////////////

function validate7() {
    dealer.dealerinfo.lenders = [];
    $('tr.clone5').each(function(){
        var lenders = {
            "Lender Name": $(this).find('.lendername').val(),
            "Lender Address": $(this).find('.lenderaddress').val(),
            "Lender Phone": $(this).find('.lenderphone').val()
        };


        dealer.dealerinfo.lenders.push(lenders);
    });
}



    ////////////////////////////Page 7/////////////////////////////
function validate8() {
    dealer.dealerinfo.employees = [];

    $('tr.emp').each(function(row, tr){
        var employees = {
            "Employee Name": $(this).find('.empname').val(),
            "Employee Title": $(this).find('.emptitle').val(),
            "Menu Access": $(this).find('.menuaccess').is(':checked'),
            "vSignature Access": $(this).find('.vsignaccess').is(':checked'),
            "Email Address": $(this).find('.empemail').val(),
        };

        if ($(this).find('.empname').val().trim() == ''){
            throw "Please Enter Employee Name";
        }

        if ($(this).find('.emptitle').val() == null){
            throw "Please Select Employee Title";
        }

        if ($(this).find('.empemail').val().trim() == ''){
            throw "Please Enter Employee Email";
        }

        dealer.dealerinfo.employees.push(employees);
    });
}


$("button#tf").click(function() {
    try {
        validate();
        $('.taxesfees').show();
        $('.pg1').hide();
    } catch (ex) {
        openModal();
        $('#error_message').text(ex);
    }
});

$("button#p2").click(function() {
    try {
        validate2();
        $('.pg2').show();
        $('.taxesfees').hide();
        window.scrollTo({top:0})
    } catch (ex) {
        openModal();
        $('#error_message').text(ex);
    }
});

$("button#p3").click(function() {
    try {
        validate3();
        $('.pg3').show();
        $('.pg2').hide();
        window.scrollTo({top:0})
    } catch (ex) {
        openModal();
        $('#error_message').text(ex);
    }
});

$("button#p4").click(function() {
    try {
        validate4();
        $('.pg4').show();
        $('.pg3').hide();
        window.scrollTo({top:0})
    } catch (ex) {
        openModal();
        $('#error_message').text(ex);
    }
});

$("button#p5").click(function() {
    try {
        validate5();
        $('.pg5').show();
        $('.pg4').hide();
        window.scrollTo({top:0})
    } catch (ex) {
        openModal();
        $('#error_message').text(ex);
    }
});

$("button#p6").click(function() {
    try {
        validate6();
        $('.pg6').show();
        $('.pg5').hide();
        window.scrollTo({top:0})
    } catch (ex) {
        openModal();
        $('#error_message').text(ex);
    }
});

$("button#p7").click(function() {
    try {
        validate7();
        $('.pg7').show();
        $('.pg6').hide();
        window.scrollTo({top:0})
    } catch (ex) {
        openModal();
        $('#error_message').text(ex);
    }
});


$("button#nextDealer").click(function() {
    $('.dealinfo').find(':input').val('');
    $('.pg1').show();
    $('.pg7').hide();
    window.scrollTo({top:0})
    dealer = {};
    dealer.dealerinfo = {};
});


$("button#modalBtn").click(function() {
    try{
        validate8();
        var d = new Date();
        var day = d.getDate().toString();

        var mths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var mth = mths[d.getMonth().toString()];

        var yr = d.getFullYear().toString().slice(-2);

        var ownval = $('#owner').val() == "" ? $('#principal').val() : $('#owner').val();
        var own1 = $('#owner').val() == "" ? "Principal" : "Owner";

        

        var testObject = submitData;
        localStorage.setItem('testObject', JSON.stringify(testObject));
        if ($('#tom').is(':checked')) {
            window.open('teamone.html');
        } else {
            window.open('sla.html');
        }

        window.open('scheduleC.html');
        window.open('scheduleA.html');
        window.open('scheduleB.html');

    } catch(ex){
        openModal();
        $('#error_message').text(ex);
        return;
    }


    $.ajax({
        data: JSON.stringify(submitData)
    })
    console.log(submitData);

});

var modal = document.getElementById('error_modal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('close');

$(closeBtn).click(closeModal);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}


//Unclick checkboxes for accepted and declined products
//Daily and monthly, total and no pricing
function cbChange(obj) {
    var instate=(obj.checked);
    var cbs = document.getElementsByName("acc2");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    if(instate)obj.checked = true;
}

function cbChange2(obj) {
    var instate2=(obj.checked);
    var cbs = document.getElementsByName("dec2");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    if(instate2)obj.checked = true;
}

function cbChange3(obj) {
    var instate3=(obj.checked);
    var cbs = document.getElementsByName("acc3");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    if(instate3)obj.checked = true;
}

function cbChange4(obj) {
    var instate4=(obj.checked);
    var cbs = document.getElementsByName("dec4");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    if(instate4)obj.checked = true;
}





var checkboxes = $(".nopp");

checkboxes.on('click',checkStatus);

function checkStatus() {

  // if at least one checkbox in selected checkboxes is checked then 
  // disable target checkboxes
  if($(checkboxes).is(':checked'))
  {
      $(".day").prop('disabled', true);
      $(".mon1").prop('disabled', true);
      $("#tot").prop('disabled', true);
      $(".day").prop('checked', false);
      $(".mon1").prop('checked', false);
      $("#tot").prop('checked', false);
  }
  else{
      $(".day").prop('disabled', false);
      $(".mon1").prop('disabled', false);
      $(".tot").prop('disabled', false);
  }        
}

var checkboxes2 = $(".nopp2");

checkboxes2.on('click',checkStatus2);

function checkStatus2() {

  // if at least one checkbox in selected checkboxes is checked then 
  // disable target checkboxes
  if($(checkboxes2).is(':checked'))
  {
      $(".day2").prop('disabled', true);
      $(".mon2").prop('disabled', true);
      $(".tot2").prop('disabled', true);
      $(".day2").prop('checked', false);
      $(".mon2").prop('checked', false);
      $(".tot2").prop('checked', false);
  }
  else{
      $(".day2").prop('disabled', false);
      $(".mon2").prop('disabled', false);
      $(".tot2").prop('disabled', false);
  }        
}

///////////////Show and hide divs ////////////////////////////////
$(document).ready(function () {
    $("#p1b").click(function () {
        window.scrollTo({top:0});
        $(".pg1").show();
        $(".taxesfees").hide();
    });
    $("#p1b").click(function () {
        window.scrollTo({top:0});
        $(".pg1").show();
        $(".taxesfees").hide();
    });
    $("#tfb").click(function () {
        window.scrollTo({top:0});
        $(".taxesfees").show();
        $(".pg2").hide();
    });
    $("#p2b").click(function () {
        window.scrollTo({top:0});
        $(".pg2").show();
        $(".pg1").hide();
        $(".pg3").hide();
        $(".pg4").hide();
    });
    $("#p3b").click(function () {
        window.scrollTo({top:0});
        $(".pg3").show();
        $(".pg1").hide();
        $(".pg2").hide();
        $(".pg4").hide();
    });
    $("#p4b").click(function () {
        window.scrollTo({top:0});
        $(".pg4").show();
        $(".pg1").hide();
        $(".pg2").hide();
        $(".pg3").hide();
        $(".pg5").hide();
    });
    $("#p5b").click(function () {
        window.scrollTo({top:0});
        $(".pg5").show();
        $(".pg1").hide();
        $(".pg2").hide();
        $(".pg3").hide();
        $(".pg4").hide();
        $(".pg6").hide();
    });
    $("#p6b").click(function () {
        window.scrollTo({top:0});
        $(".pg6").show();
        $(".pg1").hide();
        $(".pg2").hide();
        $(".pg3").hide();
        $(".pg4").hide();
        $(".pg5").hide();
        $(".pg7").hide();
    });
});

$(document).change(function (){
    if($(".vscretail").val() != '')
    {
        $(".vscmarkup").attr('disabled', true);
        $(".vscmarkup").val('');
    } else {
        $(".vscmarkup").attr('disabled', false);
    }
});

$(document).change(function (){
    if($(".vscmarkup").val() != '')
    {
        $(".vscretail").attr('disabled', true);
        $(".vscretail").val('');
    } else {
        $(".vscretail").attr('disabled', false);
    }
});



$(document).change(function (){
    if($(".gretail").val() != '')
    {
        $(".gmarkup").attr('disabled', true);
        $(".gmarkup").val('');
    } else {
        $(".gmarkup").attr('disabled', false);
    }
});

$(document).change(function (){
    if($(".gmarkup").val() != '')
    {
        $(".gretail").attr('disabled', true);
        $(".gretail").val('');
    } else {
        $(".gretail").attr('disabled', false);
    }
});



    
$(document).change(function (){
    if($(".aretail").val() != '')
    {
        $(".amarkup").attr('disabled', true);
        $(".amarkup").val('');
    } else {
        $(".amarkup").attr('disabled', false);
    }
});
   
$(document).change(function (){
    if($(".amarkup").val() != '')
    {
        $(".aretail").attr('disabled', true);
        $(".aretail").val('');
    } else {
        $(".aretail").attr('disabled', false);
    }
});




function showcorp(){
    if ($('.corpyn').is(':checked')) {
        $('.boxpg1corp').show();
    } else {
        $('.boxpg1corp').hide();
        $('#corporation').val("");
        $('#caddress').val("");
        $('#ccity').val("");
        $('#cstate').val("");
        $('#czip').val("");
        $('#owner').val("");
    }
}

$(function(){
    $('#state').change(function(){ // when one changes
        $('#taxstate').val( $(this).val() ) // they all change
    })
})

function corp1(){
    if($(".corpy").is(':checked')){
        $('.ans2').show();
        $('.boxpg1corp').show();
    } else if ($(".corpn").is(':checked')){
        $('.ans2').hide().val("no");
        $('.ans3').hide().val("no");
        $('.boxpg1corp').hide();
        $('.corpn2').prop('checked', true);
        $('.corpn3').val('checked', true);
    }
};

function corp2(){
    if($(".corpy2").is(':checked')) {
        $('.ans3').show();
        $('.boxpg1corp').show();
    } else if ($(".corpn2").is(':checked')){
        $('.ans2').show();
        $('.ans3').hide();
        $('.corpn3').val('checked', true);
    }
};

function corp3(){
    if($(".corpy3").is(':checked')) {
        $('.numdealerships').show();
    } else if ($(".corpn3").is(':checked')){
        $('.ans2').show();
        $('.ans3').show();
        $('.numdealerships').hide();
    }
};



function hideMenus(){
    if ($('.vs').is(':checked')) {
        $('.vm').prop('checked', false);
        $('.sectionb').show();
        $('.sectionc').hide();
    }

    if ($('.vt').is(':checked')) {
        $('.vm').prop('checked', false);
        $('.vs').prop('checked', false);
        $('.sectionb').show();
        $('.sectionc').show();
    }

    if ($('.pj').is(':checked')) {
        $('.vm').prop('checked', false);
        $('.vs').prop('checked', false);
        $('.vt').prop('checked', false);
        $('.sectionb').hide();
        $('.sectionc').hide();
    }

};

var testObject = submitData;
localStorage.setItem('testObject', JSON.stringify(testObject));
//console.log(retrievedObject.dealers[0].dealerinfo.dealership);
//document.getElementById("d1").innerHTML = retrievedObject.dealers.dealer.dealerinfo[0];
