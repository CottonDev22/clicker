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

//SKRZYNIE
    klucz1: 0,
    klucz2: 0,
    klucz3: 0,
    klucz4: 0,
//RODZAJE KART
    tc:5000,
    tu:4000,
    tr:2500,
    te:650,
    tl:25,
    ts:1,
    th:150,
//BUDYNKI
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
//NIEWOLNICY
    murzynbezrak: 0,
    zlotymurzyn: 0,
    platynowymurzyn: 0,
    floyd: 0,
    obama: 0,
    gigner: 0,
    blm: 0,
    farm1: 0,
    farm2: 0,
    golem: 0,
    giant: 0,
    bodypositive: 0,
    will: 0,
    stopracism: 0,
    znikawnocy: 0,
    rudyzyd: 0,
    vtbg: 0,
//RODZAJE
    common: 0,
    uncommon: 0,
    rare: 0,
    epic: 0,
    legendary: 0,
    special: 0,
//HALLOWEEN EVENT
    h1: 0,
    candy: 0,
    maska: 0,
    zombie: 0,
    opiumhalloween: 0,
    marasskeleton: 0,
    strasznaczapka: 0,
    gargoyle: 0,
    jigsaw:0,
    chucky:0,
    demencja:0,
    elegancki:0,
    white2115:0,
    skolioza:0,
    podlozkiem:0,
    h1lvl:0,
    h1mnoznik:0,
    h1zbieracz:0,
// itd
//ITEMCOUNTER
    itemcount:0,
    itemcountmax:3,
    patyk:1,
    patyka:1,
    h1zyrandol:1,
    h1zyrandolup:0,
    lancuch:1,
    lancucha:1,
    lucky:0,
    autoexp:1,
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
//SKRZYNIE
    klucz1: 0,
    klucz2: 0,
    klucz3: 0,
    klucz4: 0,
    //RODZAJE KART
    tc:5000,
    tu:4000,
    tr:2500,
    te:650,
    tl:25,
    ts:1,
    th:150,
//BUDYNKI
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
//NIEWOLNICY
    murzynbezrak: 0,
    zlotymurzyn: 0,
    platynowymurzyn: 0,
    floyd: 0,
    obama: 0,
    gigner: 0,
    blm: 0,
    farm1: 0,
    farm2: 0,
    golem: 0,
    giant: 0,
    bodypositive: 0,
    will: 0,
    stopracism: 0,
    znikawnocy: 0,
    rudyzyd: 0,
    vtbg: 0,
//RODZAJE
    common: 0,
    uncommon: 0,
    rare: 0,
    epic: 0,
    legendary: 0,
    special: 0,
//HALLOWEEN EVENT
    h1: 0,
    candy: 0,
    maska: 0,
    zombie: 0,
    opiumhalloween: 0,
    marasskeleton: 0,
    strasznaczapka: 0,
    gargoyle: 0,
    jigsaw:0,
    chucky:0,
    demencja:0,
    elegancki:0,
    white2115:0,
    skolioza:0,
    podlozkiem:0,
    h1lvl:0,
    h1mnoznik:0,
    h1zbieracz:0,
// itd
    //ITEMCOUNTER
    itemcount:0,
    itemcountmax:3,
    patyk:1,
    patyka:1,
    h1zyrandol:1,
    h1zyrandolup:0,
    lancuch:1,
    lancucha:1,
    lucky:0,
    autoexp:1,
};

localStorage.setItem("gra", JSON.stringify(wartosci));
}

