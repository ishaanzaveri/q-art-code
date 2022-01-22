import './App.css';
import Prompts from "./components/Prompts";
import NewQuestion from "./components/NewQuestion";
import { useEffect, useState } from 'react';


function App() {

  
  const [questions, modifyQuestions] = useState([])

  useEffect(() => {
    fetch("/api/qurl").then(data => data.json()).then(data => modifyQuestions(data))
  }, [])

  const questionList = questions.map(question => (
     <Prompts
       id={question._id}
       key={question._id}
       name={question.question}
       url={question.url}
     />
   ));



  return (
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
      { questionList }
      </ul>
    </div>
  );
}


export default App;
