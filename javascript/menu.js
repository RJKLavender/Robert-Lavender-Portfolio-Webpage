//Menu button to open and close menu in mobile mode

//Finds all the relavent divs for the listener functions
const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const closebar = document.querySelector('.closebar');
const closemenu = document.querySelector('.closelink');

//adds menu when hamburger button is clicked
menu.addEventListener('click', () => {
    sidebar.classList.add('open');
    menu.classList.add('close');

    if (header != null ) {
        header.classList.add('shift');
    }

    main.classList.add('shift');
    footer.classList.add('shift');
    closebar.style.display = "block";
});

//closes menu when close menu button is clicked
closemenu.addEventListener('click',() => {
    sidebar.classList.remove('open');
    menu.classList.remove('close');

    if (header != null ) {
        header.classList.remove('shift');
    }

    main.classList.remove('shift');
    footer.classList.remove('shift');
    closebar.style.display = "none";
});
