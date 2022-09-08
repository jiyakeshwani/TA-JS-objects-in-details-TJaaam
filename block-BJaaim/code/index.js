let nextbtn = document.querySelector(".next");
class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isCorrect(answer) {
    return answer === this.options[this.correctAnswerIndex];
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}
class Quiz {
  constructor(Questions = [], score = 0) {
    this.Questions = Questions;
    this.score = score;
    this.activeIndex = 0;
  }
  addQuestion(title, options, correctAnswerIndex) {
    let question = new Question(title, options, correctAnswerIndex);
    this.Questions.push(question);
  }
  nextQuestion() {
    this.activeIndex = this.activeIndex + 1;
    this.createUI();
  }
  incrementScore() {
    this.score = this.score + 1;
  }

  createUI() {
    let quiz = document.querySelector(".question");
    quiz.innerHTML = "";
    let currentQuestion = this.Questions[this.activeIndex];
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    legend.innerText = currentQuestion.title;
    let options = document.createElement("div");
    options.classList.add("options");
    currentQuestion.options.forEach((option, index) => {
      let div = document.createElement("div");
      let select = document.createElement("input");
      select.type = "radio";
      select.id = `option-${index}`;
      select.name = "options";
      select.value = option;
      let label = document.createElement("label");
      label.for = `option-${index}`;
      label.innerText = option;
      div.append(select, label);
      options.append(div);
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (select.checked) {
          if (currentQuestion.isCorrect(select.value)) {
            this.incrementScore();
            this.nextQuestion.bind(this);
            if (this.activeIndex === this.Question.length - 1) {
              alert(
                "You have completed the quiz , Now you can see your result"
              );
            }
          }
        }
      });
    });

    let submit = document.createElement("button");
    submit.type = "submit";
    submit.classList.add("submit-button");
    submit.innerText = "Submit";

    fieldset.append(legend, options, submit);
    form.append(fieldset);
    quiz.append(form);
  }
}
function handleQuiz() {
  let newQuiz = new Quiz();
  quizQuestions.forEach((question) => {
    newQuiz.addQuestion(
      question.title,
      question.options,
      question.correctAnswerIndex
    );
  });
  newQuiz.createUI();

  nextbtn.addEventListener("click", newQuiz.nextQuestion.bind(newQuiz));

  let result = document.querySelector(".result");
  result.addEventListener("click", () => {
    alert(`Your Score is ${newQuiz.score}`);
  });
}
handleQuiz();
