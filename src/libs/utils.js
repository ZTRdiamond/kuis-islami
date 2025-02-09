function randomQuiz() {
  if (!global.quiz || !Array.isArray(global.quiz) || global.quiz.length === 0) {
    throw new Error("No quiz data available");
  }

  const randomIndex = Math.floor(Math.random() * global.quiz.length);
  return global.quiz[randomIndex];
}

function searchQuiz(id) {
  if (!global.quiz || !Array.isArray(global.quiz) || global.quiz.length === 0) {
    throw new Error("No quiz data available");
  }

  const quiz = global.quiz.find((d) => d.id === id);
  return quiz || null;
}

export default {
  randomQuiz,
  searchQuiz,
};