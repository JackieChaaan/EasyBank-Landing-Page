var menu = document.getElementById("menu");
var close =document.getElementById("close");
var mobileNav =document.getElementById("mobie-nav");


menu.addEventListener('click',()=>{
    menu.style.display ='none';
    close.style.display ='block';
    mobileNav.style.display='block';
});

close.addEventListener('click',()=>{
    menu.style.display ='block';
    close.style.display ='none';
    mobileNav.style.display='none';
});