/**
 * main.js - Created by anonyxhappie on 10/26/2017.
 */


// TODO (1) - Initialize firebase app with starter code
// var config = { apiKey: "", ... };
// firebase.initializeApp(config);
  
// TODO (2) - Get collection ('feedback') reference, feedbackRef, from firebase database

// TODO (3) - Add Event Listener on 'feedback-form' submit event

function submitFeedback(event){
    event.preventDefault();

    // TODO (4) - Get input values for name, company, phone, email, feedback and saveData(args, ...)
 
    // console.log(name + ", " + company + ", " + phone + ", " + email + ", " + feedback);
   
    document.querySelector('.success').style.display='block';
    setTimeout(function(){
        document.querySelector('.success').style.display='none';
    }, 2500);

    document.getElementById('feedback-form').reset();
}

function saveData(name, company, phone, email, feedback){
    
    // TODO (5) - Create newFeedback object and push to remote

}

function getValue(id){
    return document.getElementById(id).value;
}