const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer-home');
const closebar = document.querySelector('.closebar');
const closemenu = document.querySelector('.closelink');

menu.addEventListener('click', () => {
    sidebar.classList.add('open');
    menu.classList.add('close');
    header.classList.add('shift');
    main.classList.add('shift');
    footer.classList.add('shift');
    closebar.style.display = "block";
})

closemenu.addEventListener('click',() => {
    sidebar.classList.remove('open');
    menu.classList.remove('close');
    header.classList.remove('shift');
    main.classList.remove('shift');
    footer.classList.remove('shift');
    closebar.style.display = "none";
})
