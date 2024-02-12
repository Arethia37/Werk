import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from '@mui/material';

export default function Quiz() {
  const [categories, setCategories] = useState([])
  const fetchQuizCategories = async () => {
    const { data } = await axios('https://the-trivia-api.com/v2/questions');

      const formattedData = data.map((category) => {
        const incorrectAnswersIndexes = category.incorrectAnswers.length 
        const randomIndex = Math.random() * (incorrectAnswersIndexes - 0) + 0 
        category.incorrectAnswers.splice(randomIndex, 0, category.correctAnswer)
        return {
          ...category,
          answers: category.incorrectAnswers,
        }
      })
    
    setCategories(data.category);
  }

  useEffect(() => {
    fetchQuizCategories()
  }, [])
 console.log({ categories }); 
  return (
    <Container>

    </Container>
  ) 
}