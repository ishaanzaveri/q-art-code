import React, { useEffect, useState } from "react";


function NewQuestion(param) {
  const [newQuestion, setNewQuestion] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    const newQART = {
      "question": newQuestion
    }

    //post new question
   
      fetch("/api/qurl", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newQART)
      })
      .then(response => response.json())
      .then(data => {
        param.updateList(data);
        setNewQuestion("");
        console.log('Success:' , data)
      })
      .catch((error) => {
        console.error('Error:' , error)
      })

    }

  function handleChange(e) {
    e.preventDefault();
    setNewQuestion(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-question-input" className="label__lg">
          Create a new q-art project!
        </label>
      </h2>
      <input
        type="text"
        id="question-input"
        className="input input__lg"
        value={newQuestion}
        name="text"
        autoComplete="off"
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Create
      </button>
    </form>
  );
}

export default NewQuestion;
