var b=0;

function nem1(val){
    if(val=="*"||val=="+"||val=="/"||val=="-"){}
    else{
        if(b==1){
            c();
        }
    }
    var x=document.getElementById("affiche").innerHTML+=val;
    b=0;
}

function concat(){
    var a=document.getElementById("affiche").innerHTML;
    document.getElementById("affiche").innerHTML=eval(a);
    b=1;
}

function c(){
    document.getElementById("affiche").innerHTML='';
}

function moin(){
    var a=document.getElementById("affiche").innerHTML;
    a=-a;
    document.getElementById("affiche").innerHTML=a;
}

function subs(){
    var a=document.getElementById("affiche").innerHTML;
    document.getElementById("affiche").innerHTML=a.substr(0, a.length-1);
}

function inverse(){
    var a=document.getElementById("affiche").innerHTML;
    a=1/a;
    document.getElementById("affiche").innerHTML=a;
}

function carre(){
    var a=document.getElementById("affiche").innerHTML;
    a=a*a;
    document.getElementById("affiche").innerHTML=a;
}

function racine(){
    var a=document.getElementById("affiche").innerHTML;
    document.getElementById("affiche").innerHTML=Math.sqrt(a,2);
}

