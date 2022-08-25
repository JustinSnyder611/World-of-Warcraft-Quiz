let title = document.getElementById('title')
let startButton = document.getElementById('bStart')
let questsCorrect = 0
let questsWrong = 0
let timeLeft = 60;
let questionBox = document.createElement('div');

// The timer
function countdown() {
    let timer = document.createElement('h2')
    timer.id = 'timer'
    document.body.appendChild(timer)
    let timeInterval = setInterval(function () {
      timeLeft--;
      timer.textContent = "Time left: " + timeLeft ;
      if(timeLeft < 1) {
        clearInterval(timeInterval)
        timer.style.display = 'none'
        quizEnd()
      }
    }, 1000);
  }

//When you click the 'start' button it changes everything, starts a timer, and displays question 1
function start () {
    document.getElementById('leaderboardButton').style.cursor = 'not-allowed'
    document.getElementById('leaderboardButton').onclick = 'null'
    title.style.display = 'none';
    startButton.style.display = 'none';
    questionBox.id = 'questionBox';
    document.body.appendChild(questionBox);
    let questTitle = document.createElement('h2');
    questTitle.id = 'questTitle';
    questionBox.appendChild(questTitle)
    questTitle.innerHTML = 'In what continent is the Horde city Orgrimmar?';
    let questy = document.createElement('ol')
    questionBox.appendChild(questy)
    let quest1 = document.createElement('button')
    quest1.id = 'a1'
    quest1.className = 'question'
    quest1.innerHTML = 'Northrend'
    questy.appendChild(quest1)
    let quest2 = document.createElement('button')
    quest2.id = 'a2'
    quest2.className = 'question'
    quest2.innerHTML = 'Kalimdor'
    questy.appendChild(quest2)
    let quest3 = document.createElement('button')
    quest3.id = 'a3'
    quest3.className = 'question'
    quest3.innerHTML = 'Eastrn Kingdoms'
    questy.appendChild(quest3)
    let quest4 = document.createElement('button')
    quest4.id = 'a4'
    quest4.className = 'question'
    quest4.innerHTML = 'Broken Isles'
    questy.appendChild(quest4)
    countdown()
    document.getElementById('a1').onclick = function() {
        wrong1()
    }
    document.getElementById('a2').onclick = function() {
        correct1()
    }
    document.getElementById('a3').onclick = function() {
        wrong1()
    }
    document.getElementById('a4').onclick = function() {
        wrong1()
    }
}

//If they got the question wrong or right it does different things
function correct1() {
    questsCorrect++
    alert('Correct!')
    question2()
}

function wrong1() {
    questsWrong++
    alert('Wrong!')
    timeLeft -= 10
    question2()
}

// 2nd Question
function question2() {
    document.body.style.backgroundImage = "url(./assets/images/img2.jpg)";
    document.getElementById('questTitle').innerHTML = 'When did the expansion Battle for Azeroth come out?'
    document.getElementById('a1').innerHTML = '2018'
    document.getElementById('a2').innerHTML = '2006'
    document.getElementById('a3').innerHTML = '2022'
    document.getElementById('a4').innerHTML = '2012'

    document.getElementById('a1').onclick = function() {
        correct2()
    }
    document.getElementById('a2').onclick = function() {
        wrong2()
    }
    document.getElementById('a3').onclick = function() {
        wrong2()
    }
    document.getElementById('a4').onclick = function() {
        wrong2()
    }

}

//If they got the question wrong or right it does different things
function correct2() {
    questsCorrect++
    alert('Correct!')
    question3()
}

function wrong2() {
    questsWrong++
    alert('Wrong!')
    timeLeft -= 10
    question3()
}
// 3rd Question
function question3() {
    document.body.style.backgroundImage = "url(./assets/images/img3.jpg)";
    document.getElementById('questTitle').innerHTML = 'Who was the 2nd Lich King?'
    document.getElementById('a1').innerHTML = 'Bolvar Fordragon'
    document.getElementById('a2').innerHTML = 'Sylvanas Windrunner'
    document.getElementById('a3').innerHTML = 'Nerzhul'
    document.getElementById('a4').innerHTML = 'Arthas Menethil'

    document.getElementById('a1').onclick = function() {
        wrong3()
    }
    document.getElementById('a2').onclick = function() {
        wrong3()
    }
    document.getElementById('a3').onclick = function() {
        wrong3()
    }
    document.getElementById('a4').onclick = function() {
        correct3()
    }
}

//If they got the question wrong or right it does different things
function correct3() {
    questsCorrect++
    alert('Correct!')
    question4()
}

