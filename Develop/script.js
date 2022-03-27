var timer = document.getElementById("time"); //connected time element inside//
var startBTN = document.getElementById("start");
var questiontititle = document.getElementById("question-title");
var answercontainer = document.getElementById("choices")
var nextBTN = document.getElementById("nextBTN");

var questions = [
    {
        question:"1+1",
        answers: ["2","3","4","5"], 
        correctanswer: "2"
    },
    {
        question:"1+2",
        answers: ["2","3","4","6"], 
        correctanswer: "3"
    },
    {
        question:"1+3",
        answers: ["2","3","4","7"], 
        correctanswer: "4"
    },
]
var questionindex = 0;
var time = 60;
var timeelapsed 

function settimer () { 
    timeelapsed = setInterval (function(){
        time--
        timer.textContent = time
        if (time===0) {
            clearInterval(time)
        }
    }, 1000)
}

startBTN
.addEventListener("click",function(){
    settimer()  
})
function firstquestion () {
    for (var i =0; i<questions.length;i++) {
        console.log(questions[i].question)
        console.log(questions[i].answers)
        questiontititle.textContent = (questions[i].question)
        var answerlist = questions[i].answers
    }
    for (var i =0; i<4;i++) {
        var answerBTN = document.createElement ("button")
        answerBTN.textContent = answerlist[i]
        answercontainer.appendChild (answerBTN)
        



    }
    answerBTN.addEventListener ("click",function(){
        checkcorrect(answerBTN.textContent)
    })
}

function checkcorrect(A) {
    if (A===questions[questionindex].correctanswer) {
        console.log ("correct")
    }
}
firstquestion()