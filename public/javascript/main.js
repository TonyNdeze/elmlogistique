document.addEventListener('DOMContentLoaded', event =>{

});

document.addEventListener('click', event =>{
    const isMenuDropdownButton= event.target.matches("[data-menudropdown-button]");
    const isDropdownButton =  event.target.matches("[data-dropdown-button]");
    
    let currentMenuDropdownIcon = document.querySelectorAll("[data-menudropdown-button]");
    let menuWrap = document.querySelectorAll("[data-navwrap]")[0];
    let currentDropdown;
    let subMenuWrap;
    let currentDropdownToggleIcon = event.target.querySelectorAll("[data-dropdown-button-toggler]");
    let icon = currentMenuDropdownIcon[0].classList;

    if (!isMenuDropdownButton && !isDropdownButton && !menuWrap.classList.contains('hidden')){
            menuWrap.classList.add('hidden');
            icon.replace("fa-close", "fa-bars");
            document.querySelectorAll('[data-dropdown]').classList.remove('activeDropdown');
            

    };
// event.target.closest('[data-dropdown]') != null
 if(isMenuDropdownButton){
        menuWrap.classList.toggle("hidden");
    if(!menuWrap.classList.contains('hidden')){
        icon.replace("fa-bars","fa-close");
    }
    else if(menuWrap.classList.contains('hidden')){
        icon.replace("fa-close","fa-bars");
    }
    
    }


    if(isDropdownButton){
        event.target.closest('[data-dropdown]').classList.add('activeDropdown');
        currentDropdown = document.querySelectorAll('[data-dropdown].activeDropdown');
        currentDropdown.forEach(dropdown =>{
            dropdown.children[1].classList.toggle('hidden');
        });

    }
    });