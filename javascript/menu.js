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

    //edits the margins so the menu can slide back and forth on button click
    if (header != null ) {
        header.classList.add('shift');
    }

    main.classList.add('shift');
    footer.classList.add('shift');
    closebar.style.display = "block";

//below is some user instance handling code to check if the user chnages thier orination of their phone while the menu has been opened 
// which does break the webpage
//I used the matchmedia to check via media query and the change event to decet changes in the window vs the query
const portrait = window.matchMedia("(orientation: portrait)");

portrait.addEventListener("change", (e) => {    
    //fixes the margins according to the orientation
    if (!e.matches) {

        if (header != null ) {
            header.classList.remove('shift');
        }

        // in both cases i have it log the mode for testing purpose
        console.log("landscape mode");
        main.classList.remove('shift');
        footer.classList.remove('shift');
    } else {

        if (header != null ) {
            header.classList.add('shift');
        }

        console.log("portait mode");
        main.classList.add('shift');
        footer.classList.add('shift');
    }

});

//this code is same as a above a user istnace handling code but this time it 
// checks wether someone resises their window or switches from restone down to maximise and vise vera
//as the menu is only displayed in screen sizes of less than 768px that is all i need to check.
const resize = window.matchMedia("(max-width: 768px)");

resize.addEventListener("change", (e) => {
    //fixes the margins according to the new window size
    if (e.matches) {

            if (header != null ) {
                header.classList.add('shift');
            }

        // in both cases i have it log the mode for testing purpose
        console.log("small screen mode");
        main.classList.add("shift");
        footer.classList.add("shift");
        closebar.style.display = "block";
    } else {

            if (header != null ) {
                header.classList.remove('shift');
            }

        console.log("large screen mode");
        main.classList.remove("shift");
        footer.classList.remove("shift");
        closebar.style.display = "none";
    }

});

});

//closes menu when close menu button is clicked
closemenu.addEventListener('click',() => {
    sidebar.classList.remove('open');
    menu.classList.remove('close');

     //edits the margins so the menu can slide back and forth on button click
    if (header != null ) {
        header.classList.remove('shift');
    }

    main.classList.remove('shift');
    footer.classList.remove('shift');
    closebar.style.display = "none";
});
