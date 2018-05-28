let submenu = document.querySelectorAll('.submenu > a');
console.log(submenu);

for (i = 0; i < submenu.length; i++) {
    submenu[i].addEventListener('click', (e)=> e.preventDefault());
}