var wartosci = {
    exp: 0,
    lvl: 1,
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
    platynowymurzyn: 0,
    build0: 0,
    licz0: 0,
    build1: 0,
    licz1: 0,
    build2: 0,
    licz2: 0,
    build3: 0,
    licz3: 0,
    build4: 0,
    licz4: 0,
    build5: 0,
    licz5: 0,
    build6: 0,
    licz6: 0,
    build7: 0,
    licz7: 0,
    delay1: 1000,
    podwajacz: 0,
    floyd: 0,
    obama: 0,
// itd
};
//RESET WARTOSCI
function dupa2() {
var wartosci = {
    exp: 0,
    lvl: 1,
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
    platynowymurzyn: 0,
    klucz1: 0,
    klucz2: 0,
    klucz3: 0,
    klucz4: 0,
    build0: 0,
    licz0: 0,
    build1: 0,
    licz1: 0,
    build2: 0,
    licz2: 0,
    build3: 0,
    licz3: 0,
    build4: 0,
    licz4: 0,
    build5: 0,
    licz5: 0,
    build6: 0,
    licz6: 0,
    build7: 0,
    licz7: 0,
    podwajacz: 0,
    delay1: 1000,
    floyd: 0,
    obama: 0,
// itd
};

localStorage.setItem("gra", JSON.stringify(wartosci));
}

if (localStorage.getItem("gra") !== null) wartosci = JSON.parse(localStorage.getItem("gra"));
function dupa(){  // Button click
    if (wartosci.narzedzia >= 1) document.getElementById("u1").style.backgroundColor = "moccasin";
    if (wartosci.narzedzia >= 5) document.getElementById("u2").style.backgroundColor = "moccasin";
    if (wartosci.narzedzia >= 12) document.getElementById("u3").style.backgroundColor = "moccasin";
    if (wartosci.nawadnianie > 1) document.getElementById("u4").style.backgroundColor = "moccasin";
    if (wartosci.szybszeraczki > 1) document.getElementById("u5").style.backgroundColor = "moccasin";
    if (wartosci.autoczarny1 > 0) document.getElementById("u6").style.backgroundColor = "moccasin";
    if (wartosci.stary1 > 0) document.getElementById("u7").style.backgroundColor = "moccasin";
    if (wartosci.wuzek > 0) document.getElementById("u8").style.backgroundColor = "moccasin";
// ZAMIANA BAWELNY
wartosci.bawelna += 1;
// ZAPIS SAVEA

localStorage.setItem("gra", JSON.stringify(wartosci));
}
setInterval(dupa, 55000);
dupa();
var zd = document.getElementById('zdj1');
var l= document.getElementById('zbieracz1');
var la= document.getElementById('zbieracz2');
var lb= document.getElementById('zbieracz3');
var xa = document.getElementById('pokazsklep');
var xb = document.getElementById('pokazrebirth');
var xc = document.getElementById('pokazupziarna');
var xe = document.getElementById('caseshop');
var xf = document.getElementById('budynki');

