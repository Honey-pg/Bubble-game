function makebubble(){
var clutter = "";
 for(var i=1; i<=184; i++){
    var rn= Math.floor(Math.random()*10)
    clutter +=`<div class="gola">${rn}</div>`
 }
 document.querySelector("#pbtm").innerHTML = clutter
}
var timer=10;
var score= 0;
var hitrn=0;
function runtimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#tim").textContent=timer;
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
    }
    },1000);
}

function newhit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent=hitrn;
}

function incscore(){
    score += 10;
    document.querySelector("#newsc").textContent = score;
}

document.querySelector("#pbtm").
addEventListener("click",function(dets){
clickednum=Number(dets.target.textContent);
if(clickednum===hitrn){
    incscore();
    makebubble();
    newhit();
}
});

runtimer();
makebubble();
newhit();
