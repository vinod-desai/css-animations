const hamBurgerMenu = document.getElementsByClassName('hamburgerMenu')[0];

hamBurgerMenu.addEventListener('click', function(){
    this.classList.toggle('change');
    document.getElementById("sff-nav").classList.toggle('show');
})