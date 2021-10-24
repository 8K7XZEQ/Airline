// // Create an object:
// class Airline{
// constructor(ci,sl,dl){
// this.ci=ci,
// this.sl=sl,
// this.dl=dl};
// get gci() {return this.ci};
// get gsl() {return this.sl};
// get gdl() {return this.dl};
// set next(value) {let  k=(this.ci==this.sl.length-1) ?  0: this.ci++;
//     this.gci(k);  };
// set gci(value) {this.ci=value};
// set gsl(value) {this.sl=value};
// set gdl(value) {this.dl=value};
// add (value) {if (value.length>0) this.gsl.push(value)};
// delcur() { if (this.sl[this.gci])
//      { let t=this.sl.splice(this.sl[this.gci],1); this.dl.push("x  "+ t); } ;
//      }
// }
//////////////////////////////////////////
let init=function(){
    let sl=["Baku-Istanbul", "Baku-Tbilisi", "Baku-Moscow", "Kiev-Baku", "Beijing-Baku"];
     return sl;
}
///////////////////////////////////
function sil()
{if (ci<sl.length) {
       let t=sl.splice(ci,1); dl.push("x  "+ t); 
            console.log(dl);
            
}
}
///////////////////////////////////////////

function addVal()
{
    let g=document.getElementById("myInput").value;
    if (sl.indexOf(g)==-1)    sl.push(g);

    console.log(g)
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


 function refresh1() {
         document.getElementById("tre").innerHTML=(sl[ci]!=undefined) ? sl[ci]:"";
           
 }

 function refresh2() {
    let cl=[...sl,...dl];
    document.getElementById("myUL").innerHTML=reysad(cl);
      
}

function refresh3() {
    if (ci==sl.length) {ci=-1};
    ci+=1; 
    document.getElementById("tre").innerHTML=(sl[ci]!=undefined) ? sl[ci]:"...";

   
}
////////////////////////


////////////////////////////////////

let  sl=init();
let dl=[];
var ci=0;

//var i=myair
//let mysl=[...myair.gsl,...myair.gdl];

console.log(sl);
document.getElementById("myUL").innerHTML=reysad(sl);
document.getElementById("tre").innerHTML=sl[ci];