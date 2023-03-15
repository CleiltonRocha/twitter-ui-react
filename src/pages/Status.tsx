import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css';


export function Status() {

  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswer] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setNewAnswer('');
    setAnswer([newAnswer, ...answers])

  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setNewAnswer('');
      setAnswer([newAnswer, ...answers])
    }
  }

  return(
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis, ullam fugiat debitis, iure ratione dicta inventore commodi natus vel, eos corporis libero rerum! Quasi, architecto! Consequatur ex nostrum nam." />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/cleiltonRocha.png" alt="Cleilton Rocha" />
          <textarea
           id="tweet" 
           placeholder="Tweet Your Answer"
           value={newAnswer}
           onKeyDown={handleHotKeySubmit}
           onChange={(event) => {
            setNewAnswer(event.target.value)
           }}/>
        </label>

        <button type="submit">
          <PaperPlaneRight />
         <span>Answer</span>
        </button>
      </form>
      {
        answers.map(answer => {
          return <Tweet key={answer} content={answer}/>
        })
      }
  </main>
  )
}