if (localStorage.getItem("gra") !== null) wartosci = JSON.parse(localStorage.getItem("gra"));
function dupa3() {
    wartosci.demencja = 0;
    wartosci.skolioza = 0;
    wartosci.white2115 =0;
    wartosci.elegancki = 0;
    wartosci.podlozkiem = 0;
    wartosci.chucky = 0;
    wartosci.itemcount = 0;
    wartosci.itemcountmax = 3;
    wartosci.patyk = 1;
    wartosci.patyka=1;
    wartosci.h1zyrandol=1;
    wartosci.lancuch=1;
    wartosci.lancucha=1;
    wartosci.tc=5000;
    wartosci.tu=4000;
    wartosci.tr=2500;
    wartosci.te=650;
    wartosci.tl=25;
    wartosci.ts=1;
    wartosci.th=150;
    wartosci.h1zyrandolup=0;
    wartosci.h1zbieracz=0;
    wartosci.lucky=0;
    wartosci.autoexp=1;
}
function dupa(){  // Button click
    if (wartosci.narzedzia >= 1) document.getElementById("u1").style.backgroundColor = "moccasin";
    if (wartosci.narzedzia >= 5) document.getElementById("u2").style.backgroundColor = "moccasin";
    if (wartosci.narzedzia >= 12) document.getElementById("u3").style.backgroundColor = "moccasin";
    if (wartosci.nawadnianie > 1) document.getElementById("u4").style.backgroundColor = "moccasin";
    if (wartosci.szybszeraczki > 1) document.getElementById("u5").style.backgroundColor = "moccasin";
    if (wartosci.autoczarny1 > 0) document.getElementById("u6").style.backgroundColor = "moccasin";
    if (wartosci.autostary1 > 0) document.getElementById("u7").style.backgroundColor = "moccasin";
    if (wartosci.wuzek > 0) document.getElementById("u8").style.backgroundColor = "moccasin";
    if (wartosci.lepszabawelna > 1) document.getElementById("u9").style.backgroundColor = "moccasin";
    if (wartosci.lepszabawelna > 1) document.getElementById("zdjzbieranie").src="bawelnalep.png";
    if (wartosci.narzedzia > 119) document.getElementById("u10").style.backgroundColor = "moccasin";
    if (wartosci.narzedzia > 690) document.getElementById("u11").style.backgroundColor = "moccasin";
    if (wartosci.wuzek > 8000) document.getElementById("u12").style.backgroundColor = "moccasin";
    if (wartosci.wuzek > 110000) document.getElementById("u13").style.backgroundColor = "moccasin";
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
var xg = document.getElementById('pokazindex');
var xh = document.getElementById('halloween');
var xj = document.getElementById('inventory');
//FUNKCJA KLIKNMIEC
function klikniecia() {

    wartosci.bawelna = wartosci.bawelna +((((1 + wartosci.narzedzia * wartosci.lepszabawelna * (wartosci.nawadnianie * wartosci.szybszeraczki))  * wartosci.resetmnoznik)*wartosci.lancuch)*wartosci.autoexp) ;
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
    document.getElementById("bawelna").innerHTML = abbrNum(wartosci.bawelna,2);
            zd.style.height = '52px';
            zd.style.width = '52px';
            
//HALLOWEEN EVENT DODAWANIE CUKIERKOW
if (wartosci.h1lvl == 1) document.getElementById("h1cena4").innerHTML="X";
if (wartosci.h1zyrandolup == 1) document.getElementById("h1cena8").innerHTML="X";
if (wartosci.h1zbieracz == 1) document.getElementById("h1cena9").innerHTML="X";
document.getElementById("h1cena7").innerHTML=abbrNum(700 * (1+((wartosci.h1mnoznik*5)* wartosci.h1mnoznik)),2);
document.getElementById("h1cena5").innerHTML=abbrNum(250 * (1+((wartosci.h1mnoznik*10)* wartosci.h1mnoznik)),2);

if (wartosci.h1mnoznik > 33) document.getElementById("h1cena5").innerHTML="X";
wartosci.candy = wartosci.candy + (1 * (1+(wartosci.h1mnoznik * wartosci.h1mnoznik * 3)))*wartosci.h1zyrandol;
document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);
document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;
            document.getElementById('rebirty').innerHTML = wartosci.resetv;
            document.getElementById('rst1').innerHTML = "KOSZT: " + abbrNum((25000 * wartosci.kosztreset),2);
            document.getElementById('zbziarna').innerHTML = wartosci.ziarenka;
            document.getElementById("bezrak").innerHTML = abbrNum(wartosci.murzynbezrak,1);
            document.getElementById("zlotyczern").innerHTML = abbrNum(wartosci.zlotymurzyn,1);
            document.getElementById("MJ").innerHTML = abbrNum(wartosci.platynowymurzyn,1);
            document.getElementById("floyd").innerHTML = abbrNum(wartosci.floyd,1);
            document.getElementById("obama").innerHTML = abbrNum(wartosci.obama,1);
            document.getElementById("gigner").innerHTML = abbrNum(wartosci.gigner,1);
            document.getElementById("blm").innerHTML = abbrNum(wartosci.blm,1);
            document.getElementById("blackfarmer1").innerHTML = abbrNum(wartosci.farm1,1);
            document.getElementById("blackfarmer2").innerHTML = abbrNum(wartosci.farm2,1);
            document.getElementById("golem").innerHTML = abbrNum(wartosci.golem,1);
            document.getElementById("giantfarmer").innerHTML = abbrNum(wartosci.giant,1);
            document.getElementById("bodypositive").innerHTML = abbrNum(wartosci.bodypositive,1);
            document.getElementById("will").innerHTML = abbrNum(wartosci.will,1);
            document.getElementById("brakrasizmu").innerHTML = abbrNum(wartosci.stopracism,1);
            document.getElementById("znika").innerHTML = abbrNum(wartosci.znikawnocy,1);
            document.getElementById("rudyzyd").innerHTML = abbrNum(wartosci.rudyzyd,1);
            document.getElementById("vtbg").innerHTML = abbrNum(wartosci.vtbg,1);
            //HALLOWEEEN
            document.getElementById("h1common").innerHTML = abbrNum(wartosci.maska,1);
            document.getElementById("h1uncommon").innerHTML = abbrNum(wartosci.zombie,1);
            document.getElementById("h1rare").innerHTML = abbrNum(wartosci.opiumhalloween,1);
            document.getElementById("h1epic").innerHTML = abbrNum(wartosci.marasskeleton,1);
            document.getElementById("h1legendary").innerHTML = abbrNum(wartosci.strasznaczapka,1);
            document.getElementById("h1special").innerHTML = abbrNum(wartosci.gargoyle,1);
            document.getElementById("h1secret").innerHTML = abbrNum(wartosci.jigsaw,1);
            document.getElementById("chucky").innerHTML = abbrNum(wartosci.chucky,1);
            document.getElementById("demencja").innerHTML = abbrNum(wartosci.demencja,1);
            document.getElementById("elegancki").innerHTML = abbrNum(wartosci.elegancki,1);
            document.getElementById("white2115").innerHTML = abbrNum(wartosci.white2115,1);
            document.getElementById("skolioza").innerHTML = abbrNum(wartosci.skolioza,1);
            document.getElementById("podlozkiem").innerHTML = abbrNum(wartosci.podlozkiem,1);
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
    document.getElementById("u10").style.backgroundColor = "#E0FFFF";
    document.getElementById("u11").style.backgroundColor = "#E0FFFF";
    document.getElementById("u12").style.backgroundColor = "#E0FFFF";
    document.getElementById("u13").style.backgroundColor = "#E0FFFF";
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
                xg.style.display = 'none';
                xh.style.display = 'none';
                xj.style.display = 'none';
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
                xg.style.display = 'none';
                xh.style.display = 'none';
                xj.style.display = 'none';
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
                xg.style.display = 'none';
                xh.style.display = 'none';
                xj.style.display = 'none';
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
                xg.style.display = 'none';
                xh.style.display = 'none';
                xj.style.display = 'none';
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
                    xg.style.display = 'none';
                    xh.style.display = 'none';
                    xj.style.display = 'none';
                } else {
                    xf.style.display = 'none';
                }
                }
