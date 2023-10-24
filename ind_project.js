function displayAnswer(answerId) {
    document.getElementById(answerId).style.display='inline';    
}

function flipCard(side, newPic) {
    document.getElementById(side).src = newPic;
}

//conditional example
function swapText(textId, firstText, secondText) {
    var currentText = document.getElementById(textId).innerHTML;
    
    if (currentText === firstText){
        document.getElementById(textId).innerHTML = secondText;
    }
    else {
        document.getElementById(textId).innerHTML = firstText;
    }
}

//conditional example
function changeStyle(elementId) {
    var x = document.getElementById(elementId);
    if (x.className === 'box') {
        x.className = 'boxselected';
    }
    else {
        x.className = 'box';
    }
}

//conditional example
function checkAnswer() {
    var userResponse = document.getElementById("helloAnswer2").value;
    
    if(userResponse === "Bonjour") {
            document.getElementById('feedback').innerHTML = "That is correct!";
    }
    else if(userResponse === "bonjour") {
            document.getElementById('feedback').innerHTML = "That is correct!";
    }
    else {
            document.getElementById('feedback').innerHTML = "Sorry, try again.";
    }
}

//loop example
function numbers(){
    for (i = 1; i <= 3; i++){
        var numAns = prompt("How do you say " + i + " in French?");
        if (i === 1 && numAns === "un") {
            alert("That is correct!");
        }
        else if (i === 2 && numAns === "deux") {
            alert("That is correct!");
        }
        else if (i === 3 && numAns === "trois") {
            alert("That is correct!");
        }
        else {
            alert("Sorry, that is incorrect.");
        }
    } 
    alert("Great job! Keep practicing!");
}

//array example
function francophoneCountries() {
    var countryList = ["Democratic Republic of the Congo", "France", "Canada", "Madagascar", "Cameroon", "Ivory Coast", "Niger", "Burkina Faso", "Mali", "Senegal", "Chad", "Guinea", "Rwanda", "Belgium", "Burundi", "Benin", "Haiti", "Switzerland", "Togo", "Central African Republic", "Congo", "Gabon", "Equatorial Guinea", "Djibouti", "Comoros", "Luxembourg", "Vanuatu", "Seychelles", "Monaco"];
    
    var countryName = document.getElementById("enterCountry").value;
        
    if(countryList.includes(countryName)) {
        document.getElementById("countryFeedback").innerHTML = "Yes, French is an official language in " + countryName + ".";
    }
    else {
        document.getElementById("countryFeedback").innerHTML = "No, French is not an official language in " + countryName + ".";
    }
}
