console.log('hello world');
// window.alert('rame');

document.getElementById("nig").textContent = `hello`;

// variables
let x;
x = 100;
console.log(x)

let y = 110;
console.log(y)

let agee = 18;
let nam = 'nika';
console.log(`hi I am ${agee} years old and name is ${nam}`)
console.log(typeof nam)

online = false;
console.log(`I am online:${online}`)

document.getElementById("n1").textContent = agee;
document.getElementById("n2").textContent = `my name is ${nam}`;



let stud = 20;
// stud = stud + 1 ;
// stud += 1
// stud = stud - 1 ;
// stud -=1
// stud = stud *2 ;
// stud = stud ** 2;
// let extra = stud / 3;
let extra = stud % 3;

console.log(stud);
console.log(extra);





// let username = window.prompt('name')
// console.log(username);

let user;
document.getElementById("submit").onclick = function () {
    user = document.getElementById("text").value;
    document.getElementById("nam").textContent = `hello ${user}`;
    console.log(user)
}


// username chven gvadzlevs strngs,mara sxva tipad ro vaqciot,esaa sawiro
// username = Number(username)
// username+=1
// console.log(username);

let c = 'nik';
let a = 'aki';
let z = 'ljh';

c = Number(c)
a = String(a)
z = Boolean(z)

console.log(c, typeof c);
console.log(a, typeof a);
console.log(z, typeof z);

// counter
const dak = document.getElementById("dak");
const res = document.getElementById("res");
const momat = document.getElementById("momat");
const nm = document.getElementById("num");

let count = 0;

momat.onclick = function () {
    count++;
    nm.textContent = count;
}
dak.onclick = function () {
    count--;
    nm.textContent = count;
}
res.onclick = function () {
    count = 0;
    nm.textContent = count;
}

// math
const ppp = Math.PI
console.log(ppp);
let dd = 3.91;
let hh = Math.round(dd);
let hhj = Math.floor(dd);
let hha = Math.ceil(dd);
let tr = Math.trunc(dd);
let tq = Math.pow(2, 3);
let trt = Math.sqrt(dd);
let trw = Math.log(dd);
let tre = Math.sin(dd);
let trr = Math.cos(dd);
let trs = Math.max(2,5,4,3);
let trbf = Math.min(2,5,4,3);

console.log(hh);
console.log(hhj);
console.log(hha);




let rand = document.getElementById("rand");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let min = 1;
let max = 10;
let randomnum;
let randomnumm;


rand.onclick = function () {
    randomnum = Math.round(Math.random() * max) + min;
    randomnumm = Math.round(Math.random() * max) + min;
    label1.textContent = randomnum;
    label2.textContent = randomnumm;
}



// if
// let age = 19;
// if (age > 18) {
//     console.log("niga");
// }
// else if (age == 18){
//     console.log("shen xar 18 wlis");
// }
// else if (age >= 100){
//     console.log("dzalian moxuci xar");
// }
// else if (age == 0){
//     console.log("shen xar 0 wlis");
// }
// else{
//     console.log("18-ze naklebi");
// }

let agg = document.getElementById("agg");
let sbm = document.getElementById("sbm");
let qq = document.getElementById("qq");
let ff;


sbm.onclick = function() {
    ff = agg.value;
    let hhq = Number(ff);
if (hhq > 18) {
    qq.textContent = "zrdasruli xar";
}
else if (hhq == 18){
    qq.textContent = "shen xar 18 wlis";
}
else if (hhq >= 100){
    qq.textContent = "dzalian moxuci xar";
}
else if (hhq == 0){
    qq.textContent = "shen xar 0 wlis";
}
else{
    qq.textContent = "18-ze naklebi";
}
}





const subs = document.getElementById("subs");
const bog = document.getElementById("bog");
const tbc = document.getElementById("tbc");
const bsd = document.getElementById("bsd");
const bankbtn = document.getElementById("bankbtn");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");


