function getStyle(element, name){
    return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

let sandwichMenu = document.getElementsByClassName("sandwich-menu-icon")[0];
sandwichMenu.addEventListener('click', function(){
    let navMenu = document.querySelector('body > header > nav');
    
    if(getStyle(navMenu, 'display') == 'block'){
        navMenu.style.display = 'none';
    }else{
        navMenu.style.display = 'block';
    }

})