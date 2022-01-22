import logo from './logo.svg';
import './App.css';
import Prompts from "./components/Prompts";
import NewQuestion from "./components/NewQuestion";


function App(param) {

  const questionList = param.questions.map(question => (
    <Prompts
      id={question.id}
      name={question.name}
      key={question.id}
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
        {questionList}
      </ul>
    </div>
  );
}


export default App;