bankbtn.onclick = function() {
    if(subs.checked){
        p1.textContent = "you are subscribed";
    }
    else{
        p1.textContent = "you are not subscribed";
    }
    if(bog.checked){
        p2.textContent = "you are using Bog";
    }
    else if(tbc.checked){
        p2.textContent = "you are using Tbc";
    }
    else if(bsd.checked){
        p2.textContent = "you are using Bsd";
    }
    else{
        p2.textContent = "you are not paying";
    }
}




let asaki = 23;
let gamotvla = asaki >=18 ? "18-ze meti": "18-ze naklebi";
console.log(gamotvla);

let tt = true;
let rr = tt ? "ki":"ara";
console.log(rr);

// switch
let dge = 5;
switch(dge){
    case 1:
        console.log("orshabati");
        break;
    case 2:
        console.log("samshabati");
        break;
    case 3:
        console.log("otxshabati");
        break;
    case 4:
        console.log("xutshabati");
        break;
    case 5:
        console.log("paraskevi");
        break;
    case 6:
        console.log("shabati");
        break;
    case 7:
        console.log("kvira");
        break;
    default:
        console.log(`${dge} araa kviris dge`);
}

let qula = 87;
let nishani;

switch(true){
    case qula>=90:
        nishani = "a";
        break;
    case qula>=80:
        nishani = "b";
        break;
    case qula>=70:
        nishani = "c";
        break;
    case qula>=60:
        nishani = "d";
        break;
    default:
        nishani = "f";
}
console.log(nishani);


// string methods
let sityva = "nikaa ";
console.log(sityva.charAt(0));
console.log(sityva.indexOf("n"));
console.log(sityva.lastIndexOf("a"));
console.log(sityva.length);
console.log(sityva.trim());
console.log(sityva.toUpperCase());
console.log(sityva.toLowerCase());
console.log(sityva.repeat(2));
console.log(sityva.startsWith("n"));
console.log(sityva.endsWith("x"));

let numb = "123-345-5678";
let cv = numb.padStart("15", "0");
console.log(cv);
console.log(numb.replaceAll("-", "/"));




// slicing
const saxe = "nika maglaka";
let mnsm = "nika@gmail.com";
let saxx = saxe.slice(0,4);
let saxxx = saxe.slice(-3);
let dds = saxe.slice(0, saxe.indexOf("a"));
let baz = mnsm.slice(mnsm.indexOf("@")+1)
console.log(dds);
console.log(saxx);
console.log(baz);





let usern = "nIkolOzi";
let fnv = usern.trim().charAt(0).toUpperCase();
console.log(fnv);


let weath = 45;

if (weath > 30 && weath <=60) {
    console.log("rame");
}
else if (weath < 30 || weath > 100){
    console.log("tralaleiro");
}



// = mnishvnelobas aniwebs
// == tolobaa,igive mnishvneloba tu aqvs
// === mnishvelobis da tipis toloba
// != utoloba
// !== mkacri utoloba

let login = true;
let usr;
let word;

while(!login){
    usr = window.prompt("enter username");
    word = window.prompt("enter password");

    if(usr == "nika" && word == "nika1") {
        login = true;
        console.log("sworia");
    }
    else{
        console.log("arasworia");
    }
}



for(let i =0; i<=10; i++){
    // console.log("shibal");
    if(i ==3){
        continue;
    }
    else{
        console.log(i);
    }
}



// let minim = 1;
// let maxim = 100;

// let ghj = Math.floor(Math.random() * maxim);
// console.log(ghj);

// let attemp = 0;
// let ges;
// let runn = true;

// while (runn) {
//     ges = window.prompt("mcdeloba");
//     ges = Number(ges);

//     if(isNaN(ges)){
//         window.alert("araswori cda")
//     }
//     else if (ges < minim || ges > maxim){
//         window.alert("araswori cda")
//     }
//     else{
//         attemp++;
//         if(ges < ghj){
//             window.alert("dabali cifria")
//         }
//         else if (ges > ghj){
//             window.alert("magali cifria")
//         }
//         else{
//             window.alert(`swori pasuxi iyo ${ghj},dagwirda${attemp} cda`);
//             runn = false;
//         }
//     }
// }



