// Create an object:
class Airline{
constructor(ci,gl,sl,dl){
this.ci=ci,
this.cv=sl[ci],
this.gl=gl,
this.sl=sl,
this.dl=dl};
get alsl() {return this.sl};
get alci() {return this.ci};
get alcv() {return this.cv};
get aldl() {return this.dl};
set verci(value) {this.ci=value};
shownext() {let k=(this.ci==this.sl.length-1)? 0: this.ci+1; this.ci=k;this.cv=this.sl[k]; };
add (value) {if (value.length>0) this.sl.push(value)}
udali() {let t=this.sl.splice(this.cv,1); this.dl.push("x  "+ t)}
}

///////////////////////////////////
function sil()
{   var x=myair.alcv;
    if (x) {
        myair.udali(x);
        
           }
            console.log(myair.aldl);
}
///////////////////////////////////////////

function add()
{
    let g=document.getElementById("myInput").innerText;
    if (g) {
        myair.add(g);}
}
//////////////////////////////////////////
function reysad(val) {
    let header = "All flights";
    let tags = val;

    let html = `<h2>${header}</h2><ul style="list-style-type:none">`;

    for (const x of tags) {
        html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    return html;
}
 function refresh() {
     document.getElementById("tre").innerHTML=myair.alcv;
     let mysl=[...myair.alsl,...myair.aldl];
     document.getElementById("myUL").innerHTML=reysad(mysl);
     document.getElementById("myInput").innerHTML="";
     myair.shownext();
 }
////////////////////////
let init=function(){
let GL=["Baku-Istanbul", "Baku-Tbilisi", "Baku-Moscow", "Kiev-Baku", "Beijing-Baku"];
let SL=GL;
let DL=[];
let CI=0;
let CV=GL[CI];
let myair2= new Airline(CI,GL,SL,DL);
return myair2};

////////////////////////////////////

let myair=init();
let mysl=[...myair.alsl,...myair.aldl];

console.log(mysl);
document.getElementById("myUL").innerHTML=reysad(mysl);
document.getElementById("tre").innerHTML=myair.cv;