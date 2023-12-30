function bamboo() {
    wartosci.bamboo = wartosci.bamboo + 1;
    document.getElementById("chinybambus").innerHTML=abbrNum(wartosci.bamboo,2)

    document.getElementById("bamboocount").innerHTML=(wartosci.bamboochata -1) + "/"+"10";
    document.getElementById("bamboocount2").innerHTML=(wartosci.bamboofarm -1) + "/"+"10";
    document.getElementById("bamboocount3").innerHTML=(wartosci.bambootemple -1) + "/"+"10";
    }
    let elem = document.getElementById("greenBar");
    let prog = wartosci.bamboochatamax;
    function bamboochata() {
        if (wartosci.bamboochatamin <= wartosci.bamboochatamax && wartosci.bamboochata > 1) {
            wartosci.bamboochatamin = wartosci.bamboochatamin + 1 + (wartosci.bamboochata * wartosci.bamboochata);
            if (wartosci.bamboochatamin > (0.01*prog) && wartosci.bamboochatamin < (0.1*prog)) {
                elem.style.width = 0 + "%";
                elem.innerHTML = 0 + "%";
            }
            if (wartosci.bamboochatamin <= (0.1*prog) && wartosci.bamboochatamin >=(0.01*prog) ){
                elem.style.width = 10 + "%";
                elem.innerHTML = 10 + "%";
            } else if (wartosci.bamboochatamin > (0.25*prog)&& wartosci.bamboochatamin <(0.5*prog) ) {
                elem.style.width = 25 + "%";
                elem.innerHTML = 25 + "%";
            }  else if (wartosci.bamboochatamin >= (0.5*prog)&& wartosci.bamboochatamin <(0.75*prog)) {
                elem.style.width = 50 + "%";
                elem.innerHTML = 50 + "%";
            }else if (wartosci.bamboochatamin >= (0.75*prog)&& wartosci.bamboochatamin <(0.100*prog)) {
                elem.style.width = 75 + "%";
                elem.innerHTML = 75 + "%";
            }else if (wartosci.bamboochatamin >= prog) {
                elem.style.width = 100 + "%";
                elem.innerHTML = 100 + "%";
            } 

    }


    }
    setInterval(bamboochata, 1000);
    bamboochata();
    function collect() {
        var xcc = wartosci.bamboochatamin;
        wartosci.bamboochatamin = wartosci.bamboochatamin - xcc;
        wartosci.bamboo = wartosci.bamboo + xcc;

        document.getElementById("chinybambus").innerHTML=abbrNum(wartosci.bamboo,2)

            elem.style.width = 0 + "%";
            elem.innerHTML = 0 + "%";
            let elem = document.getElementById("greenBar");
            let prog = wartosci.bamboochatamax;
    }
    function chinyupgrade() {
        if (wartosci.bamboo >= (250 * wartosci.bamboochata) && wartosci.bamboochata <= 10) {
            wartosci.bamboo = wartosci.bamboo - (250 * wartosci.bamboochata);
            wartosci.bamboochata = wartosci.bamboochata + 1;
            wartosci.bamboochatamax = (250 * wartosci.bamboochata) * wartosci.bamboochata;

            document.getElementById("chinybambus").innerHTML=abbrNum(wartosci.bamboo,2)
            document.getElementById("bamboocount").innerHTML=(wartosci.bamboochata -1) + "/"+"10";
        }
    }
    let elem2 = document.getElementById("greenBar2");
    let prog2 = wartosci.bamboofarmmax;
    function bamboofarm() {
        if (wartosci.bamboofarmmin <= wartosci.bamboofarmmax && wartosci.bamboofarm > 1) {
            wartosci.bamboofarmmin = wartosci.bamboofarmmin + 1 + (wartosci.bamboofarm * wartosci.bamboofarm * 150);

                 if (wartosci.bamboofarmmin <= (0.1*prog2) && wartosci.bamboofarmmin >=(0.01*prog2) ){
                    elem2.style.width = 10 + "%";
                    elem2.innerHTML = 10 + "%";
                } else if (wartosci.bamboofarmmin > (0.25*prog2)&& wartosci.bamboofarmmin <(0.5*prog2) ) {
                    elem2.style.width = 25 + "%";
                    elem2.innerHTML = 25 + "%";
                }  else if (wartosci.bamboofarmmin >= (0.5*prog2)&& wartosci.bamboofarmmin <(0.75*prog2)) {
                    elem2.style.width = 50 + "%";
                    elem2.innerHTML = 50 + "%";
                }else if (wartosci.bamboofarmmin >= (0.75*prog2)&& wartosci.bamboofarmmin <(0.100*prog2)) {
                    elem2.style.width = 75 + "%";
                    elem2.innerHTML = 75 + "%";
                }else if (wartosci.bamboofarmmin >= prog2) {
                    elem2.style.width = 100 + "%";
                    elem2.innerHTML = 100 + "%";
                } 
        }
    }
    setInterval(bamboofarm, 5100);
    bamboofarm();
    function collect2() {
        var xcde = wartosci.bamboofarmmin;
        wartosci.bamboofarmmin = 0;
        wartosci.bamboo = wartosci.bamboo + xcde;
        document.getElementById("chinybambus").innerHTML=abbrNum(wartosci.bamboo,2)

            elem2.style.width = 0 + "%";
            elem2.innerHTML = 0 + "%";

    }
    function chinyupgrade2() {
        if (wartosci.bamboo >= (900 * (wartosci.bamboofarm * wartosci.bamboofarm) * 5) && wartosci.bamboofarm <= 10) {
            wartosci.bamboo = wartosci.bamboo - (900 * wartosci.bamboofarm * wartosci.bamboofarm * 5);
            wartosci.bamboofarm = wartosci.bamboofarm + 1;
            wartosci.bamboofarmmax = (80 * wartosci.bamboofarm * wartosci.bamboofarm) * wartosci.bamboofarm;

            document.getElementById("chinybambus").innerHTML=abbrNum(wartosci.bamboo,2)
            document.getElementById("bamboocount2").innerHTML=(wartosci.bamboofarm -1) + "/"+"10";
            let elem2 = document.getElementById("greenBar2");
            let prog2 = wartosci.bamboofarmmax;
        }
    }
    let elem3 = document.getElementById("greenBar3");
    let prog3 = wartosci.bambootemplemax;
    function bambootemple() {
        if (wartosci.bambootemplemin <= wartosci.bambootemplemax && wartosci.bambootemple > 1) {
            wartosci.bambootemplemin = wartosci.bambootemplemin + 1 + (wartosci.bambootemple * wartosci.bambootemple * 450);

                 if (wartosci.bambootemplemin <= (0.1*prog3) && wartosci.bambootemplemin >=(0.01*prog3) ){
                    elem3.style.width = 10 + "%";
                    elem3.innerHTML = 10 + "%";
                } else if (wartosci.bambootemplemin > (0.25*prog3)&& wartosci.bambootemplemin <(0.5*prog3) ) {
                    elem3.style.width = 25 + "%";
                    elem3.innerHTML = 25 + "%";
                }  else if (wartosci.bambootemplemin >= (0.5*prog3)&& wartosci.bambootemplemin <(0.75*prog3)) {
                    elem3.style.width = 50 + "%";
                    elem3.innerHTML = 50 + "%";
                }else if (wartosci.bambootemplemin >= (0.75*prog3)&& wartosci.bambootemplemin <(0.100*prog3)) {
                    elem3.style.width = 75 + "%";
                    elem3.innerHTML = 75 + "%";
                }else if (wartosci.bambootemplemin >= prog3) {
                    elem3.style.width = 100 + "%";
                    elem3.innerHTML = 100 + "%";
                } 
        }
    }
    setInterval(bambootemple, 5100);
    bambootemple();
    function collect3() {
        var xcdf = wartosci.bambootemplemin;
        wartosci.bambootemplemin = 0;
        wartosci.bamboo = wartosci.bamboo + xcdf;
        document.getElementById("chinybambus").innerHTML=abbrNum(wartosci.bamboo,2)

            elem3.style.width = 0 + "%";
            elem3.innerHTML = 0 + "%";

    }
    function chinyupgrade3() {
        if (wartosci.bamboo >= (2900 * (wartosci.bambootemple * wartosci.bambootemple) * 15) && wartosci.bambootemple <= 10) {
            wartosci.bamboo = wartosci.bamboo - (2900 * wartosci.bambootemple * wartosci.bambootemple * 15);
            wartosci.bambootemple = wartosci.bambootemple + 1;
            wartosci.bambootemplemax = (9000 * wartosci.bambootemple * wartosci.bambootemple) * wartosci.bambootemple;
            let elem3 = document.getElementById("greenBar3");
            let prog3 = wartosci.bambootemplemax;
            document.getElementById("chinybambus").innerHTML=abbrNum(wartosci.bamboo,2)
            document.getElementById("bamboocount3").innerHTML=(wartosci.bambootemple -1) + "/"+"10";

        }
    }
    window.onload = () => {
        document.querySelectorAll("button.particleButton").forEach(btn => {
            let btnBg = btn.parentNode.querySelector(".particles")
            let initalListener = () => {
                btnBg.classList.add("animated")
                btn.removeEventListener("click", initalListener)
            }
            btn.addEventListener("click", initalListener)
        })
    }
    function worldchiny() {
        if (wchiny.style.display == 'none' && wartosci.lvl >=10) {
            wchiny.style.display = 'block';
            xc.style.display = 'none';
        } else {
            wchiny.style.display = 'none';
        }
    }
    function exit() {
        if (xc.style.display == 'none') {
            xc.style.display = 'block';
            wchiny.style.display = 'none';
        } else {
            xc.style.display = 'none';
        }
    }

