// if
let a = 7;
if (a > 0){
    console.log("dadebiti");
}
else if (a < 0){
    console.log("uaryofiti");
}
else{
    console.log("nulia");
};


let b = 5;
if(b % 2 == 0){
    console.log("luwia");
}
else if(b % 2 != 0){
    console.log("kenti");
}
else{
    console.log("nulia");
};

let asaki = 19;
if(asaki >=18){
    console.log("sheudzlia xmis micema");
}
else{
    console.log("ar sheudzlia");
};

if(a > b){
    console.log(a);
}
else{
    console.log(b);
};

let password = "admin123";
if (password == "admin123"){
    console.log("granted");
}
else{
    console.log("not granted");
}

let nishani = 34;
if(nishani >= 50){
    console.log("chaabara");
}
else{
    console.log("chawra");
}

let gradusi = 14;
if(gradusi >= 30){
    console.log("cxela");
}
else{
    console.log("civa");
};

let ricxvi = 22;
if ( 10 <= ricxvi && ricxvi <= 20){
    console.log("10-dan 20-mde");
}
else{
    console.log("araa am moakvetshi");
};
let usern = "";
if(usern == ""){
    console.log("username required");
}
else{
    console.log("welcome");
};
if(a % 5 == 0){
    console.log("iyofa 5-ze");
}
else{
    console.log("ar iyofa");
};




let nish = 33;
if(nish <=100 && nish >=90){
    console.log('A');
}
else if (nish >=80){
    console.log("B");
}
else if (nish >=70){
    console.log("C");
}
else if (nish >=60){
    console.log("D");
}
else if (nish >=0){
    console.log("F");
}
else{
    console.log("shecdoma");
}

let useer = "u";
let passs = "q";
if(useer == ""){
    console.log("username required");
}
else if (passs == ""){
    console.log("password required");
}
else if (useer != "" && passs != ""){
    console.log("login succesfull");
}
else{
    console.log("arasworia");
};

let hour = 6;
if(hour >=5 && hour <= 11){
    console.log("good morning");
}
else if(hour >=12 && hour <= 17){
    console.log("good afternoon");
}
else if(hour >=18 && hour <= 22){
    console.log("good evening");
}
else if(hour ==23  || hour <= 5){
    console.log("good night");
}
else{
    console.log("shecdoma");
}

let q = 5;
let w = 6;
let e = 8;
if (q + w >=e && q + e >= w && w + e >= q){
    console.log("arsebobs samkutxedi");
}
else{
    console.log("ar arsebobs");
}

let g = 5;

if(g > 0){
    if ( g % 2 == 0){
        console.log("dadebiti da luwi");
    }
    else if (g % 2 != 0){
        console.log("dadebiti da kenti");
    }
}
else if(g < 0){
    if ( g % 2 == 0){
        console.log("uaryofiti da luwi");
    }
    else if (g % 2 != 0){
        console.log("uaryofiti da kenti");
    }
}
else{
    console.log("nulia");
};

let price = 50;
let member = true;
if(member == true){
    let ll = price - price* 0.2;
    console.log(ll);
}
else if( member == false){
    let jj = price - price * 0.1;
    console.log(jj);
}
else{
    console.log("shecdoma");
};
let weli = 380;
if(weli % 400 == 0){
    console.log("sworia");
}
else if(weli % 4 == 0 && weli % 100 == 0){
    console.log("arasworia");
}
else if(weli % 4 == 0){
    console.log("sworia");
}
else{
    console.log("shecdoma");
};
let first =5;
let second = 6;
let nishan = "-";
if( nishan == "+"){
    let rr = first + second;
    console.log(rr);
}
else if( nishan == "-"){
    let ee = first - second;
    console.log(ee);
}
else if( nishan == "*"){
    let ww = first * second;
    console.log(ww);
}
else if( nishan == "/"){
    let xx = first / second;
    console.log(xx);
}
else{
    console.log("shecdoma");
}


let grade = 56;
let attedance = 77;
if(grade >= 50){
    if(attedance >= 75){
        console.log("chaabara");
    }
    else if(attedance < 75){
        console.log("chaiwra");
    }
}
else if (grade < 50){
    console.log("chaiwra");
}
else{
    console.log("shecdoma");
};

let balance = 70;
let withdrawal = 50;
if(withdrawal <= 0){
    console.log("arasworia");
}
else if (withdrawal > balance){
    console.log("arasakmarisi");
}
else{
    console.log("sworia");
}





