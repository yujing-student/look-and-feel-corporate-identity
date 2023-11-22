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
        // https://www.w3schools.com/jsref/metwinalert.asp
    }
}

function showdivresults() {/*carousel laten zien*/

    let divresults = document.querySelector(".showresults");
    // seleteer de .showresylts div

    let displaydivresults = window.getComputedStyle(divresults).display;
    //     https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    //     https://www.w3schools.com/jsref/jsrefgetcomputedstyle.asp
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
    formresults.style.transition = "opacity 0.1s ease-out";
    // formresults.style.display = "none"; // verbeg formulier
    let button = document.querySelector(".collapsible-boeken"); // select the button
    button.addEventListener('click',function(){
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // show the form
        } else {
            formresults.style.display = "none"; // hide the form
        }
    });



}
filtershow();
function filtershowsecond() {
    let formresults = document.querySelector(".collaps-open-funtion-boeken-second");
    formresults.style.transition = "opacity 0.1s ease-out";
    let button = document.querySelector(".collapsible-boeken-second"); // selecteer de button
    button.addEventListener('click',function (){
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // show the form
        } else {
            formresults.style.display = "none"; // hide the form
        }
    });
}
filtershowsecond();
function filtershowthird() {
    let formresults = document.querySelector(".collaps-open-funtion-boeken-third");
    formresults.style.transition = "opacity 0.1s ease-out";
    let button = document.querySelector(".collapsible-boeken-third"); // selecteer de button
    button.onclick = function () { // klik je op de button dat komt deze if else
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // laat het formulier zien of verbeg het
        } else {
            formresults.style.display = "none";
        }
    }
}
filtershowthird();

function searchfunction() {
    // https://www.w3schools.com/howto/howtojsfilterlists.asp bron waar ik code gekopieerd heb
    let input, filter, ul, li,booktitle,listbooks, a, i, txtValue;
    input = document.getElementById('input-searchfunciton');
    // ul = document.getElementsByClassName("myUL");
    listbooks = document.querySelectorAll('.hide-li-sign')
    filter = input.value.toUpperCase();//controleren hoofdletters


    booktitle = document.querySelectorAll('.title-book-link')



    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < listbooks.length; i++) {
        a = listbooks[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            listbooks[i].style.display = "";
        } else {
            listbooks[i].style.display = "none";
        }
    }

    let rest = document.querySelector('.reset');

    rest.addEventListener('click', function () {
        // Selecteer alle li-elementen
        for (let i = 0; i < listbooks.length; i++) {
            listbooks[i].style.display = "grid"; //laat de resultaten weer zien
        }
    });
}