function klikniecia() {

    wartosci.bawelna = wartosci.bawelna + ((1 + wartosci.narzedzia * wartosci.lepszabawelna * (wartosci.nawadnianie * wartosci.szybszeraczki))  * wartosci.resetmnoznik) ;
    wartosci.wyliczanie = wartosci.bawelna;
    wartosci.exp = wartosci.exp + 1 + wartosci.podwajacz;

    if (wartosci.exp >= 1000 * (wartosci.lvl*1.7)) {
        wartosci.lvl = wartosci.lvl + 1;
        wartosci.exp = 0;
        wartosci.ziarenka = wartosci.ziarenka + (wartosci.lvl *3);
    }

document.getElementById("progres").setAttribute("max", ((1.7 *wartosci.lvl) * 1000));
document.getElementById("progres").setAttribute("value", wartosci.exp);
    document.getElementById('lvltekst').innerHTML = wartosci.lvl;
    document.getElementById('xp').innerHTML = abbrNum(wartosci.exp,2) + " / " +  abbrNum(1000 * (wartosci.lvl*1.7), 2);
    document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie,2);
            zd.style.height = '52px';
            zd.style.width = '52px';
            

            document.getElementById('rebirty').innerHTML = wartosci.resetv;
            document.getElementById('rst1').innerHTML = "KOSZT: " + abbrNum((25000 * wartosci.kosztreset),2);
            document.getElementById('zbziarna').innerHTML = wartosci.ziarenka;
            document.getElementById("bezrak").innerHTML = wartosci.murzynbezrak + "x";
            document.getElementById("zlotyczern").innerHTML = wartosci.zlotymurzyn + "x";
            document.getElementById("MJ").innerHTML = wartosci.platynowymurzyn + "x";
            document.getElementById("floyd").innerHTML = wartosci.floyd + "x";
            document.getElementById("obama").innerHTML = wartosci.obama + "x";

            //budynek0
            document.getElementById("licz0").innerHTML = abbrNum(100*(1 + wartosci.build0)* (1 + wartosci.licz0),2);
            document.getElementById("licz0a").innerHTML = abbrNum(wartosci.licz0,1);
            //budynek1
            document.getElementById("licz1").innerHTML = abbrNum(1000*(1 + wartosci.build1)* (1 + wartosci.licz1),2);
            document.getElementById("licz2").innerHTML = abbrNum(wartosci.licz1,1);
            //budynek2
            document.getElementById("licz3").innerHTML = abbrNum(8000*(1 + wartosci.build2) * (1 + wartosci.licz2),2);
            document.getElementById("licz4").innerHTML = abbrNum(wartosci.licz2,1);
            //budynek3
            document.getElementById("licz5").innerHTML = abbrNum(25000*(1 + wartosci.build3) * (1 + wartosci.licz3),2);
            document.getElementById("licz6").innerHTML = abbrNum(wartosci.licz3,1);
            //budynek4
            document.getElementById("licz7").innerHTML = abbrNum(180000*(1 + wartosci.build4) * (1 + wartosci.licz4),2);
            document.getElementById("licz8").innerHTML = abbrNum(wartosci.licz4,1);
            //budynek5
            document.getElementById("licz9").innerHTML = abbrNum(520000*(1 + wartosci.build5) * (1 + wartosci.licz5),2);
            document.getElementById("licz10").innerHTML = abbrNum(wartosci.licz5,1);
            //budynek6
            document.getElementById("licz11").innerHTML = abbrNum(1200000*(1 + wartosci.build6) * (1 + wartosci.licz6),2);
            document.getElementById("licz12").innerHTML = abbrNum(wartosci.licz6,1);
            //budynek7
            document.getElementById("licz13").innerHTML = abbrNum(25000000*(1 + wartosci.build7) * (1 + wartosci.licz7),2);
            document.getElementById("licz14").innerHTML = abbrNum(wartosci.licz7,1);
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
        wartosci.build0 = 0;
        wartosci.licz0 = 0,
        wartosci.build1 = 0;
        wartosci.licz1 = 0,
        wartosci.build2 = 0;
        wartosci.licz2 = 0,
        wartosci.build3 = 0;
        wartosci.licz3 = 0,
        wartosci.build4 = 0;
        wartosci.licz4 = 0,
        wartosci.build5 = 0;
        wartosci.licz5 = 0,
        wartosci.build6 = 0;
        wartosci.licz6 = 0,
        wartosci.build7 = 0;
        wartosci.licz7 = 0,
        
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
                xf.style.display = 'none';
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
                xf.style.display = 'none';
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
                xf.style.display = 'none';
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
                xf.style.display = 'none';
            } else {
                xe.style.display = 'none';
            }
            }
function ShowAndHide5() {
                if (xf.style.display == 'none') {
                    xf.style.display = 'block';
                    xb.style.display = 'none';
                    xa.style.display = 'none';
                    xc.style.display = 'none';
                    xe.style.display = 'none';
                } else {
                    xf.style.display = 'none';
                }
                }
