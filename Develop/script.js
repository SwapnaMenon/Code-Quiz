var timer = document.getElementById("time"); //connected time element inside//
var startBTN = document.getElementById("start");
var questiontititle = document.getElementById("question-title");
var answercontainer = document.getElementById("choices")
var nextBTN = document.getElementById("nextBTN");
var startcontainer = document.querySelector(".start")
var questionscontainer = document.getElementById("questions")
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
    startcontainer.classList.add("hide")  
    questionscontainer.classList.remove("hide")
    firstquestion(questionindex)
})
function firstquestion (Q) {
    answercontainer.textContent=""
    for (var i =0; i<questions.length;i++) {
        console.log(questions[Q].question)
        console.log(questions[Q].answers)
        questiontititle.textContent = (questions[Q].question)
        var answerlist = questions[Q].answers
    }
    answerlist.forEach(function(ANS){
        var answerBTN = document.createElement ("button")
        answerBTN.textContent = ANS
        answercontainer.appendChild (answerBTN)
        answerBTN.addEventListener ("click",function(){
            checkcorrect(answerBTN.textContent)
        })
    })
    
        

    
}

function checkcorrect(A) {
    if (A===questions[questionindex].correctanswer) {
        console.log ("correct")
    }
    questionindex++
    nextquestion(questionindex)
}
function nextquestion(Q) {
    nextBTN.addEventListener("click",function(){
        if (Q>= questions.length){
            done()
        } else {
            firstquestion(Q)
        }
    })
}
var endscreen=document.getElementById("end-screen")
function done (){
    questionscontainer.classList.add("hide")
endscreen.classList.remove("hide")
}
