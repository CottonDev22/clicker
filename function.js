var wartosci = {
    bawelna: 0,
    wyliczanie: 0,
    narzedzia: 0,
    nawadnianie: 1,
    szybszeraczki: 1,
    autoczarny1: 0,
    autostary1: 0,
    wuzek: 0,
    resetv: 0,
    kosztreset: 1,
    resetmnoznik: 1,
    lepszabawelna: 1,
    ziarenka: 0,
    klucz1: 0,
    klucz2: 0,
    klucz3: 0,
    klucz4: 0,
    murzynbezrak: 0,
    zlotymurzyn: 0,
// itd
};
//RESET WARTOSCI
function dupa2() {
var wartosci = {
    bawelna: 0,
    wyliczanie: 0,
    narzedzia: 0,
    nawadnianie: 1,
    szybszeraczki: 1,
    autoczarny1: 0,
    autostary1: 0,
    wuzek: 0,
    resetv: 0,
    kosztreset: 1,
    resetmnoznik: 1,
    lepszabawelna: 1,
    ziarenka: 0,
    murzynbezrak: 0,
    zlotymurzyn: 0,
// itd
};
localStorage.setItem("gra", JSON.stringify(wartosci));
}

if (localStorage.getItem("gra") !== null) wartosci = JSON.parse(localStorage.getItem("gra"));
function dupa(){  // Button click
// ZAMIANA BAWELNY
wartosci.bawelna += 1;
// ZAPIS SAVEA

localStorage.setItem("gra", JSON.stringify(wartosci));
}
var zd = document.getElementById('zdj1');
var l= document.getElementById('zbieracz1');
var la= document.getElementById('zbieracz2');
var lb= document.getElementById('zbieracz3');
var xa = document.getElementById('pokazsklep');
var xb = document.getElementById('pokazrebirth');
var xc = document.getElementById('pokazupziarna');
var xe = document.getElementById('caseshop');
function klikniecia() {
    wartosci.bawelna = wartosci.bawelna + ((1 + wartosci.narzedzia * wartosci.lepszabawelna * (wartosci.nawadnianie * wartosci.szybszeraczki)) * wartosci.resetmnoznik);
    wartosci.wyliczanie = wartosci.bawelna;
    wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);

            zd.style.height = '52px';
            zd.style.width = '52px';
            
            document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
            document.getElementById('rebirty').innerHTML = wartosci.resetv;
            document.getElementById('rst1').innerHTML = "KOSZT: " + abbrNum((25000 * wartosci.kosztreset),2);
            document.getElementById('zbziarna').innerHTML = wartosci.ziarenka;
            document.getElementById("bezrak").innerHTML = wartosci.murzynbezrak + "x";
        }
function reset() {
    if (wartosci.bawelna >= 25000 * wartosci.kosztreset) {
        wartosci.bawelna = 0;
        wartosci.wyliczanie = 0;
        wartosci.narzedzia = 0;
        wartosci.nawadnianie = 1;
        wartosci.szybszeraczki = 1;
        wartosci.autoczarny1 = 0;
        wartosci.autostary1 = 0;
        wartosci.wuzek = 0;
        wartosci.kosztreset = (wartosci.kosztreset + 1) * 2;
        wartosci.resetv = wartosci.resetv + 1;
        wartosci.resetmnoznik = wartosci.resetv * 1.25;
        wartosci.lepszabawelna = 1;
        wartosci.ziarenka = wartosci.ziarenka + 5;
        wartosci.klucz1 = 0;
        wartosci.klucz2 = 0;
        wartosci.klucz3 = 0;
        wartosci.klucz4 = 0;
    document.getElementById('rebirty').innerHTML = wartosci.resetv;
    document.getElementById('zbziarna').innerHTML = wartosci.ziarenka;
    document.getElementById('rst1').innerHTML = "KOSZT: " + (25000 * wartosci.kosztreset);
    document.getElementById("bawelna").innerHTML = wartosci.bawelna;
    document.getElementById("u1").style.backgroundColor = "#E0FFFF";
    document.getElementById("u2").style.backgroundColor = "#E0FFFF";
    document.getElementById("u3").style.backgroundColor = "#E0FFFF";
    document.getElementById("u4").style.backgroundColor = "#E0FFFF";
    document.getElementById("u5").style.backgroundColor = "#E0FFFF";
    document.getElementById("u6").style.backgroundColor = "#E0FFFF";
    document.getElementById("u7").style.backgroundColor = "#E0FFFF";
    document.getElementById("u8").style.backgroundColor = "#E0FFFF";
    document.getElementById("u9").style.backgroundColor = "#E0FFFF";
    document.getElementById("zdjzbieranie").src="bawelna.png";
    l.style.display = 'none';
    la.style.display = 'none';
    lb.style.display = 'none';
}
}
function ShowAndHide() {

            
            if (xa.style.display == 'none') {
                xa.style.display = 'block';
                xb.style.display = 'none';
                xc.style.display = 'none';
                xe.style.display = 'none';
            } else {
                xa.style.display = 'none';
            }
            }
