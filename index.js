counth=0
countg=0
let scoreH=document.getElementById("score-h")
let scoreG=document.getElementById("score-g")
function oneh(){
    counth+=1
    scoreH.textContent=counth
}

function twoh(){
    counth+=2
    scoreH.textContent=counth
}
function threeh(){
    counth+=3
    scoreH.textContent=counthg
}
function oneg(){
    countg+=1
    scoreG.textContent=countg
}

function twog(){
    countg+=2
    scoreG.textContent=countg
}
function threeg(){
    countg+=3
    scoreG.textContent=countg
}
function reset(){
    scoreH.textContent=0
    scoreG.textContent=0
}