import './App.css';
import Prompts from "./components/Prompts";
import NewQuestion from "./components/NewQuestion";
import { useEffect, useState } from 'react';
import DrawCanvas from './components/DrawCanvas'
import ImageGrid from './components/ImageGrid';

function App() {

  // const questionList = param.questions.map(question => (
  //   <Prompts
  //     id={question.id}
  //     name={question.name}
  //     key={question.id}
  //   />
  // ));

  const [questions, modifyQuestions] = useState()

  useEffect(() => {
    fetch("/api/qurl").then(data => data.json()).then(data => modifyQuestions(data))
  }, [])


  return (
    <>
      <div className="qartcode stack-large">
        <h1>q-art-code</h1>
        <NewQuestion />
        <h2 id="list-heading">
          Current
        </h2>
        <ul
          role="list"
          className="question-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          { }
        </ul>
      </div>

      <DrawCanvas url={"1d5316c5-3a32-4e46-8311-7868d27923aa"} />
      {/* <ImageGrid url={"1d5316c5-3a32-4e46-8311-7868d27923aa"} /> */}

    </>
  )
}


export default App;