function ShowAndHide6() {
                if (xg.style.display == 'none') {
                    xg.style.display = 'block';
                    xb.style.display = 'none';
                    xa.style.display = 'none';
                    xc.style.display = 'none';
                    xe.style.display = 'none';
                    xf.style.display = 'none';
                    xh.style.display = 'none';
                    xj.style.display = 'none';
                } else {
                    xg.style.display = 'none';
                }
                }
function ShowAndHide7() {
                if (xh.style.display == 'none') {
                    xh.style.display = 'block';
                    xb.style.display = 'none';
                    xa.style.display = 'none';
                    xc.style.display = 'none';
                    xe.style.display = 'none';
                    xf.style.display = 'none';
                    xg.style.display = 'none';
                    xj.style.display = 'none';
                } else {
                    xh.style.display = 'none';
                }
                }       
function ShowAndHide8() {
                if (xj.style.display == 'none') {
                    xj.style.display = 'block';
                    xb.style.display = 'none';
                    xa.style.display = 'none';
                    xc.style.display = 'none';
                    xe.style.display = 'none';
                    xf.style.display = 'none';
                    xg.style.display = 'none';
                    xh.style.display = 'none';
                } else {
                    xj.style.display = 'none';
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
function upnarzedzia4() {
    if (wartosci.narzedzia == 12 && wartosci.bawelna >= 100000000) {
        wartosci.bawelna = wartosci.bawelna - 100000000;
        wartosci.wyliczanie = wartosci.bawelna;
        document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie, 2);
        wartosci.narzedzia = 20;
        document.getElementById("u10").style.backgroundColor = "moccasin";

    }
}
function upnarzedzia5() {
    if (wartosci.narzedzia == 20 && wartosci.bawelna >= 850000000) {
        wartosci.bawelna = wartosci.bawelna - 850000000;
        wartosci.wyliczanie = wartosci.bawelna;
        document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie, 2);
        wartosci.narzedzia = 40;
        document.getElementById("u11").style.backgroundColor = "moccasin";

    }
}
function upnarzedzia6() {
    if (wartosci.narzedzia == 40 && wartosci.bawelna >= 5500000000) {
        wartosci.bawelna = wartosci.bawelna - 5500000000;
        wartosci.wyliczanie = wartosci.bawelna;
        document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie, 2);
        wartosci.narzedzia = 65;
        document.getElementById("u12").style.backgroundColor = "moccasin";

    }
}
function upnarzedzia7() {
    if (wartosci.narzedzia == 65 && wartosci.bawelna >= 90000000000) {
        wartosci.bawelna = wartosci.bawelna - 90000000000;
        wartosci.wyliczanie = wartosci.bawelna;
        document.getElementById("bawelna").innerHTML = abbrNum(wartosci.wyliczanie, 2);
        wartosci.narzedzia = 80;
        document.getElementById("u13").style.backgroundColor = "moccasin";

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
        if (essa <= 300) {
            document.getElementById("informacja1").innerHTML =  "dropnieto: murzyn bez rąk";
            wartosci.murzynbezrak = wartosci.murzynbezrak + 1;
            document.getElementById("info").src="nohands.png";
            document.getElementById("bezrak").innerHTML = abbrNum(wartosci.murzynbezrak,1);
            wartosci.common = 1;
        } else if (essa<=600 && essa >= 301) {
            document.getElementById("informacja1").innerHTML =  "dropnieto: czarny farmer v1";
            wartosci.farm1 = wartosci.farm1 + 1;
            document.getElementById("info").src="blackfarmer.png";
            document.getElementById("blackfarmer1").innerHTML = abbrNum(wartosci.farm1,1);
            wartosci.common = 1;
        } else if (essa <= 900 && essa >= 601) {
            document.getElementById("informacja1").innerHTML = "dropnieto: czarny farmer v2";
            document.getElementById("info").src="blackfarmer2.png";
            wartosci.farm2 = wartosci.farm2 + 1;
            document.getElementById("blackfarmer2").innerHTML = abbrNum(wartosci.farm2,1);
            wartosci.common = 1;
        } else if (essa <= 990 && essa >= 901) {
            document.getElementById("informacja1").innerHTML = "dropnieto: 1,02x twoja bawelna";
            wartosci.bawelna = wartosci.bawelna * 1.02;
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
            document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
            document.getElementById("info").src="bawelna.png";
        } else if (essa <= 999 && essa >= 991) {
            document.getElementById("informacja1").innerHTML = "dropnieto: Will Smith";
            wartosci.will = wartosci.will + 1;
            document.getElementById("will").innerHTML = abbrNum(wartosci.will,1);
            document.getElementById("info").src="will.png";
            wartosci.rare = 1;
        } else if (essa == 1000) {
            document.getElementById("informacja1").innerHTML = "dropnieto: złoty murzyn";
            wartosci.zlotymurzyn = wartosci.zlotymurzyn + 1;
            document.getElementById("zlotyczern").innerHTML = abbrNum(wartosci.zlotymurzyn,1);
            wartosci.epic = 1;
            document.getElementById("info").src="zloty.png";
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

        } else if (essa <= 550 && essa >= 351) {
            document.getElementById("informacja1").innerHTML = "dropnieto: gigantyczny murzyn zbieracz";
            wartosci.giant = wartosci.giant + 1;
            document.getElementById("giantfarmer").innerHTML = abbrNum(wartosci.giant,1);
            document.getElementById("info").src="giantfarmer.png";
            wartosci.uncommon = 1;
        } else if (essa <= 900 && essa >= 551) {
            document.getElementById("informacja1").innerHTML = "dropnieto: black lives mater";
            wartosci.blm = wartosci.blm + 1;
            document.getElementById("blm").innerHTML = abbrNum(wartosci.blm,1);
            document.getElementById("info").src="blm.png";
            wartosci.uncommon = 1;
        } else if (essa <= 989 && essa >= 901) {
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
            document.getElementById("MJ").innerHTML = abbrNum(wartosci.platynowymurzyn,1);
            document.getElementById("info").src="MJ.png";
            wartosci.epic = 1;
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

                document.getElementById("informacja1").innerHTML = "dropnieto: gigner dziecko";

                wartosci.gigner = wartosci.gigner + 1;
                document.getElementById("gigner").innerHTML =abbrNum(wartosci.gigner,1);
                document.getElementById("info").src="gigner.png";
                wartosci.common = 1;
            } else if (essa <= 72500 && essa >= 55001) {
                document.getElementById("informacja1").innerHTML = "dropnieto: Grzegorz Floryda x1";
                wartosci.floyd = wartosci.floyd + 1;
                document.getElementById("floyd").innerHTML =abbrNum(wartosci.floyd,1);
                document.getElementById("info").src="floryda.png";
                wartosci.uncommon = 1;
            } else if (essa <= (90000-wartosci.lucky-wartosci.lucky) && essa >= 72501) {
                document.getElementById("informacja1").innerHTML = "dropnieto: Body Positive x1";
                wartosci.bodypositive = wartosci.bodypositive + 1;
                document.getElementById("bodypositive").innerHTML =abbrNum(wartosci.bodypositive,1);
                document.getElementById("info").src="bodypositive.png";
                wartosci.uncommon = 1;
            } else if (essa <= (96000-wartosci.lucky-wartosci.lucky) && essa >= (90001-wartosci.lucky-wartosci.lucky)) {
                document.getElementById("informacja1").innerHTML = "dropnieto: stop rasizmowi";
                wartosci.stopracism = wartosci.stopracism + 1;
                document.getElementById("brakrasizmu").innerHTML = abbrNum(wartosci.stopracism,1);
                document.getElementById("info").src="brakrasizmu.png";
                wartosci.rare = 1;
            } else if (essa <= (99989-wartosci.lucky-wartosci.lucky) && essa >= (96001-wartosci.lucky-wartosci.lucky)) {
                document.getElementById("informacja1").innerHTML = "dropnieto: 1500xp";
                wartosci.exp = wartosci.exp + 1500;
                if (wartosci.exp >= 1000 * (wartosci.lvl*1.7)) {
                    wartosci.lvl = wartosci.lvl + 1;
                    wartosci.exp = 0;
                    wartosci.ziarenka = wartosci.ziarenka + (wartosci.lvl *3);
                }
                document.getElementById("info").src="star.png";
                document.getElementById('xp').innerHTML = abbrNum(wartosci.exp,2) + " / " +  abbrNum(1000 * (wartosci.lvl*1.7), 2);
            }else if (essa <= (99999-wartosci.lucky) && essa >= (99991-wartosci.lucky-wartosci.lucky)) {
                document.getElementById("informacja1").innerHTML = "dropnieto: Znikający w nocy";
                wartosci.znikawnocy = wartosci.znikawnocy + 1;
                document.getElementById("znika").innerHTML = abbrNum(wartosci.znikawnocy,1);
                document.getElementById("info").src="znikawnocy.png";
                wartosci.legendary = 1;
            
            }else if (essa <= 100000 && essa >= (99999-wartosci.lucky)) {
                document.getElementById("informacja1").innerHTML = "dropnieto: Obama!";
                wartosci.obama = wartosci.obama + 1;
                document.getElementById("obama").innerHTML = abbrNum(wartosci.obama,1);
                document.getElementById("info").src="drop.png";
                wartosci.special = 1;
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
    for (var i = 0; i <= 100; i++) {
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
}

function budynek1() {
    for (var i = 0; i <= 100; i++) {
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
}
function budynek2() {
    for (var i = 0; i <= 100; i++) {
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
}
function budynek3() {
    for (var i = 0; i <= 100; i++) {
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
}
function budynek4() {
    for (var i = 0; i <= 100; i++) {
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
}
function budynek5() {
    for (var i = 0; i <= 100; i++) {
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
}
function budynek6() {
    for (var i = 0; i <= 100; i++) {
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
//HALLOWEEEEEN
function halloween1() {
    if (wartosci.candy >= 1000) {
        wartosci.candy = wartosci.candy - 1000;
        document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);
        let essa = Math.floor((Math.random() * 1000) + 1);
        if (essa <= 450) {
            document.getElementById("informacja2").innerHTML =  "dropnięto: pocięta afroamerykanka halloween";
            wartosci.maska = wartosci.maska + 1;
            document.getElementById("h1common").innerHTML =abbrNum(wartosci.maska,1);
            wartosci.h1 = 1;

        } else if (essa<=750 && essa >= 451) {
            document.getElementById("informacja2").innerHTML =  "dropnięto: opętana agnieszka";
            wartosci.zombie= wartosci.zombie + 1;
            document.getElementById("h1uncommon").innerHTML =abbrNum(wartosci.zombie,1);
            wartosci.h1 = 1;

        } else if (essa <= 870 && essa >= 751) {
            document.getElementById("informacja2").innerHTML = "dropnięto: opium z halloween";
            wartosci.opiumhalloween = wartosci.opiumhalloween + 1;
            document.getElementById("h1rare").innerHTML =abbrNum(wartosci.opiumhalloween,1);
            wartosci.h1 = 1;
        } else if (essa <= 950 && essa >= 871) {
            document.getElementById("informacja2").innerHTML = "dropnięto: straszny maras";
            wartosci.marasskeleton = wartosci.marasskeleton + 1;
            document.getElementById("h1epic").innerHTML =abbrNum(wartosci.marasskeleton,1);
            wartosci.h1 = 1;
        } else if (essa <= 999 && essa >= 951) {
            document.getElementById("informacja2").innerHTML = "dropnięto: elegancki strach na wróble";
            wartosci.strasznaczapka = wartosci.strasznaczapka + 1;
            document.getElementById("h1legendary").innerHTML =abbrNum(wartosci.strasznaczapka,1);
            wartosci.h1 = 1;
        } else if (essa == 1000) {
            document.getElementById("informacja2").innerHTML = "dropnięto: ptak w motywie halloween";
            wartosci.gargoyle = wartosci.gargoyle + 1;
            document.getElementById("h1special").innerHTML =abbrNum(wartosci.gargoyle,1);
            wartosci.h1 = 1;
        }
    }
    else {
        document.getElementById("informacja1").innerHTML = "brak klucza";
        document.getElementById("info").src="";
    }

    }
    function halloween1a() {
        if (wartosci.candy >= 250000) {
            wartosci.candy = wartosci.candy - 250000;
            document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);
            let essa = Math.floor((Math.random() * 1000) + 1);
            if (essa <= 700) {
                document.getElementById("informacja2").innerHTML =  "dropnięto: ofiara polskich youtuberów";
                wartosci.chucky = wartosci.chucky+ 1;
                document.getElementById("chucky").innerHTML =abbrNum(wartosci.chucky,1);
                wartosci.h1 = 1;
    
            } else if (essa<=850 && essa >= 701) {
                document.getElementById("informacja2").innerHTML =  "dropnięto: zakonnica z nożem w prawej ręce";
                wartosci.demencja= wartosci.demencja + 1;
                document.getElementById("demencja").innerHTML =abbrNum(wartosci.demencja,1);
                wartosci.h1 = 1;
    
            } else if (essa <= 950 && essa >= 851) {
                document.getElementById("informacja2").innerHTML = "dropnięto: Elegancka Piła";
                wartosci.elegancki = wartosci.elegancki + 1;
                document.getElementById("elegancki").innerHTML =abbrNum(wartosci.elegancki,1);
                wartosci.h1 = 1;
            } else if (essa <= 998 && essa >= 951) {
                document.getElementById("informacja2").innerHTML = "dropnięto: Wujas po weselu";
                wartosci.white2115 = wartosci.white2115 + 1;
                document.getElementById("white2115").innerHTML =abbrNum(wartosci.white2115,1);
                wartosci.h1 = 1;
            } else if (essa ==999) {
                document.getElementById("informacja2").innerHTML = "dropnięto: Przerzuty cukierek skolioza";
                wartosci.skolioza = wartosci.skolioza + 1;
                document.getElementById("skolioza").innerHTML =abbrNum(wartosci.skolioza,1);
                wartosci.h1 = 1;
            } else if (essa == 1000) {
                document.getElementById("informacja2").innerHTML = "dropnięto: Ten gość znajduje się pod łózkiem twojego dziecka";
                wartosci.podlozkiem = wartosci.podlozkiem + 1;
                document.getElementById("podlozkiem").innerHTML =abbrNum(wartosci.podlozkiem,1);
                wartosci.h1 = 1;
            }
        }
        else {
            document.getElementById("informacja2").innerHTML = "mordo chyba nie ma cukierkow";
            document.getElementById("info").src="";
        }
    
        }
    function halloween2() {
        if (wartosci.candy >=10000000000) {
            wartosci.candy = wartosci.candy - 10000000000;
            document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);
            wartosci.jigsaw = wartosci.jigsaw + 1;
            document.getElementById("h1secret").innerHTML=abbrNum(wartosci.jigsaw,1);
        }
    }
    function halloween3() {
        if (wartosci.candy >=1000000) { 
            wartosci.candy = wartosci.candy - 1000000;
            document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);

        wartosci.exp = wartosci.exp + 500;
        if (wartosci.exp >= 1000 * (wartosci.lvl*1.7)) {
            wartosci.lvl = wartosci.lvl + 1;
            wartosci.exp = 0;
            wartosci.ziarenka = wartosci.ziarenka + (wartosci.lvl *3);
        }

        document.getElementById('xp').innerHTML = abbrNum(wartosci.exp,2) + " / " +  abbrNum(1000 * (wartosci.lvl*1.7), 2);
        document.getElementById('lvltekst').innerHTML = wartosci.lvl;
        document.getElementById("progres").setAttribute("max", ((1.7 *wartosci.lvl) * 1000));
    document.getElementById("progres").setAttribute("value", wartosci.exp);
        }
    }    
    function halloween4() {
        if (wartosci.candy >=100000000 && wartosci.h1lvl == 0) { 
            wartosci.h1lvl = 1;
            wartosci.candy = wartosci.candy - 100000000;
            document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);
            wartosci.lvl = wartosci.lvl + 1;
            wartosci.exp = 0;
            wartosci.ziarenka = wartosci.ziarenka + (wartosci.lvl *3);

            document.getElementById("h1cena4").innerHTML="X";
        document.getElementById('xp').innerHTML = abbrNum(wartosci.exp,2) + " / " +  abbrNum(1000 * (wartosci.lvl*1.7), 2);
        document.getElementById('lvltekst').innerHTML = wartosci.lvl;
        document.getElementById("progres").setAttribute("max", ((1.7 *wartosci.lvl) * 1000));
    document.getElementById("progres").setAttribute("value", wartosci.exp);
        }
    }
    function halloween5() {
        if (wartosci.candy >=250 * (1+((wartosci.h1mnoznik*10) * wartosci.h1mnoznik)) && wartosci.h1mnoznik < 34) { 
            wartosci.candy = wartosci.candy - 250 * (1+((wartosci.h1mnoznik*10)* wartosci.h1mnoznik));
            wartosci.h1mnoznik = wartosci.h1mnoznik + 3;

            document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);


            document.getElementById("h1cena5").innerHTML=abbrNum(250 * (1+((wartosci.h1mnoznik*10) * wartosci.h1mnoznik)),2);

        }
    }
    function halloween6() {
        if (wartosci.candy >=5000) {
            wartosci.candy = wartosci.candy - 5000;
            wartosci.ziarenka = wartosci.ziarenka + 2;
            
            document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);
            
            document.getElementById("zbziarna").innerHTML=abbrNum(wartosci.ziarenka,2);
        }
    }
    function halloween7() {
        if (wartosci.candy >=700 * (1+((wartosci.h1mnoznik*5) * wartosci.h1mnoznik)) && wartosci.h1mnoznik >= 34 && wartosci.h1mnoznik <250) { 
            wartosci.candy = wartosci.candy - 700 * (1+((wartosci.h1mnoznik*5)* wartosci.h1mnoznik));
            wartosci.h1mnoznik = wartosci.h1mnoznik + 10;

            document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);


            document.getElementById("h1cena7").innerHTML=abbrNum(700 * (1+((wartosci.h1mnoznik*5) * wartosci.h1mnoznik)),2);

        }
    }
    
    function halloween8() {
        if (wartosci.candy >=100000 && wartosci.h1zyrandolup < 1) {
            wartosci.candy = wartosci.candy - 100000;
            wartosci.h1zyrandolup = 1;
            document.getElementById("h1cena8").innerHTML="X";
            document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);
        }
    }
    function halloween9() {
        if (wartosci.candy >=50000000 && wartosci.h1zbieracz < 1) {
            wartosci.candy = wartosci.candy - 50000000;
            wartosci.h1zbieracz = 1;
            document.getElementById("h1cena9").innerHTML="X";
            document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);
            
        }
    }
    function h1zbieranie() {
        if (wartosci.h1zbieracz>=1) {
            wartosci.candy = wartosci.candy + (1 * (1+(wartosci.h1mnoznik * wartosci.h1mnoznik * 3)))*wartosci.h1zyrandol;
            document.getElementById("candy").innerHTML=abbrNum(wartosci.candy,2);
        }
    }
    
    setInterval(h1zbieranie, 1000);
    h1zbieranie();
    function itemcountdodaj1() {
        if (wartosci.itemcount < wartosci.itemcountmax && wartosci.patyk== 1 && wartosci.resetv >= 15) {
            wartosci.itemcount = wartosci.itemcount + 1;
            wartosci.patyk = 0.98;
            wartosci.patyka = 0.9;
            document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;
                                    //DODAWANIE GOWNA JAMELA KTORE POWODUJE CZAS
                                    wartosci.tc = wartosci.tc * wartosci.patyka;
                                    wartosci.tu = wartosci.tu * wartosci.patyka ;
                                    wartosci.tr = wartosci.tr * wartosci.patyka ;
                                    wartosci.te = wartosci.te * wartosci.patyka ;
                                    wartosci.tl = wartosci.tl * wartosci.patyka ;
                                    wartosci.ts = wartosci.ts * wartosci.patyka ;
                                    wartosci.th = wartosci.th * wartosci.patyka ;
        }
    }
    function itemcountusun1() {
        if (wartosci.patyk == 0.98) {
            wartosci.itemcount = wartosci.itemcount - 1;
            wartosci.patyk = 1;
            wartosci.patyka = 1;
            document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;
            wartosci.tc=5000;
            wartosci.tu=4000;
            wartosci.tr=2500;
            wartosci.te=650;
            wartosci.tl=25;
            wartosci.ts=1;
            wartosci.th=150;
        }
    }
    function itemcountdodaj2() {
        if (wartosci.itemcount < wartosci.itemcountmax && wartosci.h1zyrandol== 1 && wartosci.h1zyrandolup==1) {
            wartosci.itemcount = wartosci.itemcount + 1;
            wartosci.h1zyrandol= 12.5;
            document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;

        }
    }
    function itemcountusun2() {
        if (wartosci.h1zyrandol == 12.5) {
            wartosci.itemcount = wartosci.itemcount - 1;
            wartosci.h1zyrandol = 1;
            document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;

        }
    }

    function itemcountdodaj3() {
        if (wartosci.itemcount < wartosci.itemcountmax && wartosci.lancuch== 1 && wartosci.resetv >= 25) {
            wartosci.itemcount = wartosci.itemcount + 1;
            wartosci.lancuch = 1.2;
            wartosci.lancucha = 1.25;
            document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;
                                    //DODAWANIE GOWNA JAMELA KTORE POWODUJE CZAS
                                    wartosci.tc = wartosci.tc - (wartosci.tc / wartosci.lancucha);
                                    wartosci.tu = wartosci.tu - (wartosci.tu / wartosci.lancucha);
                                    wartosci.tr = wartosci.tr - (wartosci.tr / wartosci.lancucha);
                                    wartosci.te = wartosci.te - (wartosci.te / wartosci.lancucha);
                                    wartosci.tl = wartosci.tl - (wartosci.tl / wartosci.lancucha);
                                    wartosci.ts = wartosci.ts - (wartosci.ts / wartosci.lancucha);
                                    wartosci.th = wartosci.th - (wartosci.th / wartosci.lancucha);
        }
    }
    function itemcountusun3() {
        if (wartosci.lancuch == 1.2) {
            wartosci.itemcount = wartosci.itemcount - 1;
            wartosci.lancuch = 1;
            wartosci.lancucha = 1;
            document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;
            wartosci.tc=5000;
            wartosci.tu=4000;
            wartosci.tr=2500;
            wartosci.te=650;
            wartosci.tl=25;
            wartosci.ts=1;
            wartosci.th=150;
        }
    }
    function itemcountdodaj4() {
        if (wartosci.itemcount < wartosci.itemcountmax && wartosci.lucky == 0 && wartosci.resetv>= 20) {
            wartosci.itemcount = wartosci.itemcount + 1;
            wartosci.lucky = 50;
            document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;

        }
    }
    function itemcountusun4() {
        if (wartosci.lucky == 50) {
            wartosci.itemcount = wartosci.itemcount - 1;
            wartosci.lucky = 0;
            document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;

        }
    }
    function itemcountdodaj5() {
        if (wartosci.itemcount < wartosci.itemcountmax && wartosci.autoexp == 1 && wartosci.resetv>= 35) {
            wartosci.itemcount = wartosci.itemcount + 1;
            wartosci.autoexp = 0.9;
            document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;

        }
    }
    function itemcountusun5() {
        if (wartosci.autoexp == 0.9) {
            wartosci.itemcount = wartosci.itemcount - 1;
            wartosci.autoexp = 1;
            document.getElementById("itemcount").innerHTML=wartosci.itemcount + " / " + wartosci.itemcountmax;

        }
    }
    function item5exp() {
        if (wartosci.autoexp==0.9) {
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
        }
    }
    
    setInterval(item5exp, 1000);
    item5exp();
    function common() {
        if (wartosci.common>=1) {
            wartosci.bawelna = wartosci.bawelna + (15 * (wartosci.murzynbezrak + wartosci.gigner + wartosci.blm + wartosci.farm1 + wartosci.golem + wartosci.farm2)*wartosci.patyka);
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
    document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        }
    }
    
    setInterval(common, wartosci.tc);
    common();
    
    function uncommon() {
        if (wartosci.uncommon>=1) {
            wartosci.bawelna = wartosci.bawelna + (55 * (wartosci.floyd+ wartosci.giant + wartosci.bodypositive)*wartosci.patyka);
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
    document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        }
    }
    
    setInterval(uncommon, wartosci.tu);
    uncommon();
    
    function rare() {
        if (wartosci.rare>=1) {
            wartosci.bawelna = wartosci.bawelna + (180 * (wartosci.will + wartosci.stopracism)*wartosci.patyka);
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
    document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        }
    }
    
    setInterval(rare, wartosci.tr);
    rare();
    
    function epic() {
        if (wartosci.epic>=1) {
            wartosci.bawelna = wartosci.bawelna + (650 * (wartosci.zlotymurzyn + wartosci.platynowymurzyn)*wartosci.patyka);
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
    document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        }
    }
    
    setInterval(epic, wartosci.te);
    epic();
    
    function legendary() {
        if (wartosci.legendary>=1) {
            wartosci.bawelna = wartosci.bawelna + (2350 * (wartosci.znikawnocy + wartosci.rudyzyd)*wartosci.patyka);
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
    document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        }
    }
    
    setInterval(legendary, wartosci.tl);
    legendary();
    
    function special() {
        if (wartosci.special>=1) {
            wartosci.bawelna = wartosci.bawelna + (12000 * (wartosci.obama + wartosci.vtbg)*wartosci.patyka);
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
    document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        }
    }
    
    setInterval(special, wartosci.ts);
    special();
    
    function halloween() {
        if (wartosci.h1>=1) {
            wartosci.bawelna = wartosci.bawelna + (12 * (wartosci.maska + (50*wartosci.zombie) + (130*wartosci.opiumhalloween)+(240*wartosci.marasskeleton)+(800*wartosci.strasznaczapka)+(15000*wartosci.gargoyle)+(75000*wartosci.jigsaw)+(10*wartosci.chucky)+(75*wartosci.demencja)+(120*wartosci.elegancki)+(200*wartosci.white2115)+(6000*wartosci.skolioza)+(6000*wartosci.podlozkiem))*wartosci.patyka);
            wartosci.wyliczanie = wartosci.bawelna;
            wartosci.wyliczanie = abbrNum(wartosci.wyliczanie, 2);
    document.getElementById("bawelna").innerHTML = wartosci.wyliczanie;
        }
    }
    
    setInterval(halloween, wartosci.th);
    halloween();
