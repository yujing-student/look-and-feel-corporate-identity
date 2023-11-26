const body = document.querySelector("body"),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});

/*hierboven moet straks weer uitcommented zijn*/
function boeken() {
    let button = document.querySelector(".button-boeken");
    button.addEventListener('click', function() {
        window.location.href = "boete.index.html";
    });

}
boeken();

function showdivresults() {/*carousel laten zien*/

    let divresults = document.querySelector(".showresults");
    // seleteer de .showresylts div
    let button = document.querySelector(".i--search");
    button.addEventListener('click', function() {
        let displaydivresults = window.getComputedStyle(divresults).display;
        //     https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
        //     https://www.w3schools.com/jsref/jsrefgetcomputedstyle.asp
        //met deze code wordt alle css proporties of een element en de inhoud ervan weergegeven
        if (displaydivresults === "none") {
            divresults.style.display = "grid";
        }
    });
    // //     https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    // //     https://www.w3schools.com/jsref/jsrefgetcomputedstyle.asp
    // //met deze code wordt alle css proporties of een element en de inhoud ervan weergegeven

}
 showdivresults();
function filtershow() {
    let formresults = document.querySelector(".filter__collaps-open-function-boeken");
    formresults.style.transition = "opacity 0.1s ease-out";
    let button = document.querySelector(".filter__collapsible-boeken"); // select the button

    let formresults_seconds = document.querySelector(".filter__collaps-open-funtion-boeken-second");
    formresults_seconds.style.transition = "opacity 0.1s ease-out";
    let button_seconds = document.querySelector(".filter__collapsible-boeken-second"); // selecteer de button


    let formresults_third = document.querySelector(".filter__collaps-open-funtion-boeken-third");
    formresults_third.style.transition = "opacity 0.1s ease-out";
    let button_third = document.querySelector(".filter__collapsible-boeken-third"); // selecteer de button

    button.addEventListener('click', function () {
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // show the form
        } else {
            formresults.style.display = "none"; // hide the form
        }
    });
    button_seconds.addEventListener('click', function () {
        if (formresults_seconds.style.display === "none") {
            formresults_seconds.style.display = "block"; // show the form
        } else {
            formresults_seconds.style.display = "none"; // hide the form
        }
    });
    button_third.addEventListener('click', function () {
        if (formresults_third.style.display === "none") {
            formresults_third.style.display = "block"; // show the form
        } else {
            formresults_third.style.display = "none"; // hide the form
        }
    });


}

filtershow();



function searchfunction() {
    // https://www.w3schools.com/howto/howto_js_filter_lists.asp bron waar ik code gekopieerd heb
    let input, filter, listbooks, a, i, txtValue;
    input = document.getElementById('form__input-searchfunciton');
    listbooks = document.querySelectorAll('.hide-li-sign')
    filter = input.value.toUpperCase();//controleren hoofdletters
    let button = document.querySelector('.i--search');


    // forloop waar i het boeknummer is en alle boeken nagelopen worden
    button.addEventListener('click', function (){
        for (i = 0; i < listbooks.length; i++) {
            a = listbooks[i].getElementsByTagName("a")[0];/*begin bij de1ste a href*/

            txtValue = a.textContent || a.innerText;/*checken of een letter of woord erin zit*/

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                listbooks[i].style.display = "";/*indien gevonden laat het resultaat zien*/
            } else {
                listbooks[i].style.display = "none";
            }
        }
    });


    let rest = document.querySelector('.reset');

    rest.addEventListener('click', function () {
        // Selecteer alle li-elementen met hide lis sign ofwel listbooks
        for (let i = 0; i < listbooks.length; i++) {
            listbooks[i].style.display = "block"; //laat de resultaten weer zien
        }
    });
}
listbooks = document.querySelectorAll('.hide-li-sign')

let buttonfilter = document.querySelector('.filter__filterbutton');
let checkbox_array = [];/*https://www.w3schools.com/jsref/jsref_push.asp*/
let books_array = [];/*https://www.w3schools.com/jsref/jsref_push.asp*/
let books = document.querySelectorAll('.div-container-image');/*hier staat ook de data-filter in*/
let checkbox = document.querySelectorAll('.filter__input-checkboxes');/*https://www.w3schools.com/jsref/prop_checkbox_checked.asp*/
let datafiltersport = document.querySelectorAll('[data-filter="sport"]');/*https://stackoverflow.com/questions/22699072/using-data-attribute-as-a-selector-to-filter-elements*/
let dataid = document.querySelector('#onderwerp-sport,#onderwerp-cultuur,#onderwerp-kunst,#onderwerp-mode')
buttonfilter.addEventListener('click', function () {

    // books.forEach();

    books.forEach((book) => {


        checkbox.forEach(checkBoxElement => {


            if (checkBoxElement.checked) {


                checkbox_array.push(checkBoxElement);
                books_array.push(book);


                if (checkBoxElement === datafiltersport) {

                    console.log(books_array);
                    console.log(checkbox_array);
                    book.style.display = 'block';

                } else {

                    // If it's not, hide the book
                    book.style.display = 'none';
                }
            }
        });
    });


});


let rest = document.querySelector('.reset');

rest.addEventListener('click', function () {
    // Selecteer alle li-elementen met hide lis sign ofwel listbooks
    for (let i = 0; i < listbooks.length; i++) {
        listbooks[i].style.display = "grid"; //laat de resultaten weer zien
    }
});
// todo debuggen javascirpt code https://www.jetbrains.com/help/webstorm/debugging-javascript-in-chrome.html#debugging_js_on_built_in_server_example
// je debug de html en zet daarvoor de breakpoints in de js file
