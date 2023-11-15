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




function searchfunction() {
    let input, filter, ul, li = [], booktitle, txtValue;
    input = document.getElementById("searchfunciton");
    filter = input.value.toUpperCase();/*hoofdlettergevoeligheid*/
    ul = document.getElementsByClassName("myUL");

    for (let i = 0; i < ul.length; i++) {
        let all_ul = ul[i];/*verzamleing door de 2 ul lijsten */
        let alle_li = all_ul.getElementsByTagName("li");/*alle li itemsn*/

        for (let j = 0; j < alle_li.length; j++) {/*loop door de li items*/
            booktitle = alle_li[j].getElementsByClassName("booktitle")[0];/*haal eerste element op van de li items*/
            txtValue = booktitle.textContent || booktitle.innerText;/*txt is de booktitle met de check op de naam of de andere tekst*/
            // https://developer.mozilla.org/en-US/docs/web/api/node/textcontent https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                alle_li[j].style.display = "";
            } else {
                alle_li[j].style.display = "none";
            }
            li.push(alle_li[j]); // Voeg het li-element toe aan de li-array
        }
    }

    let rest = document.querySelector('.reset');

    rest.addEventListener('click', function () {
        // Selecteer alle li-elementen
        for (let i = 0; i < li.length; i++) {
            li[i].style.display = "grid"; //laat de resultaten weer zien
        }
    });
}

