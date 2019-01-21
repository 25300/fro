let index = 0;
let main = document.querySelector('.content');
let link = document.querySelectorAll('.nav__item');
let linkArray = [];
const arrowLeft = document.querySelector('.nav__arrow--left');
const arrowRight = document.querySelector('.nav__arrow--right');

// NAV
link.forEach( (item) => {
    item.addEventListener('click', (e) => {
       index = linkArray.indexOf(item);
       activate(index);
    });
   linkArray.push(item);
});

const activate = (num) => {
    // arrowVisible();

    // Remove classname
    linkArray.forEach( (item) => {
        item.classList.remove('nav__item--active');
    });

    // Add classname
    linkArray[num].classList.add('nav__item--active');

    // Change style
    main.style.marginLeft = (-100*num) + 'vw';
};

// ARROWS
const next = () => {
    if (index < linkArray.length - 1) {
        index++;
    } else {
        index = 0;
    }
    activate(index);
};

const back = () => {
    if (index > 0) {
        index--;
    } else {
        index = linkArray.length - 1;
    }
    activate(index);
};

// Ik heb deze eruit gelaten zodat alles op de zelfde manier werkt.
// const arrowVisible = () => {
//     if (index === 0) {
//         arrowLeft.style.display = 'none';
//     } else {
//         arrowLeft.style.display = 'block';
//     }
//
//     if (index === linkArray.length - 1) {
//         arrowRight.style.display = 'none';
//     } else {
//         arrowRight.style.display = 'block';
//     }
// };

arrowLeft.addEventListener('click', back);
arrowRight.addEventListener('click', next);

// KEYBOARD
document.addEventListener('keyup', (e) => {
   if (e.keyCode === 39 || e.keyCode === 32) {
       next();
   } else if (e.keyCode === 37) {
       back();
   }
});

// SWIPE
document.addEventListener('swiped-left', next);
document.addEventListener('swiped-right', back);

activate(index);
