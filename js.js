
const quiz=[
    {
      "question": "What is the correct way to write a JavaScript comment?",
      "ans1text": "// This is a comment",
      "ans2text": "<!-- This is a comment -->",
      "ans3text": "/* This is a comment */",
      "ans4text": "Both a) and c) are correct",
      "answer": "Both a) and c) are correct"
    },
    {
      "question": "Which of the following is not a valid way to declare a variable in JavaScript?",
      "ans1text": "let x = 5;",
      "ans2text": "const y = \"hello\";",
      "ans3text": "var z = true;",
      "ans4text": "string myVar = \"error\";",
      "answer": "string myVar = \"error\";"
    },
    {
      "question": "What will be the output of the following code?\n```javascript\nlet x = 5;\nlet y = \"5\";\nconsole.log(x == y);\nconsole.log(x === y);\n```",
      "ans1text": "true, true",
      "ans2text": "true, false",
      "ans3text": "false, true",
      "ans4text": "false, false",
      "answer": "true, false"
    },
    {
      "question": "Which of the following is the correct way to add an event listener in JavaScript?",
      "ans1text": "element.addEventHandler(\"click\", function);",
      "ans2text": "element.addEventListener(\"click\", function);",
      "ans3text": "element.onClick = function();",
      "ans4text": "Both b) and c) are correct",
      "answer": "Both b) and c) are correct"
    },
    {
      "question": "What is the purpose of the `this` keyword in JavaScript?",
      "ans1text": "It refers to the global object",
      "ans2text": "It refers to the current object the code is being executed in",
      "ans3text": "It refers to the parent object of the current object",
      "ans4text": "It has no specific purpose and can be used interchangeably with any other keyword",
      "answer": "It refers to the global object"
    }
  ]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
// console.log(option_a);
// console.log(option_b);  
// console.log(option_c);
// console.log(option_d);
// console.log(option_a.textContent);
// console.log(option_b.textContent);
// console.log(option_c.textContent);
// console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

// console.log(quiz[currentQuestion].question);
// console.log(quiz[currentQuestion].ans1text);
// console.log(quiz[currentQuestion].ans2text);
// console.log(quiz[currentQuestion].ans3text);
// console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
             
        }
        else
        {
          alert(`${quiz[currentQuestion].answer} this is correct answer`)
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});