function ShowAndHide2() {

            
            if (xb.style.display == 'none') {
                xb.style.display = 'block';
                xa.style.display = 'none';
                xc.style.display = 'none';
                xe.style.display = 'none';
            } else {
                xb.style.display = 'none';
            }
            }
function ShowAndHide3() {
            if (xc.style.display == 'none') {
                xc.style.display = 'block';
                xb.style.display = 'none';
                xa.style.display = 'none';
                xe.style.display = 'none';
            } else {
                xc.style.display = 'none';
            }
            }
function ShowAndHide4() {
            if (xe.style.display == 'none') {
                xe.style.display = 'block';
                xb.style.display = 'none';
                xa.style.display = 'none';
                xc.style.display = 'none';
            } else {
                xe.style.display = 'none';
            }
            }
function upnarzedzia1() {
            if (wartosci.narzedzia == 0 && wartosci.bawelna >= 20) {
                wartosci.bawelna = wartosci.bawelna - 20;
                wartosci.wyliczanie = wartosci.bawelna;
                wartosci.narzedzia = 1;
                document.getElementById("u1").style.backgroundColor = "moccasin";
                wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
                document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
            }

}
function upnarzedzia2() {
            if (wartosci.narzedzia == 1 && wartosci.bawelna >= 350) {
                wartosci.bawelna = wartosci.bawelna - 350;
                wartosci.wyliczanie = wartosci.bawelna;
                wartosci.narzedzia = 5;
                document.getElementById("u2").style.backgroundColor = "moccasin";

                wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
                document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
            }
}
function upnarzedzia3() {
            if (wartosci.narzedzia == 5 && wartosci.bawelna >= 2500) {
                wartosci.bawelna = wartosci.bawelna - 2500;
                wartosci.wyliczanie = wartosci.bawelna;
                wartosci.narzedzia = 12;
                document.getElementById("u3").style.backgroundColor = "moccasin";

                wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
                document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
            }
}
function upnawadnianie() {
            if (wartosci.nawadnianie == 1 && wartosci.bawelna >= 4000) {
                wartosci.bawelna = wartosci.bawelna - 4000;
                wartosci.wyliczanie = wartosci.bawelna;
                wartosci.nawadnianie = 1.02;
                document.getElementById("u4").style.backgroundColor = "moccasin";

                wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
                document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
            }
}
function upszybszeraczki() {
            if (wartosci.szybszeraczki == 1 && wartosci.bawelna >= 25000) {
                wartosci.bawelna = wartosci.bawelna - 25000;
                wartosci.wyliczanie = wartosci.bawelna;
                wartosci.szybszeraczki = 1.03;
                document.getElementById("u5").style.backgroundColor = "moccasin";

                wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
                document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
            }
}
function upzmeczonyczarnuch() {
            if (wartosci.autoczarny1 == 0 && wartosci.bawelna >= 60000) {
                wartosci.bawelna = wartosci.bawelna - 60000;
                wartosci.wyliczanie = wartosci.bawelna;
                wartosci.autoczarny1 = 1;
                document.getElementById("u6").style.backgroundColor = "moccasin";

                wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
                document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
                
            }
}
function uplepszabawelna() {
            if (wartosci.lepszabawelna == 1 && wartosci.bawelna >= 25000000) {
                wartosci.bawelna = wartosci.bawelna - 25000000;
                wartosci.wyliczanie = wartosci.bawelna;
                wartosci.lepszabawelna = 1.1;
                document.getElementById("u9").style.backgroundColor = "moccasin";

                wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
                document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
                document.getElementById("zdjzbieranie").src="bawelnalep.png";
            }
}
function foo() {
    if (wartosci.autoczarny1>=1) {
        wartosci.bawelna = wartosci.bawelna + ((1 + wartosci.narzedzia * wartosci.lepszabawelna * (wartosci.nawadnianie * wartosci.szybszeraczki)) * wartosci.resetmnoznik);
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
var l = document.getElementById('zbieracz1');
            if (l.style.display == 'none') {
                l.style.display = 'block';

            } else if (l.style.display = 'block' && wartosci.autoczarny1==0) {
                l.style.display = 'none';
            }
            }
}

