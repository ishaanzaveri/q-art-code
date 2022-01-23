import './App.css';
import Prompts from "./components/Prompts";
import NewQuestion from "./components/NewQuestion";
import { useEffect, useState } from 'react';
import DrawCanvas from './components/DrawCanvas'
import ImageGrid from './components/ImageGrid';

function App() {

  // just a comment
  const [questions, modifyQuestions] = useState([])

  useEffect(() => {
    fetch("/api/qurl").then(data => data.json()).then(data => modifyQuestions(data))
  }, [])

  const updateList = (questions) => {
    modifyQuestions(questions)
  }

  return (
    <>
      <div className="qartcode stack-large">
        <h1>q-art-code</h1>
        <NewQuestion updateList={updateList} />
        <h2 id="list-heading">
          Current
        </h2>
        <ul
          role="list"
          className="question-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {questions.map(question => (
            <Prompts
              _id={question._id}
              key={question._id}
              name={question.question}
              url={question.url}
              updateList={updateList}
            />
          ))}
        </ul>
      </div>

      {/* <DrawCanvas url={"398d0596-0b3c-4502-80d5-409a91c9cf49"} /> */}
      {/* <ImageGrid url={"398d0596-0b3c-4502-80d5-409a91c9cf49"} /> */}
    </>
  )
}


export default App;
