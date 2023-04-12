let fornavn = prompt("Indtast dit fornavn!");
console.log("DJensit fornavn er: " + fornavn)


let first = prompt("Indtast første tal")

let second = prompt("Indtast et andet tal")


if(first > second){
    alert("du ik så køn og nåår ja, det højeste tal er: " +  first + " btw du stadig grim")
}

else if(second > first){
    alert("du ik så køn og nåår ja, det højeste tal er: " +  second + " btw du stadig grim")
}


let et = prompt("Indtast første tal")
let to = prompt("Indtast et andet tal")
let tre = prompt("Indtast et tredje tal")


if(et < to & et < tre){
    alert("du ik så køn og nåår ja, det laveste tal er: " +  et + " btw du stadig grim")
}

else if(to < et & to < tre){
    alert("du ik så køn og nåår ja, det laveste tal er: " +  to + " btw du stadig grim")
}

else if(tre < et & tre < to){
    alert("du ik så køn og nåår ja, det laveste tal er: " +  tre + " btw du stadig grim")
}


let tast = prompt("Indtast et tal")
let lig = tast%2

if(lig==0){
    alert("Dit indtastede tal er lige")
}

else{
    alert("Dit indtastede tal er ikke lige")
}


let answer = prompt("Indtast hvor mange antal rigtige svar så du kan tjekke karakter, husk at max er 80 og minimum er 0")

if(answer = 0){
    alert("Du ville få -3 ")
}

else if(answer >= 1 && answer <= 10){
    alert("Du ville få 00")
}

else if(answer >= 11 && answer <= 20){
    alert("Du ville få 02")
}

else if(answer >= 21 && answer <= 40){
    alert("Du ville få 4")
}

else if(answer >= 41 && answer <= 55){
    alert("Du ville få 7")
}

else if(answer >= 56 && answer <= 70){
    alert("Du ville få 10")
}

else if(answer >= 71 && answer <= 80){
    alert("Du ville få 12")
}

else if (answer >= 81 && answer <= -1){
    alert("Du godt nok dum hva!? Jeg sagde seriøst ikke mindre end 0 og ikke mere end 80. Din goddamn Spade")
}


let x = prompt("Skriv lige et tal")

alert("So you know, dit tal ganget med sig selv er ;) det her: " (x * x))
alert(Math.sqrt(x))
alert(Math.pow(x,x))

