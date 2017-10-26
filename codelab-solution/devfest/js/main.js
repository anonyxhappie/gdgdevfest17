/**
 * main.js - Created by anonyxhappie on 10/26/2017.
 */

var config = {
    // apiKey: "",
    // authDomain: "",
    // databaseURL: "",
    // projectId: "",
    // storageBucket: "",
    // messagingSenderId: ""
    };
    
firebase.initializeApp(config);
var feedbackRef = firebase.database().ref('feedback');      

document.getElementById('feedback-form').addEventListener('submit', submitFeedback);

function submitFeedback(event){
    event.preventDefault();

    var name = getValue('name');
    var company = getValue('company');
    var phone = getValue('phone');
    var email = getValue('email');
    var feedback = getValue('feedback');
    saveData(name, company, phone, email, feedback);
    //console.log(name + ", " + company + ", " + phone + ", " + email + ", " + feedback);
   
    document.querySelector('.success').style.display='block';
    setTimeout(function(){
        document.querySelector('.success').style.display='none';
    }, 2500);
    document.getElementById('feedback-form').reset();
}

function saveData(name, company, phone, email, feedback){
    var newFeedback = {
        name: name,
        company: company,
        phone: phone,
        email: email,
        feedback: feedback
    };
    
    feedbackRef.push().set(newFeedback);
}

function getValue(id){
    return document.getElementById(id).value;
}