
// Import book object
import books from "./books.js";

// Constant variables for imgs on landing page 
const foabImg = document.getElementById("explore-img-FOAB");
const losImg = document.getElementById("explore-img-LOS");

// Constant variable for main section of landing page
const mainLanding = document.getElementById("main-grid-explore");

// Constant variable for explore nav button 
const exploreNav = document.getElementById("explore");

// Constant variable for original HTML of explore page 
const exploreHTML = document.getElementById("main-grid-explore").innerHTML;

// Function template FOAB HTML
function FOABTemplate(book) {
    return `
      <div id="main-grid-foab">
        <h1 id="FOAB-title">${book.title}</h1>
        <div id="nyco-img-holder">
            ${book.img1HTML}
        </div>
        <div id="alias-img-holder">
            ${book.img2HTML}
        </div>

        <div id="foab-mainp1">
            <p id="foabmain1">
                ${book.mainp1}
            </p>
        </div>

        <div id="foab-img3-holder">
            ${book.img3HTML}
        </div>

        <div id="foab-mainp2">
            <p id="foabmain2">
                ${book.mainp2}
            </p>
        </div>

        <div id="foab-mainp3">
            <p id="foabmain3">
                ${book.mainp3}
            </p>
        </div>
   </div>`
}


// Function temple LOS HTML
function LOSTemplate(book) {
    return `
    <div id="main-grid-LOS">
        <h1 id="LOS-title">${book.title}</h1>
        <div id="octavia-img-holder">
            ${book.img1HTML}
        </div>
        <div id="main-male-img-holder">
            ${book.img2HTML}
        </div>

        <div id="los-mainp1">
            <p id="losmain1">
                ${book.mainp1}
            </p>
        </div>

        <div id="los-img3-holder">
            ${book.img3HTML}
        </div>

        <div id="los-mainp2">
            <p id="losmain2">
               ${book.mainp2}
            </p>
        </div>
   </div>`
}


// Function to clear current page HTML to render new HTML
function clearHTML(event) {
    let mainSection = document.querySelector("main");
    mainSection.innerHTML = "";
}

function renderBookFOAb(book) {
    const bookContainer = document.getElementById("main-grid-explore");
    const bookHTMLfoab = FOABTemplate(book); // Directly use the template function
    bookContainer.innerHTML = bookHTMLfoab;
}

function renderBookLOS(book) {
    const bookContainer = document.getElementById("main-grid-explore");
    const bookHTMLlos = LOSTemplate(book); // Directly use the template function
    bookContainer.innerHTML = bookHTMLlos;
}



function eventHandlerFOAB(event) {
    event.preventDefault();
    // Clear current html
    mainLanding.innerHTML = "";
    let book = books.find((book) => book.bookId === 2);
    renderBookLOS(book);

}


function eventHandlerLOS(event) {
    event.preventDefault();
    // Clear current html
    mainLanding.innerHTML = "";
    let book = books.find((book) => book.bookId === 1);
    renderBookLOS(book);

}

function returnExploreHTML(event) {
    event.preventDefault();
    // Add original HTML back
    mainLanding.innerHTML = exploreHTML;
}

foabImg.addEventListener("click", eventHandlerFOAB);
losImg.addEventListener("click", eventHandlerLOS);
exploreNav.addEventListener("click", returnExploreHTML);

