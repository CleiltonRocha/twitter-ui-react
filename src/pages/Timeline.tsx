import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css';


let newTweet = ''

export function Timeline() {

  const [newTweet, setNewTweet] = useState('')

  console.log(newTweet)
  const [tweets, setTweets] = useState([
    'Meu Primeiro Tweet',
    'Teste',
    'Deu certo Tweetar!'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setNewTweet('');
    setTweets([newTweet, ...tweets])

  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setNewTweet('');
      setTweets([newTweet, ...tweets])
    }
  }
  
  return(
    <main className="timeline">
      <Header title="Home"/>
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/cleiltonRocha.png" alt="Cleilton Rocha" />
          <textarea
           id="tweet" 
           placeholder="What's happening?"
           value={newTweet}
           onKeyDown={handleHotKeySubmit}
           onChange={(event) => {
            setNewTweet(event.target.value)
           }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {
        tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet}/>
        })
      }
  </main>
  )
}