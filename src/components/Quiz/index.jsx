import { useState } from 'react';
import { QuestionAnswer } from '../QuestionAnswer'

import S from './style.module.css'

const QUESTIONS = [
    {
        id: 1,
        question: 'Qual é o meu nome?',
        answers: ['Miguel', 'Luis', 'Humberto', 'Ana'],
        correctAnswer: 'Humberto',
    },
    {
        id: 2,
        question: 'Qual é a minha idade?',
        answers: ['12', '2', '20', '32'],
        correctAnswer: '20',
    },
    {
        id: 3,
        question: 'O que eu sou?',
        answers: ['Desenvolvedor', 'Médico', 'Eletricista', 'Jogador de futebol'],
        correctAnswer: 'Desenvolvedor',
    },
    {
        id: 4,
        question: 'Quem é Daniel?',
        answers: ['Homem de Ferro', 'Super-man', 'Homem - Aranha', 'Homem - Formiga'],
        correctAnswer: 'Homem - Formiga',
    },
]

export function Quiz () {
    const currentQuestion = QUESTIONS[0];
    const [correctAnswerCount, setCorrectAnswersCount] = useState (0)
    const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState (false)
    
    const handleAnswerQuestion = (event, question, answer) => {
        if(isCurrentQuestionAnswered) {
            return
        }
        const isCorrectAnswer = question.correctAnswer == answer

        const resultClassName = isCorrectAnswer ? S.correct : S.incorrect
        event.currentTarget.classList.toggle(resultClassName)

        if(isCorrectAnswer) {
            setCorrectAnswersCount(correctAnswerCount + 1)
        }


        setIsCurrentQuestionAnswered (true)
    }
    return (
        <div className={S.container}>
            <div className={S.card}>
                <div className={S.quiz}>
                    <header className={S.quizHeader}> 
                        <span className = {S.questionCount}>PERGUNTA 1/3</span>
                        <p className = {S.question}>
                            {currentQuestion.question}
                        </p>
                    </header>

                    <ul className={S.answers}>
                        {currentQuestion.answers.map(answer => (
                            <li key={answer} className={S.answerItem}>
                            <QuestionAnswer 
                            answer = {answer} 
                            question ={currentQuestion} 
                            handleAnswerQuestion={handleAnswerQuestion}
                            />
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}