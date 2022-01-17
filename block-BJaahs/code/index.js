// data
const testData = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
};

//methods
function getQues(data) {
  let ques1 = {
    data: testData,
    isCorrectAnswer: function isAnswerCorrect(index) {
      if (index === correctAnswerIndex) {
        return true;
      } else {
        return false;
      }
    },

    correctAnswer: function getCorrectAnswer() {
      return options[correctAnswerIndex];
    },
  };
}
ques1.isCorrectAnswer(2);
ques1.correctAnswer();
