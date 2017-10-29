/**
 * main.js - Created by anonyxhappie on 10/26/2017.
 */


//   TODO (1) - Initialize firebase app with starter code
//   var config = { apiKey: "", ... };
//   var app = firebase.initializeApp(config), auth = app.auth(), database = app.database();

/**
 * For Authorization
 */
// function authCheck(){
//     var provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider).then(function(result){
//         //console.log("log:::"+result.user.email);
//         if(result.user.email==='akkilsl522@gmail.com'){
//             document.getElementById('login').style.display = 'none';
//             getFeedbacks();
//         }else{
//             auth.signOut();
//             alert('Sorry, You are not authorized.\n\nContact Admin to get access.');
//         }
//     });

// }

/**
 * Get and update feedbacks when authorized
 */
function getFeedbacks(){

    // TODO (2) - Get collection ('feedback') reference, feedbackRef, from firebase database

    // TODO (3) - Retrieve feedback when child_added and update UI

    // dataRef.on('value', function(data){
    //     data.forEach(function(element) {
    //         var newF = element.val();
    //         createFeedbackElement(newF.name, newF.feedback);    
    //     });
        
    //     /**
    //      * Reload page when newFeedback inserted or deleted
    //      */
    //     if(data.numChildren() != document.getElementById('feedback').childElementCount){
    //         location.reload();
    //     }
    // });

}    

/**
 * Create feedback element 
 * <div>
 *    <h3>{{name}}</h3>
 *    <p>{{feedback}}</p>
 * </div>
 */
function createFeedbackElement(name, feedback){        
    var nameH3 = document.createElement('h3');
    var nameTextNode = document.createTextNode(name);
    nameH3.appendChild(nameTextNode);
    
    var feedbackP = document.createElement('p');
    var feedbackTextNode = document.createTextNode(feedback);
    feedbackP.appendChild(feedbackTextNode);

    var divElement = document.createElement('div');
    divElement.appendChild(nameH3);
    divElement.appendChild(feedbackP);

    var feedbackDiv = document.getElementById('feedback');
    feedbackDiv.appendChild(divElement);
}
