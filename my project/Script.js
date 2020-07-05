//*               men space                   **/ 

function rings() {  //show only rings
    var elements = document.getElementsByClassName("menWatch");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("menNecklace");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName("menRing");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
    }
}


function watches() {  //show only watches
    var elements = document.getElementsByClassName("menRing");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("menNecklace");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName("menWatches");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
    }
}


function necklaces() {  //show only necklaces
    var elements = document.getElementsByClassName("menWatch");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("menRing");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName("menNecklace");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
    }
}

//*               women space                   **/ 

function ring() {  //show only rings
    var elements = document.getElementsByClassName("necklace");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("earring");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName("ring");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
    }
}


function earring() {  //show only earring
    var elements = document.getElementsByClassName("ring");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("necklace");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName("earring");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
    }
}


function necklace() {  //show only necklaces
    var elements = document.getElementsByClassName("earring");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("ring");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName("necklace");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
    }
}

//*               Kids space                   **/ 

function b() {  //bracelets
    var elements = document.getElementsByClassName("s");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("sb");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName("b");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
    }
}


function s() {  //sunglasses
    var elements = document.getElementsByClassName("b");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("sb");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName("s");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
    }
}


function sb() {  //small bags
    var elements = document.getElementsByClassName("s");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("b");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName("sb");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Command formula
function me() {


    var a = document.getElementById("p1").value;

    if (a == "116583") { window.z.value = 15; }
    else if (a == "113795") { window.z.value = 45.5; }
    else if (a == "117465") { window.z.value = 20; }
    else if (a == "119896") { window.z.value = 25; }
    else if (a == "124796") { window.z.value = 11; }
    else if (a == "123645") { window.z.value = 26; }
    else if (a == "124545") { window.z.value = 10; }
    else if (a == "129637") { window.z.value = 26; }
    else if (a == "136478") { window.z.value = 21; }
    else if (a == "133214") { window.z.value = 15; }
    else if (a == "134621") { window.z.value = 10; }
    else if (a == "130895") { window.z.value = 12; }
    //men area prices done!
    else if (a == "216548") { window.z.value = 16; }
    else if (a == "213452") { window.z.value = 14.5; }
    else if (a == "212145") { window.z.value = 26; }
    else if (a == "219874") { window.z.value = 19.9; }
    else if (a == "223645") { window.z.value = 55; }
    else if (a == "220147") { window.z.value = 31; }
    else if (a == "229763") { window.z.value = 54; }
    else if (a == "220103") { window.z.value = 47; }
    else if (a == "236485") { window.z.value = 28; }
    else if (a == "230147") { window.z.value = 27; }
    else if (a == "239841") { window.z.value = 19; }
    else if (a == "239510") { window.z.value = 20; }
    //women area prices done!
    else if (a == "312589") { window.z.value = 5; }
    else if (a == "314750") { window.z.value = 7; }
    else if (a == "315252") { window.z.value = 4.5; }
    else if (a == "311028") { window.z.value = 4; }
    else if (a == "321478") { window.z.value = 14; }
    else if (a == "326308") { window.z.value = 20; }
    else if (a == "329631") { window.z.value = 15; }
    else if (a == "324700") { window.z.value = 10; }
    else if (a == "331234") { window.z.value = 25; }
    else if (a == "330285") { window.z.value = 15; }
    else if (a == "334893") { window.z.value = 10; }
    else if (a == "339510") { window.z.value = 18; }
    //kids area prices done!
    else if (a == "412589") { window.z.value = 9; }
    else if (a == "413025") { window.z.value = 11; }
    else if (a == "419547") { window.z.value = 19; }
    else if (a == "410398") { window.z.value = 25; }
    else if (a == "420196") { window.z.value = 12; }
    else if (a == "421937") { window.z.value = 10; }
    else if (a == "420098") { window.z.value = 25; }
    else if (a == "421778") { window.z.value = 16; }
    else if (a == "432178") { window.z.value = 5; }
    else if (a == "430909") { window.z.value = 30; }
    else if (a == "430755") { window.z.value = 15; }
    else if (a == "433415") { window.z.value = 20; }
    //gifts center prices done!



    //now to the next input:
    var b = document.getElementById("p2").value;
    if (b == "116583") { window.x.value = 15; }
    else if (b == "113795") { window.x.value = 45.5; }
    else if (b == "117465") { window.x.value = 20; }
    else if (b == "119896") { window.x.value = 25; }
    else if (b == "124796") { window.x.value = 11; }
    else if (b == "123645") { window.x.value = 26; }
    else if (b == "124545") { window.x.value = 10; }
    else if (b == "129637") { window.x.value = 26; }
    else if (b == "136478") { window.x.value = 21; }
    else if (b == "133214") { window.x.value = 15; }
    else if (b == "134621") { window.x.value = 10; }
    else if (b == "130895") { window.x.value = 12; }
    //men area prices done!
    else if (b == "216548") { window.x.value = 16; }
    else if (b == "213452") { window.x.value = 14.5; }
    else if (b == "212145") { window.x.value = 26; }
    else if (b == "219874") { window.x.value = 19.9; }
    else if (b == "223645") { window.x.value = 55; }
    else if (b == "220147") { window.x.value = 31; }
    else if (b == "229763") { window.x.value = 54; }
    else if (b == "220103") { window.x.value = 47; }
    else if (b == "236485") { window.x.value = 28; }
    else if (b == "230147") { window.x.value = 27; }
    else if (b == "239841") { window.x.value = 19; }
    else if (b == "239510") { window.x.value = 20; }
    //women area prices done!
    else if (b == "312589") { window.x.value = 5; }
    else if (b == "314750") { window.x.value = 7; }
    else if (b == "315252") { window.x.value = 4.5; }
    else if (b == "311028") { window.x.value = 4; }
    else if (b == "321478") { window.x.value = 14; }
    else if (b == "326308") { window.x.value = 20; }
    else if (b == "329631") { window.x.value = 15; }
    else if (b == "324700") { window.x.value = 10; }
    else if (b == "331234") { window.x.value = 25; }
    else if (b == "330285") { window.x.value = 15; }
    else if (b == "334893") { window.x.value = 10; }
    else if (b == "339510") { window.x.value = 18; }
    //kids area prices done!
    else if (b == "412589") { window.x.value = 9; }
    else if (b == "413025") { window.x.value = 11; }
    else if (b == "419547") { window.x.value = 19; }
    else if (b == "410398") { window.x.value = 25; }
    else if (b == "420196") { window.x.value = 12; }
    else if (b == "421937") { window.x.value = 10; }
    else if (b == "420098") { window.x.value = 25; }
    else if (b == "421778") { window.x.value = 16; }
    else if (b == "432178") { window.x.value = 5; }
    else if (b == "430909") { window.x.value = 30; }
    else if (b == "430755") { window.x.value = 15; }
    else if (b == "433415") { window.x.value = 20; }
    //gifts center prices done!


    //now the last input:
    var c = document.getElementById("p2").value;
    if (c == "33333") {
        window.c.value = 15;

    }

}

