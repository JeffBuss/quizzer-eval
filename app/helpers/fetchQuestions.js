// const fetchQuestions = (url, setQuestions) => {
//   fetch(url)
//   .then((response) => {
//     return (response.json())
//   }).then((data) => {
//     return (data.value)
//   }).then(array) => {
//     return (array.map(i => i.question))
//   }.then((questions) => {
//     retunr (setQuestions(questions))
//   })
// }

const fetchQuestions = (url, setQuestions) => {
  fetch(url)
  .then((response) => {
    return (response.json());
  }).then((data) => {
    return (data.quizzes.map((question) => {
      return (setQuestions(question));
    }));
  });
};

export default fetchQuestions;