// function
function raime(sax,asa) {
    console.log(`hello ${sax}`);
    console.log(`sheni asakia ${asa}`);
}
raime("nika",19);

function shekreba(x,y) { 
    // console.log(fxs);
    return x*y;
}
console.log(shekreba(4,5));

function email(mail){
    if(mail.includes("@gmail.com")){
        console.log(`${mail} swori mailia`);
    }
    else{
        console.log(`${mail} araswori mailia`);
    }
    // return mail.includes("@") ? true:false;
}
email("nika@gmail.com");




let numm = document.getElementById("numm");
let rad = document.getElementById("rad");
let rad1 = document.getElementById("rad1");
let ress = document.getElementById("ress");
let temperat;

function gadayvana() {
    if(rad.checked){
    temperat = Number(numm.value);
    temperat = temperat*9/5 +32;
    ress.textContent = temperat.toFixed(1) + "f";
    }
    else if(rad1.checked){
        temperat = Number(numm.value)
        temperat = (temperat - 32) * (9 / 5);
        ress.textContent = temperat.toFixed(1) + "c";
    }
    else{
        console.log('araswori');
    }
}

// array

let arr = ["nika","maglaka","zangi"];
// arr[2] = "nigeri";
// arr.push("niga");
// arr.pop();
// arr.unshift("pirvelia");
console.log(arr.length);
console.log(arr[2]);
console.log(arr.indexOf("maglaka"));
console.log(arr.reverse());

let numbs = [1,2,3,4,5];
// console.log(Math.max(numbs)); arasworia
// gaacalkevebs ...
console.log(Math.max(...numbs));
console.log(Math.min(...numbs));

let usrnmm = "niggg";
let usrnmmm = [...usrnmm].join("-");
console.log(usrnmmm);

// function dice() {
//     const inpuu = document.getElementById("inpuu").value;
//     const diceres = document.getElementById("diceres");
//     const diceimg = document.getElementById("diceimg");
//     let values = [];
//     let imagses = [];

//     for (let i = 0; i < inpuu; i++) {
//         const vl = Math.floor(Math.random() *6 )+1;
//         values.push(vl);
//         imagses.push(`<img src = ""`)
//     }

// }




function timm() {
    setTimeout(function() {
        console.log("timeout");
    }, 2000);
}
timm();

function jami(callback, x, y) {
    let resu = x +y;
    callback(resu);
}
function meore(resu) {
    console.log(resu);
}
jami(meore,5,6);

let numbes = [1,2,4,5,6,7,9];
numbes.forEach(eee);

function eee(para) {
    console.log(para);
};


function doubl(par,ii,arra){
    arra[ii] = par*2;
}
numbes.forEach(doubl);
numbes.forEach(eee);



let fru = ["banana","apple","carrot"];

function upp(paraa,im,km){
    km[im] = paraa.toUpperCase();
}
function disp(diis) {
    console.log(diis);
}
fru.forEach(upp);
fru.forEach(disp);


let nub = [1, 2, 3, 4, 5, 6];
function nbb(element){
    console.log(Math.pow(element,2));
}
nub.map(nbb);

let sityveb = ["nika","rame","cvetshi","bnbnb"];
function didi(param) {
    console.log(param.toUpperCase());
}
sityveb.map(didi);


function luwi(param) {
    return param % 2 == 0;
};
function kenti(param) {
    return param % 2 !=  0;
}
console.log(nub.filter(luwi));
console.log(nub.filter(kenti));

let asakebi = [12,15,17,18,23,25,27];
function asak(elem){
    return elem >=18;
}
console.log(asakebi.filter(asak));

function sit(elem){
    return elem.length >=5;
}
console.log(sityveb.filter(sit));

let grades = [12,56,47,89,67,79];

