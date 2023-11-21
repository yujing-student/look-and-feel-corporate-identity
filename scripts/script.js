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
    // alert("druk op oké om naar de tabel te gaan emt daarin het boeteoverzicht.");
    document.querySelector(".button-boeken").onclick = function openlink() {
        location.href = "boete.index.html";
        // https://www.w3schools.com/jsref/met_win_alert.asp
    }
}

function showdivresults() {/*carousel laten zien*/

    let divresults = document.querySelector(".showresults");
    // seleteer de .showresylts div

    let displaydivresults = window.getComputedStyle(divresults).display;
    //     https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    //     https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
    //met deze code wordt alle css proporties of een element en de inhoud ervan weergegeven

    //
    if (displaydivresults === "none") {
        divresults.style.display = "grid";
        //     laat re
    }
    // else {
    //     divresults.style.display = "none";
    // }
}

function filtershow() {
    let formresults = document.querySelector(".collaps-open-funtion-boeken");
    // formresults.style.display = "none"; // verbeg formulier

    let button = document.querySelector(".collapsible-boeken"); // selecteer de button
    button.onclick = function () { // klik je op de button dat komt deze if else
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // laat het formulier zien of verbeg het
        } else {
            formresults.style.display = "none";
        }
    }
}

function filtershow_secod() {
    let formresults = document.querySelector(".collaps-open-funtion-boeken_second");

    let button = document.querySelector(".collapsible-boeken_second"); // selecteer de button
    button.onclick = function () { // klik je op de button dat komt deze if else
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // laat het formulier zien of verbeg het
        } else {
            formresults.style.display = "none";
        }
    }
}

function filtershow_third() {
    let formresults = document.querySelector(".collaps-open-funtion-boeken_third");

    let button = document.querySelector(".collapsible-boeken_third"); // selecteer de button
    button.onclick = function () { // klik je op de button dat komt deze if else
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // laat het formulier zien of verbeg het
        } else {
            formresults.style.display = "none";
        }
    }
}


function searchfunction() {
    // https://www.w3schools.com/howto/howto_js_filter_lists.asp bron waar ik code gekopieerd heb
    let input, filter, ul, li,booktitle,list_books, a, i, txtValue;
    input = document.getElementById('input_searchfunciton');
    // ul = document.getElementsByClassName("myUL");
    list_books = document.querySelectorAll('.hide-li-sign')
    filter = input.value.toUpperCase();//controleren hoofdletters


    booktitle = document.querySelectorAll('.title-book-link')



    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < list_books.length; i++) {
        a = list_books[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            list_books[i].style.display = "";
        } else {
            list_books[i].style.display = "none";
        }
    }

    let rest = document.querySelector('.reset');

    rest.addEventListener('click', function () {
        // Selecteer alle li-elementen
        for (let i = 0; i < list_books.length; i++) {
            list_books[i].style.display = "grid"; //laat de resultaten weer zien
        }
    });
}




