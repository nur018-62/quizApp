const question=[
    {
        question:"which is larget animal in the world",
        answer:[
            {text:"shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]

        },

    {
        question:"which is the smallest country  in the world",
        answer:[
            {text:"vatican city",correct:true},
            {text:"BHutan",correct:false},
            {text:"nepal",correct:false},
            {text:"Shri Lanka",correct:false},
        ]
    },
    {
        question:"which is largest desert in the world",
        answer:[
            {text:"kalaher",correct:false},
            {text:"gobi",correct:false},
            {text:"Sahara",correct:true},
            {text:"Antarctica",correct:false},
        ]
    },
    {
        question:"which is the smallest containent in the world",
        answer:[
            {text:"Asia",correct:false},
            {text:"Austraila",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]
    },
];


const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let curruntQuestionIndex=0;
let score=0;

function startQuiz(){
    curruntQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    let curruntQuestion = questions[curruntQuestionIndex];
    let questionNo=
    questionElement.innerHTML= questionNO+" "+ curruntQuestion.question;
    curruntQuestion.anwers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendchild(button);
    });

}
startQuiz();