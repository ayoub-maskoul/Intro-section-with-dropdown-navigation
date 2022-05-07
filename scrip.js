


// Add event links
var links1 = document.querySelector('.lin1');
var links2 = document.querySelector('.lin2');
var mainlinks= document.querySelector('.main');
var mainlinks2= document.querySelector('.main2');
var arrow1 = document.querySelector('.arr-up');
var arrow2 = document.querySelector('.arr-down');
var arrow3 = document.querySelector('.arr-up2');
var arrow4 = document.querySelector('.arr-down2');

links1.onclick = function (e){
    arrow1.classList.toggle('arr-open-1');
    arrow2.classList.toggle('arr-open-1');
    mainlinks.classList.toggle('open-links')
};
links2.onclick = function (e){
    arrow3.classList.toggle('arr-open-1');
    arrow4.classList.toggle('arr-open-1');
    mainlinks2.classList.toggle('open-links')
};
// Add event menu
var mune1 = document.querySelector(".mn")
var mune2 =document.querySelector('.mncls')
mune1.onclick = function (e){
    document.querySelector(".nav-links").classList.toggle('mobil-btn')
    document.querySelector(".nav-links").classList.toggle('lin-btn')
    document.querySelector('.mncls').classList.toggle('cls')
    document.querySelector('.mncls').classList.toggle('mn')
    mune1.classList.toggle('cls')
    mune1.classList.toggle('mn')
    document.body.classList.toggle('color')
}
mune2.onclick = function (e){
    document.querySelector(".nav-links").classList.toggle('mobil-btn')
    document.querySelector(".nav-links").classList.toggle('lin-btn')
    document.querySelector('.mncls').classList.toggle('cls')
    document.querySelector('.mncls').classList.toggle('mn')
    mune1.classList.toggle('cls')
    mune1.classList.toggle('mn')
    document.body.classList.toggle('color')
}