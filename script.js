var sekunda = 0;
var t;
var id = 0;
var idbomb = [];
var przyciski = [];
window.addEventListener('contextmenu', function (e) {e.preventDefault();});
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
    for (n=n; n>0; n--)
    {
        var xn = Math.floor(Math.random() * x)
        var yn = Math.floor(Math.random() * y)
        switch (yn) {
            case 0:
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
        if (t[yn][xn] !== 1)
        {
            t[yn][xn] = 1;
        }
        i += 1;
    }
}
function pokaz(t, x, y)
{
    id = 0;
    var szerokosc = x;
    var plansza = document.getElementById("plansza");
    for (var wiersz=0; wiersz<y; wiersz++)
    {
        for (var kolumna=0; kolumna<x; kolumna++)
        {
            if(kolumna==x)
            {
                var btn = document.createElement("button");
                plansza.appendChild(btn);
                plansza.innerHTML += "</br>"
            }
            else
            {
                var btn = document.createElement("button");
                plansza.appendChild(btn);
            }
            btn.setAttribute('id', String(id));
            if (idbomb.includes(id))
            {
                btn.setAttribute('class', 'bomba');
            } else {
                btn.setAttribute('class', 'zwyklak');
            }
            id+=1;
            przyciski.push(btn);
            btn.setAttribute('onclick', 'lewyklik(id)');
            btn.setAttribute('oncontextmenu', 'prawyklik(id)');
        }
    }
    console.log(przyciski)
    for (var i = 0; i < przyciski.length; i++) {
        let total = 0;
        var lewakrawedz = (i % szerokosc === 0) 
        var prawakrawedz = (i === szerokosc-1)

        if (przyciski[i].classList.contains("zwyklak")) {
            if (i > 0 && !lewakrawedz && przyciski[i-1].classList.contains("bomba")) {total ++}
            if (i > szerokosc-1 && !prawakrawedz && przyciski[i + 1 - szerokosc].classList.contains("bomba")) total ++
            if (i > szerokosc && przyciski[i - szerokosc].classList.contains("bomba")) total ++
            if (i > szerokosc+1 && !lewakrawedz && przyciski[i - 1 - szerokosc].classList.contains("bomba")) total ++
            if (i < (x*y)-2 && !prawakrawedz && przyciski[i + 1].classList.contains("bomba")) total ++
            if (i < x*(y-1) && !lewakrawedz && przyciski[i - 1 + szerokosc].classList.contains("bomba")) total ++
            if (i < x*(y-1)-2 && !prawakrawedz && przyciski[i + 1 + szerokosc].classList.contains("bomba")) total ++
            if (i < x*(y-1)-1 && przyciski[i + szerokosc].classList.contains("bomba")) total ++
            przyciski[i].setAttribute('data', total)
        }
        console.log(przyciski[i]);
    }
}
function lewyklik(id){
    var btn = document.getElementById(id);
    if (btn.classList.contains("bomba")){
        console.log("bomba");
    } else {
        var total = btn.getAttribute('data');
        if (total != 0){
            btn.classList.add("sprawdzone");
        }
    }
    console.log(btn);
}
function prawyklik(id){
    var btn = document.getElementById(id);
    console.log("flaga");
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
