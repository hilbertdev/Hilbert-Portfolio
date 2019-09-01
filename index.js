const btnHamburger = document.getElementById('navButton');
const btnClose = document.querySelector('.closeHamburger');
const navigation = document.getElementById('navbar');
const scroll = document.getElementById('cog');
var isClicked = true; 

scroll.addEventListener('click', ()=>{
    if(isClicked){
        scroll.classList.add('fa-spin');
        navigation.style.display = 'contents'; 
        isClicked = false;
    }
    else {
        navigation.style.display = 'none';
        scroll.classList.remove('fa-spin');
        isClicked = true;
    }
});