function grad(acc,cca){
    return Math.max(acc,cca);
}
function gradee(acc,cca){
    return Math.min(acc,cca);
}
console.log(grad);
console.log(gradee);

const helloo = function(){
    console.log("helloo");
}
helloo();
setTimeout(helloo,2000);


let numbbb = [1,2,4,5,6,7];
let fuunc = numbbb.map(function (param) {
    return param**2;
})
console.log(fuunc);
let filtt = numbbb.filter(function (param) {
    return param % 2 == 0;
})
console.log(filtt);


// arrow function
let fun = (name) => {console.log(`hello ${name}`)};
fun("nika")
setTimeout(() => {
    console.log("rame");
}, 1000);
let luuw = nub.filter((elem) => elem % 2==0);
console.log(luuw);


// object,this
let info = {
    firstname: "nika",
    lastname:"maglaka",
    age:18,
    active:true,
    fuuunc: function(){console.log("nika aqaa");},
    fucn: () => {console.log("meore");},
    fuucn: ()=> {console.log(`aq ro saxeli gamochndes sawiroa ${info.firstname}`);}
}
console.log(info.firstname);
console.log(info.lastname);
info.fuuunc();
info.fucn();
info.fuucn();


function adamiani(sax,gva,asak,dabweli){
    this.sax = sax,
    this.gva = gva,
    this.asak = asak,
    this.dabweli = dabweli
};
let adam = new adamiani("nika","maglaka",18,2007);
let adam2 = new adamiani("gio","vajha",22,2003);
console.log(adam);
console.log(adam.sax);
console.log(adam2.gva);



// class

class producti{
    construction(sax,gvari){
        this.sax = sax,
        this.gvari = gvari
    }
    funcqia(){
        console.log(`chemi saxelia${this.sax}`);
        console.log(`chemi saxelia${this.gvari}`);
    }
}

let prod = new producti("nokshd","hbfevbhiec")
prod.funcqia();


// static
class rame{
    static p = 3.14;
    static rad(radius){
        return radius* 2;
    }
    static ramm(radius){
        return radius * this.p;
    }
    
};

console.log(rame.rad(5));
console.log(rame.ramm(10));

class users{
    static raodenoba = 0;

    constructor(username){
        this.username = username;
        users.raodenoba ++;
    }
}

let piro = new  users("ziko");
let piro2 = new users("pele");
let piro3 = new users("maradona");
console.log(piro);
console.log(piro2);
console.log(piro3);
console.log(users.raodenoba);



class animal{
    alive = true;
    eat(){
        console.log(`${this.name} is eating`);
    };
    sleep(){
        console.log(`${this.name2} is sleeping`);
    }
}
class dog extends animal{
    name = "dog";
    name2 = "dog2";
};
class cat extends animal{
    name = "cat";
    name2 = "cat2";
    run(){
        console.log(`${this.name} is running`);
    }
}
class cow extends animal{
    name = "cow";
    name2 = "cow2";
};
let doog = new dog();
let caat = new cat();
let coow = new cow();
doog.eat();
caat.eat();
doog.sleep();
coow.sleep();
caat.run();


class adamiann{
    constructor(name,gvari,age){
        this.name = name;
        this.gvari = gvari;
        this.age = age;
    }
}

class nika extends adamiann{
constructor(name,gvari,age,asaki){
    super(name,gvari,age);
    this.asaki = asaki;
}};


let bfvhber = new nika("nika","tralareilo","tralala",19);
// amis upiratesobaa is,rom class adamiann-shi ra atributebic gvaq,eg shegvidzlia  gadavawodot yvela sxva mis shvil clasebs
console.log(bfvhber.gvari);



class ymawvili{
    constructor(sax,gva,asa){
        this.sax = sax;
        this.gva = gva;
        this.asa = asa;
    }
    set saax(axalisax){
        if(typeof axalisax == "string" && axalisax.length > 6){
            this._isax = axalisax;
        }
        else{
            console.log("error");
        }
    }
    // get raame{
    //     this._raame = raame;
    // }
}
let bhcbh = new ymawvili(12,"gvaa",18);
console.log(bhcbh.sax);