function wrong3() {
    questsWrong++
    alert('Wrong!')
    timeLeft -= 10
    question4()
}
// 4th Question
function question4() {
    document.body.style.backgroundImage = "url(./assets/images/img4.jpg)";
    document.getElementById('questTitle').innerHTML = 'Which of the following is a primary profession?'
    document.getElementById('a1').innerHTML = 'Herbalism'
    document.getElementById('a2').innerHTML = 'Fishing'
    document.getElementById('a3').innerHTML = 'Cooking'
    document.getElementById('a4').innerHTML = 'Archaeology'

    document.getElementById('a1').onclick = function() {
        correct4()
    }
    document.getElementById('a2').onclick = function() {
        wrong4()
    }
    document.getElementById('a3').onclick = function() {
        wrong4()
    }
    document.getElementById('a4').onclick = function() {
        wrong4()
    }
}

//If they got the question wrong or right it does different things.
function correct4() {
    questsCorrect++
    alert('Correct!')
    quizEnd()
}

function wrong4() {
    questsWrong++
    alert('Wrong!')
    timeLeft -= 10
    quizEnd()
}
// Once the quiz is over this removes all of the quiz elements then once they click the 'Continue' button it loads the leaderboard
function quizEnd() {
    document.getElementById('questTitle').innerHTML = 'QUIZ OVER!'
    document.getElementById('questTitle').style.fontWeight = 'bold'
    document.getElementById('a1').style.display = 'none'
    document.getElementById('a2').style.display = 'none'
    document.getElementById('a3').style.display = 'none'
    document.getElementById('a4').style.display = 'none'
    let answerCorrect = document.createElement('h2')
    answerCorrect.innerHTML = 'You got ' + questsCorrect + ' questions correct!'
    answerCorrect.className = 'end'
    answerCorrect.id = 'e1'
    questionBox.appendChild(answerCorrect)
    let answerWrong = document.createElement('h2')
    answerWrong.innerHTML = 'You got ' + questsWrong + ' questions wrong!'
    answerWrong.className = 'end'
    answerWrong.id = 'e2'
    questionBox.appendChild(answerWrong)
    localStorage.setItem('storedScore', timeLeft)
    let score = document.createElement('h2')
    score.innerHTML = 'Your score is ' + timeLeft
    score.className = 'end'
    score.id = 'e3'
    questionBox.appendChild(score)
    let leaderButton = document.createElement('button')
    leaderButton.id = 'continue'
    leaderButton.innerHTML = 'Continue'
    leaderButton.onclick = function() {
        leaderboard()}
    questionBox.appendChild(leaderButton)
    document.getElementById('timer').style.display = 'none'
    timeLeft = 'yo'
}

// The leaderboard asks for the player's name then when they click the 'Submit' button it displays thier info on the leaderboard
function leaderboard() {
    document.getElementById('questTitle').innerHTML = 'Please put in a name for the leaderboard.'
    document.getElementById('e1').style.display = 'none'
    document.getElementById('e2').style.display = 'none'
    document.getElementById('e3').style.display = 'none'
    let button = document.getElementById('continue')
    button.innerHTML = 'Submit'
    let highInput = document.createElement('input')
    highInput.id = 'submitInput'
    questionBox.appendChild(highInput)
    button.onclick = function() {
        localStorage.setItem('storedName', highInput.value)
        highInput.style.display = 'none'
        document.getElementById('questTitle').innerHTML = 'Leaderboard'
        let l1 = document.createElement('h2')
        l1.id = 'l1'
        l1.innerHTML = localStorage.getItem('storedName') + '- Score:' + localStorage.getItem('storedScore')
        questionBox.appendChild(l1)
        document.getElementById('continue').innerHTML = 'Back'
        document.getElementById('continue').onclick = function() {
            location.reload();
        }
    }
}

// When you click the leaderboard button on the homescreen
function leaderboardButton() {
    document.getElementById('leaderboardButton').onclick = 'null'
    document.getElementById('title').style.display = 'none'
    questionBox.id = 'questionBox';
    document.body.appendChild(questionBox);
    let questTitle = document.createElement('h2');
    questTitle.id = 'questTitle';
    questTitle.innerHTML = 'Leaderboards'
    questionBox.appendChild(questTitle)
    let l1 = document.createElement('h2')
    l1.id = 'l1'
    l1.innerHTML = localStorage.getItem('storedName') + '- Score:' + localStorage.getItem('storedScore')
    questionBox.appendChild(l1)
    let leaderButton = document.createElement('button')
    leaderButton.id = 'continue'
    leaderButton.innerHTML = 'Back'
    leaderButton.onclick = function() {
        location.reload()}
    questionBox.appendChild(leaderButton)
}