// Target menu button as global variable 
const menuButton = document.querySelector("#button");


// Target gallery 
const gallery = document.querySelector(".gallery");

// Function to toggle 'hide' class for menuButton:
function toggleMenu() {
    // Target menu in HTML
    const menu = document.querySelector("#menu");
    console.log("Button clicked!"); 
    // Toggle adding 'hide' to class list for MENU id
    menu.classList.toggle("hide");
    
}


function viewerTemplate(pic, alt) {
    return `<div class="viewer" id= "viewer">
      <button class="close-viewer">X</button>
      <img id="modal-img" src="${pic}" alt="${alt}">
      </div>`;
  }

  function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    let element = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    let srcParts = element.src.split("-");

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let newImageSrc = srcParts[0] + "-full.jpeg";

    // Create the modal viewer HTML using viewerTemplate and the new image src
    let htmlToInsert = viewerTemplate(newImageSrc, element.alt);

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", htmlToInsert);

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);

}

// Function to remove the modal viewer
function closeViewer() {
    let viewer = document.getElementById("viewer");
    if (viewer) {
        viewer.remove();
    }
}

// Add event listener 
menuButton.addEventListener("click", toggleMenu);

// Event listener for gallery 
gallery.addEventListener("click", viewHandler);