// destruction
let aa = 2;
let bb = 3;
[aa,bb] = [bb,aa];
console.log(aa);
// aa da bb cvlian valuebs
let cooolors = ["red","green","blue","yellow"];
[cooolors[0],cooolors[3]] = [cooolors[3],cooolors[0]]
console.log(cooolors);

let colllors = ["red","green","blue","yellow","purple"];
[firstcolor,secondcolor,thirdcolor, ...extracolors] = colllors;
console.log(secondcolor);
console.log(extracolors);


// function adamianze(name,gvari,age,team){
//     console.log(`misi saxelia ${name},xolo gvaria ${gvari}`);
//     console.log(`misi asakia ${age}`);
//     console.log(`misi gundia ${team}`);
// };

const maglakaa = {
    name:"nika",
    gvari:"maglaka",
    age:18,
    team:"arsenal"
};
const vinme = {
    name:"vinme",
    gvari:"viinmeeee",
    age:33
};

// let {name,gvari,age,team} = maglakaa;
// console.log(team);
let {name,gvari,age,team = "barca"} = vinme;
console.log(gvari);


// adamianze(maglakaa);



const vinnme = {
    name:"tralareilo",
    age:44,
    hobbies: ["fexburti","kalatburti","chogburti"],
    misamarti:{
        kontinenti:"azia",
        qveyana:"samxret korea",
        ip:"ar vici"
    }
}
console.log(vinnme.hobbies[1]);
console.log(vinnme.misamarti.qveyana);

for(const property in vinnme.misamarti){
    console.log(vinnme.misamarti[property]);
}


class viinme{
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = new misamartii(...address)
    }
}

class misamartii{
    constructor(kontinenti,qveyana,ip){
        this.kontinenti = kontinenti;
        this.qveyana = qveyana;
        this.ip = ip;
    }
};


// arrays of objects
let fruuits = [
    {name:"apple",color:"red",calories:90},
    {name:"banana",color:"yellow",calories:50},
    {name:"pineapple",color:"yellow",calories:120},
    {name:"cabbage",color:"green",calories:20},
    {name:"orange",color:"orange",calories:70},
]
fruuits.push({name:"rame",color:"romelime",calories:40})
console.log(fruuits[0].calories);
console.log(fruuits[5].name);
fruuits.forEach(fruit => console.log(fruit.color));
fruuits.map(fruit => console.log(fruit.color));
let bbcx = fruuits.filter(fruit => fruit.color == "yellow");
console.log(bbcx);



const fruitfunc = fruuits.reduce((max, fru) => fru.calories > max.calories ? fru:max);
console.log(fruitfunc);



// sort

let saxelebi = ["nika","ako","bjdcjnd"]
console.log(saxelebi.sort());
let cifrebi = [1,4,7,2,9,11,6,8]
cifrebi.sort((a,b) => a-b);
// cifrebi.sort((a,b) => b-a);
// sort sortavs gansxvavebulad,anu ricxvis pirveli asoti
fruuits.sort((a,b) => a.calories - b.calories);
fruuits.sort((a,b) => a.name.localeCompare(b.name));


// shuffle code
const cards = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]
shuffle(cards);
function shuffle(arr) {
    for(let i = arr.length - 1;i>0;i--){
        let randoom = Math.floor(Math.random() * (i+1));
        [arr[i], arr[randoom]] = [arr[randoom],arr[i]]
    }
};



// date
let dro = new Date();
console.log(dro);
// date(year,month,day,hour,minute,second,ms)
let dr = new Date(2022,0,3,14,43);
let drooo = new Date("2025-01-02T12:00:00Z");
let rm = drooo.getFullYear(); //mxolod weliwads gvichvenebs
let rmz = drooo.getMonth();
let rmx = drooo.getDay();
let rmc = drooo.getTime();

let ghf = new Date();
ghf.setFullYear(2023);
ghf.setDate(1);
ghf.setMonth(6);



