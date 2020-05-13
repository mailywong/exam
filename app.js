// Function to return the form element
getSubmitButton = () => {
    return document.querySelector('#submit')
}

// Function to return input 1
getInput1 = () => {
    return document.querySelector('#input-num1').value;
}

// Function to return input 2
getInput2 = () => {
    return document.querySelector('#input-num2').value;
}

// Function to return the text area content
getTextareaOutput = () => {
    return document.querySelector('textarea')
}

// Function to make sure that input is in the range between 2 - 100 inclusive
isWithinValidRange = (input) => {
    return (input >= 2) && (input <=100 );
}


// Bind an event listener to the form, to validate inputs and display output accordingly
getSubmitButton().addEventListener('click', (event) => {
    event.preventDefault();

    // Clear the textarea
    getTextareaOutput().innerHTML = ``;

    // Start by assuming inputs are valid
    let valid = true;

    var val1 = parseInt(getInput1());
    var val2 = parseInt(getInput2());

    // Check if its a valid number
    if(isNaN(val1)) {
        getTextareaOutput().innerHTML = `Number 1 input ${val1} is not a valid number`;
        getTextareaOutput().classList.add('text-danger');
        valid = false;
    } 
    if(isNaN(val2)) {
        getTextareaOutput().innerHTML += `\nNumber 2 input ${val2} is not a valid number`;
        getTextareaOutput().classList.add('text-danger');
        valid = false;
        return;
    }

    // Check if its within valid range
    if(!isWithinValidRange(val1)) {
        getTextareaOutput().innerHTML = `Number 1 input ${val1} is not a number in valid range`;
        getTextareaOutput().classList.add('text-danger');
        valid = false;
    }

    // Check if its within valid range
    if(!isWithinValidRange(val2)) {
        getTextareaOutput().innerHTML += `\nNumber 2 input ${val2} is not a number in valid range`;
        getTextareaOutput().classList.add('text-danger');
        valid = false;
        return;
    }

})

