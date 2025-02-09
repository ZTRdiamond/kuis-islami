import env from "dotenv"; env.config();
import axios from "axios";

export async function importQuiz() {
  console.log("QUIZ:", "fetching data!")
  const raw = await axios.get(process.env.QUIZ, {
    headers: {
      "accept": "application/json",
      "user-agent": "Postify/1.0.0"
    }
  });
  const data = JSON.stringify(raw.data);
  global.quiz = JSON.parse(data)
  console.log("QUIZ:", "fetching success!")
};