// closures
function ravici(){
    let cgbcc = "nigeri";
    function raaaviici(){
        console.log(cgbcc);
    }
    raaaviici();
}
ravici()

function mmateba(){
    let tvla = 0;
    function uuvg(){
        tvla++;
        console.log(`ricxvia${tvla}`);
    }
    function bxd(){
        return tvla;
    }
    return{uuvg,bxd}
}
let nnn = mmateba();
nnn.uuvg();
nnn.uuvg();
nnn.uuvg();
nnn.uuvg();
nnn.uuvg();

console.log(`${nnn.bxd()}`);



// setTimeout(() => {console.log("rame");}, 1111);
let qmd = setTimeout(() => {console.log("rame");}, 1111);
clearTimeout(qmd);


// import{nbbb,didii,luwii,kentii} from "../rame.js";
// console.log(nbbb);
// console.log(didii);
// console.log(luwii);
// console.log(kentii);




function fuunc1(callback) {
    setTimeout(() => {console.log("priveli")
    callback();}
    ,500)
}
function func2() {
    console.log("meore");
    console.log("mesame");
    console.log("meotxe");
}
fuunc1(func2);


try{
    console.log(ararsebulia);
}
catch(error){
    console.log(error);
}
finally{
    console.log("es yvela variantshi gamoisaxeba");
}


// try{
//     let rrf = Number(window.prompt("pirveli ricxvi:"));
//     let rrff = Number(window.prompt("meore ricxvi:"));
//     if(rrff == 0){
//         throw new Error("ar sheizleba iyos 0");
//     }
//     if(isNaN(rrf) || isNaN(rrff)){
//         throw new Error("araa cifrebi");
//     }
//     let ghghg = rrf/rrff;
//     console.log(ghghg);
// }
// catch(error){
// console.log(error);
// }


// dom
// console.log(document);
// console.dir(document);
document.title = "nikas page";
// document.body.style.backgroundColor = "blue";


// arsebobs 5 tipis
document.getElementById("saxeli");
document.getElementsByClassName("saxeli");
document.getElementsByTagName("h4");
document.querySelector("saxeli");
document.querySelectorAll("saxeli");



let nnmb = document.getElementById("nnmb");
let frst = nnmb.firstElementChild;
console.log(frst);
let ffbg = document.querySelectorAll("ul");
ffbg.forEach(ffbb => {
    let rrd = ffbb.lastElementChild;
    rrd.style.backgroundColor = "red";
})

let nkaa = document.getElementById("nkaaa");
let rfdc = nkaa.nextElementSibling;
rfdc.style.backgroundColor = "coral";

let trrr = document.getElementById("trrrr");
let bnmv = trrr.previousElementSibling;
bnmv.style.backgroundColor = "blue";

let pareent = trrr.parentElement;
pareent.style.backgroundColor = "yellow";

let nnb = document.getElementById("nnb");
let rcva = nnb.children;
rcva[2].style.color = "white"



// create html element
let creaate = document.createElement("h2");
let nfvgf = creaate.textContent = "zaaangi";
creaate.id = "h22";
creaate.style.color = "tomato";
creaate.style.textAlign = "center";
// document.body.append(nfvgf); es daiwereba boloshi
// document.body.prepend(nfvgf); es yvelaze magla daiwreba
let ramm = document.getElementById("rame");
ramm.append(creaate);
let meoree = document.getElementById("meoree");
// document.body.insertBefore(creaate,meoree);
let bbhc = document.getElementById("bbhc");
document.getElementById("mesame").removeChild(bhbc);




let clickme = document.getElementById("click");
function daklikebaze(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "daklikebulia";
}
clickme.addEventListener("click",daklikebaze)


clickme.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "cyan";
    event.target.textContent = "mitanilia mausi";
});
clickme.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "coral";
    event.target.textContent = "mausi araa axlos";
})