setInterval(foo, 1000);
foo();
///xdddddddddddddddd
function upstarszyczlowiek() {
            if (wartosci.autostary1 == 0 && wartosci.bawelna >= 650000) {
                wartosci.bawelna = wartosci.bawelna - 650000;
                wartosci.wyliczanie = wartosci.bawelna;
                wartosci.autostary1 = 1;
                document.getElementById("u7").style.backgroundColor = "moccasin";

                wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
                document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
                
            }
}
function stary() {
    if (wartosci.autostary1>=1) {
        wartosci.bawelna = wartosci.bawelna + ((4 + wartosci.narzedzia * wartosci.lepszabawelna * (wartosci.nawadnianie * wartosci.szybszeraczki)) * wartosci.resetmnoznik);
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
var la = document.getElementById('zbieracz2');
            if (la.style.display == 'none') {
                la.style.display = 'block';
            } else if (la.style.display = 'block' && wartosci.autostary1==0){
                la.style.display = 'none';
            }
            }

}
setInterval(stary, 300);
stary();
///WHEEELCHAIR
function upwheelchair() {
            if (wartosci.wuzek == 0 && wartosci.bawelna >= 2500000) {
                wartosci.bawelna = wartosci.bawelna - 2500000;
                wartosci.wyliczanie = wartosci.bawelna;
                wartosci.wuzek= 1;
                document.getElementById("u8").style.backgroundColor = "moccasin";

                wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
                document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
                
            }
}
function wuzeek() {
    if (wartosci.wuzek==1) {
        wartosci.bawelna = wartosci.bawelna + ((15 + wartosci.narzedzia * wartosci.lepszabawelna * (wartosci.nawadnianie * wartosci.szybszeraczki)) * wartosci.resetmnoznik);
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
        document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        var lb= document.getElementById('zbieracz3');
            if (lb.style.display == 'none') {
                lb.style.display = 'block';
            } else if (lb.style.display = 'block' && wartosci.wuzek==0){
                lb.style.display = 'none';
            }
            }
}

setInterval(wuzeek, 100);
wuzeek();

function abbrNum(number, decPlaces) {
    decPlaces = Math.pow(10, decPlaces);
    var abbrev = ["K", "M", "B", "T", "Qa", "Qn", "Sx", "Se", "O", "N"];
    for (var i = abbrev.length - 1; i >= 0; i--) {
        var size = Math.pow(10, (i + 1) * 3);
        if (size <= number) {
        number = Math.round(number * decPlaces / size) / decPlaces;
        if ((number == 1000) && (i < abbrev.length - 1)) {
            number = 1;
            i++;
        }
        number += abbrev[i];
        break;
        }
    }
    return number;
    }
    function xddddd() {
        
        zd.style.height = '50px';
        zd.style.width = '50px';
}

setInterval(xddddd, 1);
xddddd();

function bezrak() {
    if (wartosci.murzynbezrak>=1) {
        wartosci.bawelna = wartosci.bawelna + 5 * wartosci.murzynbezrak;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
    }
}

setInterval(bezrak, 5000);
bezrak();

function zlotyblack() {
    if (wartosci.zlotymurzyn>=1) {
        wartosci.bawelna = wartosci.bawelna + 100 * wartosci.zlotymurzyn;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
    }
}

setInterval(zlotyblack, 5);
zlotyblack();

function czest1() {
    var c1 = document.getElementById('ches1');
    c1.src = "chest1a.png";
}
function czest1a() {
    var c1 = document.getElementById('ches1');
    c1.src = "chest1.png";
}

function czest2() {
    var c1 = document.getElementById('ches2');
    c1.src = "chest2a.png";
}
function czest2a() {
    var c1 = document.getElementById('ches2');
    c1.src = "chest2.png";
}

function czest3() {
    var c1 = document.getElementById('ches3');
    c1.src = "chest3a.png";
}
function czest3a() {
    var c1 = document.getElementById('ches3');
    c1.src = "chest3.png";
}

function czest4() {
    var c1 = document.getElementById('ches4');
    c1.src = "chest4a.png";
}
function czest4a() {
    var c1 = document.getElementById('ches4');
    c1.src = "chest4.png";
}

function klucza1() {
    if (wartosci.ziarenka >= 10) {
        wartosci.ziarenka = wartosci.ziarenka - 10;
        wartosci.klucz1 = wartosci.klucz1 + 1;
        document.getElementById('zbziarna').innerHTML = wartosci.ziarenka;
    }
}
function otwieraj1() {
    if (wartosci.klucz1 >= 1) {
        wartosci.klucz1 = wartosci.klucz1 - 1;
        let essa = Math.floor((Math.random() * 1000) + 1);
        if (essa <= 500) {
            document.getElementById("informacja1").innerHTML = "dropnieto: murzyn bez rąk";
            wartosci.murzynbezrak = wartosci.murzynbezrak + 1;
            document.getElementById("bezrak").innerHTML = wartosci.murzynbezrak + "x";
        } else if (essa<=850 && essa >= 501) {
            document.getElementById("informacja1").innerHTML = "dropnieto 2x twoja bawelna";
            wartosci.bawelna = wartosci.bawelna * 2;
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
            document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;

        } else if (essa <= 900 && essa >= 851) {
            document.getElementById("informacja1").innerHTML = "dropnieto 15 ryżu";
            wartosci.ziarenka = wartosci.ziarenka + 15;
            document.getElementById("zbziarna").innerHTML = wartosci.ziarenka;
        } else if (essa <= 999 && essa >= 901) {
            document.getElementById("informacja1").innerHTML = "dropnieto: 3x twoja bawelna";
            wartosci.bawelna = wartosci.bawelna * 3;
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
            document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;

        } else if (essa == 1000) {
            document.getElementById("informacja1").innerHTML = "dropnieto: złoty murzyn";
            wartosci.zlotymurzyn = wartosci.zlotymurzyn + 1;
        }
    } else {
        document.getElementById("informacja1").innerHTML = "brak klucza";

    }
}