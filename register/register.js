let count = 1;

function participantTemplate(count) {
    
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item${count}">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities${count}">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item${count}">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item${count}">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item${count}">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`;
    
    
    
}

function newParticipant() {
    // Increase participant count by 1
    count++;

    // Call newParticipant function
    const newParticipantHTML = participantTemplate(count);

    // Target the add participant button
    let addButton = document.getElementById("add");

    // Insert the new HTML before the add participant button 
    addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);

}

function submitForm(event) {
    event.preventDefault();
    // Hide form 
    document.querySelector("form").style.display = "none";

    // Create variables for the adult names and totals 
    let adultName = document.getElementById("adult_name").value;
    let computedTotal = totalFees();

    // Info object to hold adult name, participant count, and total fees
    let info = {
        aName: adultName,
        participantCount: count,
        total: computedTotal  
    };
    
    // Add new html from success template to display summary informatin 
    document.getElementById("summary").innerHTML = successTemplate(info); 

}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let feeAmounts = feeElements.map(fee => Number(fee.value) || 0);
    let feeTotal = feeAmounts.reduce(function(total, fee) {
        return total + fee;
    }, 0);

    
    
    // once you have your total make sure to return it!
    return feeTotal;
    }

function successTemplate(info) {
    return `<section id="summary">
    Thank you ${info.aName} for registering. You have registered ${info.participantCount} participants and owe $${info.total} in fees.</section>`
}



// Event listener for the add participant button
document 
    .getElementById("add")
    .addEventListener("click", newParticipant);

// Event listener for the submit form 
document 
    .querySelector("form")
    .addEventListener("submit", submitForm);