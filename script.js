
const scoreInput = document.getElementById('scoreInput');
const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');
submitButton.addEventListener('click', () => {
    const score = scoreInput.value;
    const numericScore = Number(score);

    if (isNaN(score) ) {
        result.textContent = "Not a Number";
    } else  {
        
        if (numericScore > 100 || numericScore < 0) {
            result.textContent = "Invalid Score";
        } else if (numericScore === 100) {
            result.textContent = "Perfect Score";
        } else if (numericScore <100 || numericScore >=85) {
            result.textContent = "You got an A";
        } else if (numericScore <85 ||numericScore>=75) {
            result.textContent = "You got a B";
        } else if (numericScore <75 ||numericScore>=65) {
            result.textContent = "You got a C";
        } else if (numericScore < 65 || numericScore>=50) {
            result.textContent = "You got a D";
        }else if(numericScore<50||numericScore>=0){
            result.textContent="You got a F"
        }

         else {
            result.textContent = "You got an F";
        }
    }
});