// pirveli unda iyos if (cifr % 3 == 0 && cifr % 5 == 0) da mere (cifr % 3 == 0)
let cifr = 12;
if(cifr > 0){
    if(cifr % 2 == 0){
        if(cifr % 3 == 0){
            console.log("dadebiti,luwi,iyofa 3-ze");
        }
        else if (cifr % 5 == 0){
            console.log("dadebiti,luwi,iyofa 5-ze");
        }
        else{
            console.log("dadebiti,luwi");
        }
    }
    else if(cifr % 2 != 0){
        if (cifr % 3 == 0 && cifr % 5 == 0){
            console.log("dadebiti,kenti,iyofa 5-ze da 3-ze");
        }
        else if(cifr % 3 == 0){
            console.log("dadebiti,kenti,iyofa 3-ze");
        }
        else if (cifr % 5 == 0){
            console.log("dadebiti,kenti,iyofa 5-ze");
        }
        else{
            console.log("dadebiti,kenti");
        }
    }
}
else if (cifr < 0){
    if(cifr % 2 == 0){
        if(cifr % 3 == 0){
            console.log("uaryofiti,luwi,iyofa 3-ze");
        }
        else if (cifr % 5 == 0){
            console.log("uaryofiti,luwi,iyofa 5-ze");
        }
        else if (cifr % 3 == 0 && cifr % 5 == 0){
            console.log("uaryofiti,kenti,iyofa 5-ze da 3-ze");
        }
        else{
            console.log("uaryofiti,luwi");
        }
    }
    else if(cifr % 2 != 0){
        if(cifr % 3 == 0){
            console.log("uaryofiti,kenti,iyofa 3-ze");
        }
        else if (cifr % 5 == 0){
            console.log("uaryofiti,kenti,iyofa 5-ze");
        }
        else{
            console.log("uaryofiti,kenti");
        }
    }
}
else{
    console.log("nulia");
}

let color = "red";
let blinking = true;

if( color == "red" && blinking == false){
    console.log("stop");
}
else if (color == "yellow" && blinking == true){
    console.log("prepare");
}
else if (color == "green" && blinking == false){
    console.log("go");
}
else{
    console.log("shecdoma");
};

let gra = 88;
let atte = 44;
let cheat = false;
if(cheat == true){
    console.log("cheater");
}
else if(gra >= 50){
    if(atte >= 75){
        console.log("chaabara");
    }
    else if(atte < 75){
        console.log("chaiwra");
    }
}
else if (gra < 50){
    console.log("chaiwra");
}
else{
    console.log("shecdoma");
};



let nmm = 15;
if(nmm % 3 == 0 && nmm % 5 == 0){
    console.log("3 and 5");
}
else if(nmm % 3 == 0){
    console.log("3");
}
else if(nmm % 5 == 0){
    console.log("5");
}
else{
    console.log("shecdoma");
}

if(nmm >=10 && nmm <=20){
    console.log("in range");
}
else if (nmm < 10 && nmm > 0 || nmm > 20 ){
    console.log("out the range");
}
else if (nmm < 0){
    console.log("arasworia");
}

let role = "admin";
if(role == "admin"){
    console.log("full acess");
}
else if(role == "moderator"){
    console.log("limited acess");
}
else if(role == "user"){
    console.log("basic acess");
}
else{
console.log("no acess");
}

let aggg = 34;
let perm = true;
if(aggg < 18){
    console.log("too young");
}
else if (aggg >= 18 && perm == true){
    console.log("allowed");
}
else{
    console.log("not allowed");
}


if(aggg >100 || aggg < 0){
    console.log("error");
}
else if (aggg >= 90){
    console.log("excellent");
}
else if (aggg >= 50){
    console.log("paass");
}
else{
    console.log("fail");
}






// for

for(let i = 1;i <= 20; i++){
    console.log(i);
}
for(let i = 10; i <=50; i++){
    if (i%2 == 0){
        console.log(i);
    }
}
let summ = 0;
for(let i = 0; i <=50; i ++){
    summ += i;
}
console.log(summ);

for(let i = 1; i <=10; i++){
    console.log(i*7);
}
let fruitss = ["apple", "banana", "cherry", "date"];
for(let i = 0;i<fruitss.length; ){
    console.log(i);
}

