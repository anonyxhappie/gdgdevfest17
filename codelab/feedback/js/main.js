/**
 * main.js - Created by anonyxhappie on 10/26/2017.
 */


//   TODO (1) - Initialize firebase app with starter code
//   var config = { apiKey: "", ... };
//   firebase.initializeApp(config);
  
// TODO (2) - Get collection ('feedback') reference, feedbackRef, from firebase database

dataRef.on('value', function(data){

    // TODO (3) - Retrieve feedback through collection (data) and createFeedbackElement for each  
    // data.forEach(function(element) {
    //     var newF = element.val();
    //     console.log(newF.name + " " + newF.feedback + "");    
    // });

    /**
     * Reload page when newFeedback inserted or deleted
     */
    if(data.numChildren() != document.getElementById('feedback').childElementCount){
        location.reload();
    }
});

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
