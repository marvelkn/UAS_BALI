import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import { data } from '../../components/MonkeyForest/QuesMonkeyForest';
import { Link } from 'react-router-dom';

const QuizMonkeyForest = () => {
    // State variables
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    // Refs for options
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    // Load score from localStorage on component mount
    useEffect(() => {
        const savedScore = localStorage.getItem('quizMonkeyForestScore');
        if (savedScore) {
            setScore(Number(savedScore));
        }
    }, []);

    // Check answer and update score
    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add('correct');
                setLock(true);
                setScore((prev) => prev + 1);
            } else {
                e.target.classList.add('wrong');
                setLock(true);
                option_array[question.ans - 1].current.classList.add('correct');
            }
        }
    };

    // Move to the next question
    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return;
            }
            setIndex(index + 1);
            setQuestion(data[index + 1]);
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove('wrong');
                option.current.classList.remove('correct');
                return null;
            });
        }
    };

    // Reset score when result changes to true
    useEffect(() => {
        if (result) {
            // Update coinAmount in localStorage
            const currentCoins = parseInt(localStorage.getItem('coinAmount') || '0');
            const newCoins = currentCoins + score * 25;
            localStorage.setItem('coinAmount', newCoins);
        }
    }, [result, score]);

    return (
        <div className="quiz-box">
            <h1>Quiz Time!</h1>
            <hr />
            {result ? (
                <>
                    <h2>Your Scored {score} out of {data.length}</h2>
                    <Link to="/map">
                        <button>Continue your journey!!</button>
                    </Link>
                </>
            ) : (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={Option1} onClick={(e) => { checkAns(e, 1); }}>{question.option1}</li>
                        <li ref={Option2} onClick={(e) => { checkAns(e, 2); }}>{question.option2}</li>
                        <li ref={Option3} onClick={(e) => { checkAns(e, 3); }}>{question.option3}</li>
                        <li ref={Option4} onClick={(e) => { checkAns(e, 4); }}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">{index + 1} of {data.length} Questions</div>
                </>
            )}
        </div>
    );
};

export default QuizMonkeyForest;