function upnarzedzia1() {
            if (wartosci.narzedzia == 0 && wartosci.bawelna >= 20) {
                wartosci.bawelna = wartosci.bawelna - 20;
                wartosci.wyliczanie = abbrNum(wartosci.bawelna,2);
                document.getElementById("bawelna").innerHTML =wartosci.wyliczanie;
                wartosci.narzedzia = 1;
                document.getElementById("u1").style.backgroundColor = "moccasin";

            }

}
function upnarzedzia2() {
            if (wartosci.narzedzia == 1 && wartosci.bawelna >= 350) {
                wartosci.bawelna = wartosci.bawelna - 350;
                wartosci.wyliczanie = wartosci.bawelna;
                document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie, 2);
                wartosci.narzedzia = 5;
                document.getElementById("u2").style.backgroundColor = "moccasin";

            }
}
function upnarzedzia3() {
            if (wartosci.narzedzia == 5 && wartosci.bawelna >= 2500) {
                wartosci.bawelna = wartosci.bawelna - 2500;
                wartosci.wyliczanie = wartosci.bawelna;
                document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie, 2);
                wartosci.narzedzia = 12;
                document.getElementById("u3").style.backgroundColor = "moccasin";

            }
}
function upnawadnianie() {
            if (wartosci.nawadnianie == 1 && wartosci.bawelna >= 4000) {
                wartosci.bawelna = wartosci.bawelna - 4000;
                wartosci.wyliczanie = wartosci.bawelna;
                document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie, 2);
                wartosci.nawadnianie = 1.02;
                document.getElementById("u4").style.backgroundColor = "moccasin";


            }
}
function upszybszeraczki() {
            if (wartosci.szybszeraczki == 1 && wartosci.bawelna >= 25000) {
                wartosci.bawelna = wartosci.bawelna - 25000;
                wartosci.wyliczanie = wartosci.bawelna;
                document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie, 2);
                wartosci.szybszeraczki = 1.03;
                document.getElementById("u5").style.backgroundColor = "moccasin";
            }
}
function upzmeczonyczarnuch() {
            if (wartosci.autoczarny1 == 0 && wartosci.bawelna >= 60000) {
                wartosci.bawelna = wartosci.bawelna - 60000;
                wartosci.wyliczanie = wartosci.bawelna;
                document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie, 2);
                wartosci.autoczarny1 = 1;
                document.getElementById("u6").style.backgroundColor = "moccasin";
                
            }
}
function uplepszabawelna() {
            if (wartosci.lepszabawelna == 1 && wartosci.bawelna >= 25000000) {
                wartosci.bawelna = wartosci.bawelna - 25000000;
                wartosci.wyliczanie = wartosci.bawelna;
                document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie, 2);
                wartosci.lepszabawelna = 1.1;
                document.getElementById("u9").style.backgroundColor = "moccasin";

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

function platynowyblack() {
    if (wartosci.platynowymurzyn>=1) {
        wartosci.bawelna = wartosci.bawelna + 20000 * wartosci.platynowymurzyn;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
    }
}

setInterval(platynowyblack, 2);
platynowyblack();

function florydaa() {
    if (wartosci.floyd>=1) {
        wartosci.bawelna = wartosci.bawelna + 50 * wartosci.floyd;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
    }
}

setInterval(florydaa, 3000);
florydaa();

function oba_ma() {
    if (wartosci.obama>=1) {
        wartosci.bawelna = wartosci.bawelna + (80000 * wartosci.obama * wartosci.resetmnoznik) ;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
    }
}

setInterval(oba_ma, 1);
oba_ma();

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
function klucza2() {
    if (wartosci.ziarenka >= 70) {
        wartosci.ziarenka = wartosci.ziarenka - 70;
        wartosci.klucz2 = wartosci.klucz2 + 1;
        document.getElementById('zbziarna').innerHTML = wartosci.ziarenka;
    }
}
function klucza3() {
    if (wartosci.ziarenka >= 200) {
        wartosci.ziarenka = wartosci.ziarenka - 200;
        wartosci.klucz3 = wartosci.klucz3 + 1;
        document.getElementById('zbziarna').innerHTML = wartosci.ziarenka;
    }
}
function klucza4() {
    if (wartosci.ziarenka >= 850) {
        wartosci.ziarenka = wartosci.ziarenka - 850;
        wartosci.klucz4 = wartosci.klucz4 + 1;
        document.getElementById('zbziarna').innerHTML = wartosci.ziarenka;
    }
}
function otwieraj1() {
    if (wartosci.klucz1 >= 1) {
        wartosci.klucz1 = wartosci.klucz1 - 1;
        let essa = Math.floor((Math.random() * 1000) + 1);
        if (essa <= 500) {
            document.getElementById("informacja1").innerHTML =  "dropnieto: murzyn bez rąk";
            wartosci.murzynbezrak = wartosci.murzynbezrak + 1;
            document.getElementById("bezrak").innerHTML = wartosci.murzynbezrak + "x";
        } else if (essa<=850 && essa >= 501) {
            document.getElementById("informacja1").innerHTML = "dropnieto 1,01x twoja bawelna";
            wartosci.bawelna = wartosci.bawelna * 1.01;
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
            document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;

        } else if (essa <= 900 && essa >= 851) {
            document.getElementById("informacja1").innerHTML = "dropnieto 15 ryżu";
            wartosci.ziarenka = wartosci.ziarenka + 15;
            document.getElementById("zbziarna").innerHTML = wartosci.ziarenka;
        } else if (essa <= 999 && essa >= 901) {
            document.getElementById("informacja1").innerHTML = "dropnieto: 1,02x twoja bawelna";
            wartosci.bawelna = wartosci.bawelna * 1.02;
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
            document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;

        } else if (essa == 1000) {
            document.getElementById("informacja1").innerHTML = "dropnieto: złoty murzyn";
            wartosci.zlotymurzyn = wartosci.zlotymurzyn + 1;
            document.getElementById("zlotyczern").innerHTML = wartosci.zlotymurzyn + "x";
        }
    } else {
        document.getElementById("informacja1").innerHTML = "brak klucza";

    }
}
function otwieraj2() {
    if (wartosci.klucz2 >= 1) {
        wartosci.klucz2 = wartosci.klucz2 - 1;
        let essa = Math.floor((Math.random() * 1000) + 1);
        if (essa <= 100) {
            document.getElementById("informacja1").innerHTML =  "dropnieto: 50xp";
            wartosci.exp = wartosci.exp + 50;
            if (wartosci.exp >= 1000 * (wartosci.lvl*1.7)) {
                wartosci.lvl = wartosci.lvl + 1;
                wartosci.exp = 0;
                wartosci.ziarenka = wartosci.ziarenka + (wartosci.lvl *3);
            }
            document.getElementById("info").src="star.png";
            document.getElementById('xp').innerHTML = abbrNum(wartosci.exp,2) + " / " +  abbrNum(1000 * (wartosci.lvl*1.7), 2);
        } else if (essa<=350 && essa >= 101) {
            document.getElementById("informacja1").innerHTML = "dropnieto: 20xp";
            wartosci.exp = wartosci.exp + 20;
            if (wartosci.exp >= 1000 * (wartosci.lvl*1.7)) {
                wartosci.lvl = wartosci.lvl + 1;
                wartosci.exp = 0;
                wartosci.ziarenka = wartosci.ziarenka + (wartosci.lvl *3);
            }
            document.getElementById("info").src="star.png";
            document.getElementById('xp').innerHTML = abbrNum(wartosci.exp,2) + " / " +  abbrNum(1000 * (wartosci.lvl*1.7), 2);

        } else if (essa <= 600 && essa >= 351) {
            document.getElementById("informacja1").innerHTML = "dropnieto 10x murzynbezrak";
            wartosci.murzynbezrak = wartosci.murzynbezrak + 10;
            document.getElementById("bezrak").innerHTML = wartosci.murzynbezrak + "x";
            document.getElementById("info").src="nohands.png";
        } else if (essa <= 989 && essa >= 601) {
            document.getElementById("informacja1").innerHTML = "dropnieto: 1,01x twoja bawelna";
            document.getElementById("info").src="bawelna.png";
            wartosci.bawelna = wartosci.bawelna * 1.01;
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
            document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;

        } else if (essa <= 999 && essa >= 990) {
            document.getElementById("informacja1").innerHTML = "dropnieto: 500xp";
            wartosci.exp = wartosci.exp + 500;
            if (wartosci.exp >= 1000 * (wartosci.lvl*1.7)) {
                wartosci.lvl = wartosci.lvl + 1;
                wartosci.exp = 0;
                wartosci.ziarenka = wartosci.ziarenka + (wartosci.lvl *3);
            }
            document.getElementById("info").src="star.png";
            document.getElementById('xp').innerHTML = abbrNum(wartosci.exp,2) + " / " +  abbrNum(1000 * (wartosci.lvl*1.7), 2);
        }
         else if (essa == 1000) {
            document.getElementById("informacja1").innerHTML = "dropnieto: Platynowy Murzyn";
            wartosci.platynowymurzyn = wartosci.platynowymurzyn + 1;
            document.getElementById("MJ").innerHTML = wartosci.platynowymurzyn + "x";
            document.getElementById("info").src="MJ.png";
        }
    }
    else {
        document.getElementById("informacja1").innerHTML = "brak klucza";
        document.getElementById("info").src="";
    }
    document.getElementById('lvltekst').innerHTML = wartosci.lvl;
    document.getElementById("progres").setAttribute("max", ((1.7 *wartosci.lvl) * 1000));
document.getElementById("progres").setAttribute("value", wartosci.exp);
    }
    function otwieraj3() {
        if (wartosci.klucz3 >= 1) {
            wartosci.klucz3 = wartosci.klucz3 - 1;
            let essa = Math.floor((Math.random() * 100000) + 1);
            if (essa <= 10000) {
                document.getElementById("informacja1").innerHTML =  "dropnieto: potrojenie doświadczenia";
               potrojenie();
                document.getElementById("info").src="star.png";


            } else if (essa<=55000 && essa >= 10001) {

                document.getElementById("informacja1").innerHTML = "dropnieto: 1,02x twoja bawelna";
                document.getElementById("info").src="bawelna.png";
                wartosci.bawelna = wartosci.bawelna * 1.02;
                wartosci.wyliczanie = wartosci.bawelna;
                wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
                document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
    
    
            } else if (essa <= 90000 && essa >= 55001) {
                document.getElementById("informacja1").innerHTML = "dropnieto: Grzegorz Floryda x1";
                wartosci.floyd = wartosci.floyd + 1;
                document.getElementById("floyd").innerHTML = wartosci.floyd + "x";
                document.getElementById("info").src="floryda.png";

            } else if (essa <= 96000 && essa >= 90001) {
                document.getElementById("informacja1").innerHTML = "dropnieto: 100x murzyn bez rąk";
                wartosci.murzynbezrak = wartosci.murzynbezrak + 100;
                document.getElementById("bezrak").innerHTML = wartosci.murzynbezrak + "x";
                document.getElementById("info").src="nohands.png";
    
            } else if (essa <= 99999 && essa >= 96001) {
                document.getElementById("informacja1").innerHTML = "dropnieto: 1500xp";
                wartosci.exp = wartosci.exp + 1500;
                if (wartosci.exp >= 1000 * (wartosci.lvl*1.7)) {
                    wartosci.lvl = wartosci.lvl + 1;
                    wartosci.exp = 0;
                    wartosci.ziarenka = wartosci.ziarenka + (wartosci.lvl *3);
                }
                document.getElementById("info").src="star.png";
                document.getElementById('xp').innerHTML = abbrNum(wartosci.exp,2) + " / " +  abbrNum(1000 * (wartosci.lvl*1.7), 2);
            }
             else if (essa == 100000) {
                document.getElementById("informacja1").innerHTML = "dropnieto: Obama!";
                wartosci.obama = wartosci.obama + 1;
                document.getElementById("obama").innerHTML = wartosci.obama + "x";
                document.getElementById("info").src="drop.png";
            }
        }
        else {
            document.getElementById("informacja1").innerHTML = "brak klucza";
            document.getElementById("info").src="";
        }
        document.getElementById('lvltekst').innerHTML = wartosci.lvl;
        document.getElementById("progres").setAttribute("max", ((1.7 *wartosci.lvl) * 1000));
    document.getElementById("progres").setAttribute("value", wartosci.exp);
        }
////////// BUDYNKI


function budynek0() {
    if (wartosci.bawelna >=100 * (1 + wartosci.build0) * (1 + wartosci.licz0) && wartosci.licz0 < 2001) {
        wartosci.bawelna = wartosci.bawelna - 100 * (1 + wartosci.build0) * (1 + wartosci.licz0);
        wartosci.build0 = wartosci.build0 + 1000;
        wartosci.licz0 = wartosci.licz0 + 1;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
        document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        document.getElementById("licz0").innerHTML = abbrNum(100*(1 + wartosci.build0) * (1 + wartosci.licz0),2);
        document.getElementById("licz0a").innerHTML = abbrNum(wartosci.licz0,1);
    }
}

function budynek1() {
    if (wartosci.bawelna >=1000 * (1 + wartosci.build1) * (1 + wartosci.licz1) && wartosci.licz1 < 2001) {
        wartosci.bawelna = wartosci.bawelna - 1000 * (1 + wartosci.build1) * (1 + wartosci.licz1);
        wartosci.build1 = wartosci.build1 + 8;
        wartosci.licz1 = wartosci.licz1 + 1;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
        document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        document.getElementById("licz1").innerHTML = abbrNum(1000*(1 + wartosci.build1) * (1 + wartosci.licz1),2);
        document.getElementById("licz2").innerHTML = abbrNum(wartosci.licz1,1);
    }
}
function budynek2() {
    if (wartosci.bawelna >=8000 * (1 + wartosci.build2) * (1 + wartosci.licz2) && wartosci.licz2 < 2001) {
        wartosci.bawelna = wartosci.bawelna - 8000 * (1 + wartosci.build2) * (1 + wartosci.licz2);
        wartosci.build2 = wartosci.build2 + 35;
        wartosci.licz2 = wartosci.licz2 + 1;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
        document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        document.getElementById("licz3").innerHTML = abbrNum(8000*(1 + wartosci.build2) * (1 + wartosci.licz2),2);
        document.getElementById("licz4").innerHTML = abbrNum(wartosci.licz2,1);
    }
}
function budynek3() {
    if (wartosci.bawelna >=25000 * (1 + wartosci.build3) * (1 + wartosci.licz3) && wartosci.licz3 < 2001) {
        wartosci.bawelna = wartosci.bawelna - 25000 * (1 + wartosci.build3) * (1 + wartosci.licz3);
        wartosci.build3 = wartosci.build3 + 140;
        wartosci.licz3 = wartosci.licz3 + 1;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
        document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        document.getElementById("licz5").innerHTML = abbrNum(25000*(1 + wartosci.build3) * (1 + wartosci.licz3),2);
        document.getElementById("licz6").innerHTML = abbrNum(wartosci.licz3,1);
    }
}
function budynek4() {
    if (wartosci.bawelna >=180000 * (1 + wartosci.build4) * (1 + wartosci.licz4) && wartosci.licz4 < 2001) {
        wartosci.bawelna = wartosci.bawelna - 180000 * (1 + wartosci.build4) * (1 + wartosci.licz4);
        wartosci.build4 = wartosci.build4 + 350;
        wartosci.licz4 = wartosci.licz4 + 1;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
        document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        document.getElementById("licz7").innerHTML = abbrNum(66000*(1 + wartosci.build4) * (1 + wartosci.licz4),2);
        document.getElementById("licz8").innerHTML = abbrNum(wartosci.licz4,1);
    }
}
function budynek5() {
    if (wartosci.bawelna >=520000 * (1 + wartosci.build5) * (1 + wartosci.licz5) && wartosci.licz5 < 2001) {
        wartosci.bawelna = wartosci.bawelna - 520000 * (1 + wartosci.build5) * (1 + wartosci.licz5);
        wartosci.build5 = wartosci.build5 + 800;
        wartosci.licz5 = wartosci.licz5 + 1;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
        document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        document.getElementById("licz9").innerHTML = abbrNum(520000*(1 + wartosci.build5) * (1 + wartosci.licz5),2);
        document.getElementById("licz10").innerHTML = abbrNum(wartosci.licz5,1);
    }
}
function budynek6() {
    if (wartosci.bawelna >=1200000 * (1 + wartosci.build6) * (1 + wartosci.licz6) && wartosci.licz6 < 2001) {
        wartosci.bawelna = wartosci.bawelna - 1200000 * (1 + wartosci.build6) * (1 + wartosci.licz6);
        wartosci.build6 = wartosci.build6 + 2500;
        wartosci.licz6 = wartosci.licz6 + 1;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
        document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        document.getElementById("licz11").innerHTML = abbrNum(1200000*(1 + wartosci.build6) * (1 + wartosci.licz6),2);
        document.getElementById("licz12").innerHTML = abbrNum(wartosci.licz6,1);
    }
}
function blackman1() {
    if (wartosci.licz0 > 0) {
        wartosci.bawelna = wartosci.bawelna + ((1 + wartosci.narzedzia * wartosci.lepszabawelna * (wartosci.nawadnianie * wartosci.szybszeraczki))  * wartosci.resetmnoznik) * 1 *( 1+ ((1.01 * wartosci.licz1) + 1* (1.015 * wartosci.licz2)+ 1* (1.02 * wartosci.licz3) + 1* (1.03 * wartosci.licz4) + 1* (1.05 * wartosci.licz5)+ 1* (1.06 * wartosci.licz6)));
        wartosci.wyliczanie = wartosci.bawelna;
        document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie,2);
        wartosci.delay1 = 1000/wartosci.licz0;
    }
}
setInterval(blackman1, wartosci.delay1);
blackman1();

// TUTAJ KONCZA SIE BUDYNKI DOTYCZACE 1 CZARNUCHA
function budynek7() {
    if (wartosci.bawelna >=25000000 * (1 + wartosci.build7) * (1 + wartosci.licz7) && wartosci.licz7 < 2001) {
        wartosci.bawelna = wartosci.bawelna - 25000000 * (1 + wartosci.build7) * (1 + wartosci.licz7);
        wartosci.build7 = wartosci.build7 + 4200;
        wartosci.licz7 = wartosci.licz7 + 1;
        wartosci.wyliczanie = wartosci.bawelna;
        wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
        document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        document.getElementById("licz13").innerHTML = abbrNum(25000000*(1 + wartosci.build7) * (1 + wartosci.licz7),2);
        document.getElementById("licz14").innerHTML = abbrNum(wartosci.licz7,1);
    }
}
var sek = 0;
function potrojenie() {
    sek = 0;
    function potrojnyxp() {
        sek = sek + 1;
        wartosci.podwajacz = 2;
        if (sek >= 60) {
            clearInterval(refreshIntervalId);
            
            wartosci.podwajacz = 0;
        }
    }

    var refreshIntervalId = setInterval(potrojnyxp, 1000);


    potrojnyxp();
}