// document.addEventListener("keydown", event =>{
//     modzravi.textContent = "awert";
//     modzravi.style.backgroundColor = "firebrick";
// });
// document.addEventListener("keyup", event =>{
//     modzravi.textContent = "daawiret axlidan";
//     modzravi.style.backgroundColor = "cyan";
// });
let modzravi = document.getElementById("modzravi");
let moveamount = 500;
let xx = 0;
let yy = 0;
document.addEventListener("keydown", event =>{
    if(event.key.startsWith("arrow")){
        event.preventDefault();
        switch (event.key) {
            case "arrowUp":
                yy -=moveamount;
                break;
            case "arrowDown":
                yy +=moveamount;
                break;
            case "arrowLeft":
                xx -=moveamount;
                break;
            case "arrowRight":
                xx +=moveamount;
                break;
        
        }
        modzravi.style.top = `${yy}px`;
        modzravi.style.left = `${xx}px`;
    }
});

let hiding = document.getElementById("hiding");
let showing = document.getElementById("showimg");

hiding.addEventListener("click", event =>{
    if(showing.style.display === "none"){
        showing.style.display = "block";
        hiding.textContent = "hide";
    }
    else{
        showing.style.display = "none";
        hiding.textContent = "show";
    }
})

let btnn = document.querySelectorAll(".btnn");
btnn.forEach(btn =>{
    btn.textContent += "niga";
});

btnn.forEach(eventt =>{
    eventt.addEventListener("mouseover", cvc =>{
        cvc.target.style.backgroundColor = "red";
    })
});
btnn.forEach(eventt =>{
    eventt.addEventListener("mouseout", cvc =>{
        cvc.target.style.backgroundColor = "cyan";
    })
})

let bttn = document.createElement("button");
bttn.textContent = "button 6 ni";
bttn.classList = "btnn";
document.body.appendChild(bttn)

btnn.forEach(event =>{
    event.addEventListener("click", vvb =>{
        vvb.target.style.display = "none";
    })
})

let bntt = document.getElementById("bnt");
bntt.classList.add("bnt");
// bntt.classList.remove("bnt");
bntt.addEventListener("mouseover", xcd =>{
    xcd.target.classList.replace("bnt","bt");
});
// bntt.addEventListener("mouseover", xcd =>{
//     xcd.target.classList.toggle("bnt","bt");
// });
// contains()


function funct1(callback){
    setTimeout(() =>{
        console.log("1 task");
        callback();
    },2000)
}
function funct2(callback){
    setTimeout(() =>{
        console.log("2 task");
        callback();
    },3000)
}
function funct3(callback){
    setTimeout(() =>{
        console.log("3 task");
        callback();
    },2100)
}
function funct4(callback){
    setTimeout(() =>{
        console.log("4 task");
        callback();
    },1000)
}

funct1(() =>{
    funct2(() =>{
        funct3(() =>{
            funct4(() =>{
                console.log("dasrulda");
            })
        })
    })
})
// sworia es tumca callback hell ari tu bevrs gamoviyenebt

function pirvell() {
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        let shesrulebuul = true;
        if(shesrulebuul){
            resolve("pirveli rame")
        }
        else{
            reject("ar shesrulebula 1")
        }
    },1900)
    // da yvela sxvac ase
    })
};
function meorr() {
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
       resolve("meore rame");
    },100)
    })
};
function mesamm() {
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
       resolve("mesame rame");
    },3000)
    })
};
function meotxx() {
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
       resolve("meotxe rame");
    },1500)
    })
};
function mexutt() {
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
       resolve("mexute rame");
    },3000)
    })
};

// pirvell().then(value => {console.log(value); return meorr()})
//         .then(value => {console.log(value); return mesamm()})
//         .then(value => {console.log(value); return meotxx()})
//         .then(value => {console.log(value); return mexutt()})
//         .then(value => {console.log(value);})


// amis uketesi versiaa async/await
async function shejameba() {
try{
        let prvll = await pirvell();
    console.log(prvll);

    let mer = await meorr();
    console.log(mer);

    let mesa = await mesamm();
    console.log(mesa);

    let metx = await meotxx();
    console.log(metx);

    let mxt = await mexutt();
    console.log(mxt);
}
catch(error){
console.error(error);
}
}


