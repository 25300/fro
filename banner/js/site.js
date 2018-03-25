let alisha = document.querySelector('.banner__alisha');
let van = document.querySelector('.banner__van');
let caspel = document.querySelector('.banner__caspel');
let nl = document.querySelector('.banner__nl');
let item = document.querySelector('.banner__item');
let wiggle = document.querySelector('.banner__wiggle');
let layer1 = document.querySelector('.banner__layer-one');
let babe = document.querySelector('.banner__babe');
let html = document.querySelector('.banner__html');
let css = document.querySelector('.banner__css');
let js = document.querySelector('.banner__js');

const animate = () => {
    setTimeout( () => { alisha.classList.remove('banner--off')}, 250);
    setTimeout( () => { van.classList.remove('banner--off')}, 500);
    setTimeout( () => { caspel.classList.remove('banner--off')}, 750);
    setTimeout( () => { nl.classList.remove('banner--off')}, 1000);
    setTimeout( () => { item.classList.remove('banner--off')}, 1250);
    setTimeout( () => { wiggle.classList.add('banner--wiggle')}, 1250);
    setTimeout( () => { layer1.classList.add('banner--off')}, 2000);

    // layer 2
    setTimeout( () => { babe.classList.add('banner--off')}, 2250);
    setTimeout( () => { html.classList.remove('banner--off')}, 2500);
    setTimeout( () => { css.classList.remove('banner--off')}, 2750);
    setTimeout( () => { js.classList.remove('banner--off')}, 3000);

    // back to start
    setTimeout( () => { setBack1() }, 3500);
    setTimeout( () => { layer1.classList.remove('banner--off')}, 4000);

    // back to layer 2
    setTimeout( () => {setBack2()}, 5500);
};

const setBack1 = () => {
    alisha.classList.add('banner--off');
    van.classList.add('banner--off');
    caspel.classList.add('banner--off');
    nl.classList.add('banner--off');
    item.classList.add('banner--off');
    wiggle.classList.remove('banner--wiggle');
};

const setBack2 = () => {
    babe.classList.remove('banner--off');
    html.classList.add('banner--off');
    css.classList.add('banner--off');
    js.classList.add('banner--off')
};

// start animation
animate();

// repeat animation
setInterval( () => animate(), 4000);

// banner link

const goToLink = () => window.open('http://25300.hosts.ma-cloud.nl/ma/bewijzenmap/periode1.1/proj/alishavancaspel/', '_blank');
document.querySelector('.banner').addEventListener('click', goToLink);
