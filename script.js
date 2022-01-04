var x;
var y;
var xn;
var yn;
var sekunda = 0;
var t;
var id = 0;
var idbomb = [];
var przyciski = [];
var przegrana = false;
var szerokosc;
var btn;
var iloscbomb;
var pozostaleflagi = document.getElementById("pozostale-flagi");
function pokazflagi(){
    document.getElementById("div-flagi").style.display = "flex";
}
function timer()
{   
    if (sekunda < 100)
    {
        if (sekunda < 10)
        {
            document.getElementById("timer").innerHTML = "00" + String(sekunda);
        }
        else
        {
            document.getElementById("timer").innerHTML = "0" + String(sekunda);
        }
    }
    else
    {
        document.getElementById("timer").innerHTML = String(sekunda);
    }
    sekunda += 1;
    t = setTimeout(timer, 1000);
}
function starttimer()
{
    timer();
}
function zatrzymajtimer()
{
    clearTimeout(t);
    sekunda = 0;
}
function ile_bomb(n, x, y, t)
{
    idbomb = [];
    document.getElementById("plansza").innerHTML = "";
    var i = 0;
    var size = x*y;
    for (n=n; n>0; n--)
    {
        var prex = xn;
        var prey = yn;
        xn = Math.floor(Math.random() * x);
        yn = Math.floor(Math.random() * y);
        console.log(xn)
        console.log(yn)
        if (prex == xn || prey == yn || xn * yn > size){
            n = n + 1;
            continue;
        }
        switch (yn) {
            case 0:
                //if (idbomb.includes(xn)){} break;
                idbomb[i] = xn;
                break;
            case 1:
                idbomb[i] = y + xn;
                break;
            case 2:
                idbomb[i] = (2*y) + xn;
                break;
            case 3:
                idbomb[i] = (3*y) + xn;
                break;
            case 4:
                idbomb[i] = (4*y) + xn;
                break;
            case 5:
                idbomb[i] = (5*y) + xn;
                break;
            case 6:
                idbomb[i] = (6*y) + xn;
                break;
            case 7:
                idbomb[i] = (7*y) + xn;
                break;
            case 8:
                idbomb[i] = (8*y) + xn;
                break;
            case 9:
                idbomb[i] = (9*y) + xn;
                break;
            case 10:
                idbomb[i] = (10*y) + xn;
                break;
            case 11:
                idbomb[i] = (11*y) + xn;
                break;
            case 12:
                idbomb[i] = (12*y) + xn;
                break;
            case 13:
                idbomb[i] = (13*y) + xn;
                break;
            case 14:
                idbomb[i] = (14*y) + xn;
                break;
            case 15:
                idbomb[i] = (15*y) + xn;
                break;
            case 16:
                idbomb[i] = (16*y) + xn;
                break;
            case 17:
                idbomb[i] = (17*y) + xn;
                break;
            case 18:
                idbomb[i] = (18*y) + xn;
                break;
            case 19:
                idbomb[i] = (19*y) + xn;
                break;
            case 20:
                idbomb[i] = (20*y) + xn;
                break;
            case 21:
                idbomb[i] = (21*y) + xn;
                break;
            case 22:
                idbomb[i] = (22*y) + xn;
                break;
            case 23:
                idbomb[i] = (23*y) + xn;
                break;
        }
        
        i += 1;
    }
    idbomb.sort(function(a, b){return a - b});
    console.log(idbomb)
}
function pokaz(t, x, y)
{
    szerokosc = x;
    var plansza = document.getElementById("plansza");
    for (var id=0; id < x*y; id++)
    {
        var btn = document.createElement("button");
        plansza.appendChild(btn);
        btn.setAttribute('id', String(id));
        if (idbomb.includes(id))
        {
            btn.setAttribute('class', 'bomba');
        } else {
            btn.setAttribute('class', 'zwyklak');
        }
        btn.setAttribute('onclick', 'lewyklik(id)');
        btn.setAttribute('oncontextmenu', 'prawyklik(id)');
        przyciski.push(btn);
    }
    for (var i = 0; i < przyciski.length; i++) 
    {
        let total = 0;
        var lewakrawedz = (i % szerokosc === 0); 
        var prawakrawedz = ((i+1) % szerokosc === 0);

        if (przyciski[i].classList.contains("zwyklak")) 
        {
            if (i > 0 && !lewakrawedz && przyciski[i-1].classList.contains("bomba")) total ++
            if (i > szerokosc-1 && !prawakrawedz && przyciski[i + 1 - szerokosc].classList.contains("bomba")) total ++
            if (i > szerokosc && przyciski[i - szerokosc].classList.contains("bomba")) total ++
            if (i > szerokosc+1 && !lewakrawedz && przyciski[i - 1 - szerokosc].classList.contains("bomba")) total ++
            if (i < (x*y)-2 && !prawakrawedz && przyciski[i + 1].classList.contains("bomba")) total ++
            if (i < x*(y-1) && !lewakrawedz && przyciski[i - 1 + szerokosc].classList.contains("bomba")) total ++
            if (i < x*(y-1)-2 && !prawakrawedz && przyciski[i + 1 + szerokosc].classList.contains("bomba")) total ++
            if (i < x*(y-1)-1 && przyciski[i + szerokosc].classList.contains("bomba")) total ++
            przyciski[i].setAttribute('data', total)
        }
    }
    pokazflagi();
}
function lewyklik(id){
    var btn = document.getElementById(id);
    if (przegrana) return
    if (btn.classList.contains("sprawdzone") || btn.classList.contains("flaga")) return
    if (btn.classList.contains("bomba")){
        console.log("game over");
    } else {
        let total = btn.getAttribute('data');
        if (total != 0){
            btn.classList.add("sprawdzone");
            if (total == 1) btn.classList.add('jedna');
            if (total == 2) btn.classList.add('dwie');
            if (total == 3) btn.classList.add('trzy');
            if (total == 4) btn.classList.add('cztery');
            if (total == 5) btn.classList.add('piec');
            if (total == 6) btn.classList.add('szesc');
            if (total == 7) btn.classList.add('siedem');
            btn.innerHTML = total;
            return
        }
        sprawdz(id);
    }
    btn.classList.add("sprawdzone");
    console.log(btn);
}
function sprawdz(id)
{
    var lewakrawedz = (id % szerokosc === 0); 
    var prawakrawedz = ((id+1) % szerokosc === 0);
    console.log(przyciski[id]);
    id = Number(id);

    if (id > 0 && !lewakrawedz) {
        var noweid = przyciski[id - 1].id;
        lewyklik(noweid);
    }
    if (id > (szerokosc - 1) && !prawakrawedz) {
        var noweid = przyciski[id + 1 - szerokosc].id;
        lewyklik(noweid);
    }
    if (id > szerokosc) {
        var noweid = przyciski[id - szerokosc].id;
        lewyklik(noweid);
    }
    if (id > szerokosc + 1 && !lewakrawedz) {
        var noweid = przyciski[id - 1 - szerokosc].id;
        lewyklik(noweid);
    }
    if (id < (x*y)-2 && !prawakrawedz) {
        var noweid = przyciski[id + 1].id;
        lewyklik(noweid);
    }
    if (id < x*(y-1) && !lewakrawedz) {
        var noweid = przyciski[id - 1 + szerokosc].id;
        lewyklik(noweid);
    }
    if (id < x*(y-1)-2 && !prawakrawedz) {
        var noweid = przyciski[id + 1 + szerokosc].id;
        lewyklik(noweid);
    }
    if (id < x*(y-1)-1) {
        var noweid = przyciski[id + szerokosc].id;
        lewyklik(noweid);
    }
}
function prawyklik(id){
    window.addEventListener('contextmenu', function (e) {e.preventDefault();});
    var btn = document.getElementById(id);
    if (btn.classList.contains("flaga")){
        btn.classList.remove("flaga")
    } else {
        btn.classList.add("flaga");
    }
    console.log(btn);
}
function latwy()
{
    const plansza = document.getElementById('plansza');
    plansza.classList.remove('normal');
    plansza.classList.remove('hard');
    plansza.classList.add('easy');
    var t = [];
    for (var y=0; y<8; y++)
    { 
        t[y] = [];
        for (var x=0; x<8; x++) 
        {
            t[y][x] = 0;
        }
    }
    ile_bomb(10, x, y, t);
    pokaz(t, x, y);
    zatrzymajtimer();
    starttimer();
}
function sredni()
{
    const plansza = document.getElementById('plansza');
    plansza.classList.remove('easy');
    plansza.classList.remove('hard');
    plansza.classList.add('normal');
    var t = [];
    for (var y=0; y<18; y++)
    {
        t[y] = [];
        for (var x=0; x<14; x++)
        {
            t[y][x] = 0;
        }
    }
    ile_bomb(40, x, y, t);
    pokaz(t, x, y);
    zatrzymajtimer();
    starttimer();
}
function trudny()
{
    const plansza = document.getElementById('plansza');
    plansza.classList.remove('normal');
    plansza.classList.remove('easy');
    plansza.classList.add('hard');
    var t = [];
    for (var y=0; y<23; y++)
    {
        t[y] = [];
        for (var x=0; x<20; x++)
        {
            t[y][x] = 0;
        }
    }
    ile_bomb(99, x, y, t);
    pokaz(t, x, y);
    zatrzymajtimer();
    starttimer();
}