shejameba();




let namess = ["nika","gio","vazha","vinme","igi","agi"];
let dajsoneba = JSON.stringify(namess);
console.log(dajsoneba);
let prssn = {
    "name":"nika",
    "gvari":"maglaka",
    "age":18,
    "hobbies":["football","kdramas"]
}
let jsonperson = JSON.stringify(prssn);
console.log(jsonperson);
let pppl = [
    {
        "name":"nugo",
        "gvari":"nugoishvili",
        "isemployed":false
    },
    {
        "name":"gocha",
        "gvari":"vajdjbgo",
        "isemployed":true
    },
    {
        "name":"misho",
        "gvari":"saakashvili",
        "isemployed":false
    },
    {
        "name":"akaki",
        "gvari":"vashlovani",
        "isemployed":true
    },
    {
        "name":"nika",
        "gvari":"kakoishvili",
        "isemployed":true
    }
];
let ppljson = JSON.stringify(pppl);
console.log(ppljson);
// stringify-t chven gadagvyavs javascript objecti json stringad
// parse-kide piriqit

let namesss = `["nika","gio","vazha","vinme","igi","agi"]`;
let namsjson = JSON.parse(namesss);
console.log(namsjson);

// fetching json
fetch("../people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.gvari)))
.catch(error => console.error(error))


// api

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => response.json())
// .then(data => console.log(data.id))
// .catch(error => console.error(error))


// let pokename = document.getElementById("pokemonName");

// async function pokebtn(){
//     try{
//         const pokenaame = pokename.value.toLowerCase;
// let responsee = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
// if(!responsee.ok){
//     throw new Error("arasworia")
// }
// const daata = responsee.json();
// let pokmg = daata.sprites;
// let pokeimg = document.getElementById("pokeimg");
// pokeimg.src = pokmg;
// pokeimg.style.display = "block";

//     }
//     catch(error){
//         console.error(error);
//     }
// }

// apis

const apiKey = "6485d696935e032bf6c640577c29a19b";
let weatinp = document.getElementById("weatinp");
let weatbtn= document.getElementById("weatbtn");
let card = document.querySelector(".card");

weatbtn.addEventListener("submit", event =>{
    event.preventDefault();
    const cityy = weatinp.value;
if(cityy){
console.log("rame");
}
else{
    errori("cahwere qalaqi")
}
})



function errori(message){
const erorism = document.createElement("p");
erorism.textContent = message;
erorism.style.display = "block";

card.textContent = "";
card.style.display = "flex";
card.appendChild(erorism)
}



// saati
function saaati(){
    const daate =new Date();
    let hours = daate.getHours();
    let minutes = daate.getMinutes();
    let second = daate.getSeconds();
    let dro = `${hours}:${minutes}:${second}`;
    let st = document.querySelector(".saati").textContent = dro;

}
saaati();
setInterval(saaati, 1000);

let droo = document.querySelector(".dro");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let runningg = false;

function start() {
    if(!runningg){
        let startTime = Date.now() - elapsedTime;
        timmer = setInterval(update,10);
        runningg = true;
    }
}

function stop(){
    if(runningg){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime;
        runningg = false;
    }
}


function reset(){
clearInterval(timer);
startTime = 0;
elapsedTime = 0;
runningg = false;
droo.textContent = "00:00:00:00"
}

function update(){
    const amwamindeli = Date.now();
    elapsedTime = amwamindeli - startTime;

    let hourss = Math.floor(elapsedTime / (1000 * 60 *60));
    let minutess = Math.floor(elapsedTime / (1000 * 60)%60);
    let secondss = Math.floor(elapsedTime / 1000 %60);
    let milosecondds = Math.floor(elapsedTime %1000 / 10);
droo.textContent = `${hourss}:${minutess}:${secondss}:${milosecondds}`
}