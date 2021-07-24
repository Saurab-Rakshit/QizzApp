const quizDB = [
    {question:"Q1:What is the fullform of HTML?",
        a:"Hyper Text Makeup Language",
        b:"Hyper Text Mark Language",
        c:'Hyper Texts Markup Language',
        d:"Hyper Text Markup Language",
        ans:"ans4"
    },
    {question:"Q2:What is the fullform of HTTP?",
        a:"Hyper Text Transfer Product",
        b:"Hyper Text Transfer Protocol",
        c:'Hyper Text Transfer Product',
        d:"Hyper Text Markup Language",
        ans:"ans2"
    },
    {question:"Q3:Which is the Frontend Library?",
        a:"SpringBoot",
        b:"Hybernate",
        c:'ReactJs',
        d:"Angular",
        ans:"ans3"
    },
    {question:"Q4:Which is the Scripting Language?",
        a:"Java",
        b:"Python",
        c:'Javascript',
        d:"C#",
        ans:"ans3"
    },
    {question:"Q5:When is MongoDB is Developed?",
        a:"10 February 2009",
        b:"11 February 2009",
        c:"22 February 2009",
        d:"11 December 2009",
        ans:"ans2"
    }    
]

const Question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score=0;

const loadQuestions = ()=>{

    const questionList = quizDB[questionCount]

    Question.innerText = questionList.question;
    option1.innerText  = questionList.a;
    option2.innerText  = questionList.b;
    option3.innerText  = questionList.c;
    option4.innerText  = questionList.d;

}
loadQuestions();

const getCheckAnswer = ()=>{
    let answer;
    answers.forEach((curAnsElement)=>{
        if(curAnsElement.checked){
            answer = curAnsElement.id;
        }
    });
    return answer;
}

const deselectAll = ()=>{
    //* to uncheck the option which is checked in previous question
    answers.forEach((curAnsElement)=>curAnsElement.checked = false)
}


submit.addEventListener('click',()=>{
    
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }
    
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestions();
    }else{
        showScore.innerHTML = `<h3>You Score ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">OK</button>`;

        showScore.classList.remove('scoreArea');
    }
});