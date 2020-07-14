// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>
    let fn = document.getElementById('fullname');
    let em = document.getElementById('email');
    let mes = document.getElementById('message');

    let form = document.querySelector("form");

    let submit = document.getElementById('submit');

// Declare variable that will 
// store regular expression for email
    let exp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function formInput(){

    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    let data = {};
    // Declare array that will store the errors
	let errors = [];
/*
    +-----------+    
    | FULL NAME |
    +-----------+
*/
    // Check if fullname is not empty.
    if (fn.value !== ''){
    // If so:
       // Pass the collected value
       // to your object "data".
        data.userInput = fn.value;
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
        }else{
            errors.push('Enter name please');   
    // End your conditional here.
    }
        
    /*
    +-------+    
    | EMAIL | 
    +-------+
    */
    // Check if email is not empty.
       // Check if email is valid.
    if (em.value !== '') {
       // If so:
        if(exp.test(em.value)){
          // Pass the collected value
          // to your object "data".
            data.userInput += em.value;
       // Otherwise:
        }else{
          // Create a corresponding error-message
          // and add it to your array "errors".
            errors.push('Email not valid');
       // End your nested conditional here.
        }
    // Otherwise:
    }else{
       // Create a corresponding error-message
       // and add it to your array "errors"
        errors.push('Please fill Email');
    // End your outer conditional here.
    }

   /*
    +---------+    
    | MESSAGE | 
    +---------+
    */
    // Check if message is not empty.
    // If so:
        if(mes.value !== ''){
       // Pass the collected value
       // to your object "data".
            data.userInput += mes.value;
    // Otherwise:
        }else{
       // Create a corresponding error-message
       // and add it to your array "errors"
            errors.push('Message is empty');
    // End your conditional here.
        }
        
    /*
    +-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+
    */
    // Check if there is anything in array errors
    if (errors.length !== 0){
       // If so: 
       // Print it in JavaScript console.
        console.log('ERRORS', errors);
    // Otherwise:
    }else{
       // Print the data in JavaScript console.
        console.log('COLLECTED DATA', data);
       // Clear text-fields
        form.reset();
    // End your conditional here.
    }
// Close your function here
}

// Register your form to "click" event.
submit.addEventListener('click', formInput);
 