import React, { useState } from "react";
import "./EightBall.css"
import defaultAnswers from "./answers.json"
import { choice } from "./random"

// The EightBall component takes an optional 'answers' prop, which defaults to 'defaultAnswers'.
function EightBall ({ answers = defaultAnswers}) {
    // The state 'answer' holds an object with two properties: 'msg' and 'color'.
    // Initially, 'msg' is set to "Think of a Question." and 'color' is set to "black".
    const [answer, setAnswer] = useState ({
        msg: "Think of a Question.",
        color: "black"
    });

    // The 'handleClick' function is called when the user clicks on the EightBall div.
    // It uses the 'choice' function from the 'random' module to randomly select an answer from 'answers'.
    // The selected answer is then set as the new state for the 'answer' object using 'setAnswer'.
    function handleClick(evt) {
        setAnswer(choice(answers));
    }

    return (
        <div 
            className ="EightBall"
            onClick = { handleClick }
            style = {{ backgroundColor: answer.color }}
        >
            <b> { answer.msg } </b>
        </div>
    )
}


export default EightBall