let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");
let img9 = document.getElementById("img9");

function pvp(){
    let mode = document.getElementById("mode");
    mode.innerHTML = "Player vs Player"
    reset();

    let play = document.getElementById("");
    console.log(play);
}

function pvc(){
    let mode = document.getElementById("mode");
    mode.innerHTML = "Player vs COM"
    reset();
}

function reset(){
    img1.src = '';
    img2.src = '';
    img3.src = '';
    img4.src = '';
    img5.src = '';
    img6.src = '';
    img7.src = '';
    img8.src = '';
    img9.src = '';
}



function clicked1(){
    console.log('box 1');
    img1.src = 'img/x.png';
}
function clicked2(){
    console.log("Box 2");
    img2.src = 'img/o.png';
}
function clicked3(){
    console.log('box 3');
    img3.src = 'img/o.png';
}
function clicked4(){
    console.log('box 4');
    img4.src = 'img/o.png';
}
function clicked5(){
    console.log("Box 5");
    img5.src = 'img/o.png';
}
function clicked6(){
    console.log('box 6');
    img6.src = 'img/o.png';
}
function clicked7(){
    console.log('box 7');
    img7.src = 'img/o.png';
}
function clicked8(){
    console.log('box 8');
    img8.src = 'img/o.png';
}
function clicked9(){
    console.log('box 9');
    img9.src = 'img/o.png';
}


