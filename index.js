const btnHamburger = document.getElementById('navButton');
const btnClose = document.querySelector('.closeHamburger');
const navigation = document.getElementById('navbar');
var isClicked = true; 

btnHamburger.addEventListener('click', ()=>{
    if(isClicked){
        navigation.style.display = 'block';   
        isClicked = false;
    }
    else {
        navigation.style.display = 'none';
        isClicked = true;
    }
});