import React, { useState } from "react";


export default function Prompts(param) {
  const [viewer, setViewer] = useState(param.name)

  function handleViewing(e) {
    e.preventDefault();
    alert(viewer)
  }

  function handleDeletion(e) {
    e.preventDefault();

    fetch("api/qurl/" + param.id, {
      method: "DELETE",
    })
    .then(response => {
      response.clone().json()
      console.log('JSON: ', response.json())
      })
      .then(data => {
        param.updateList(data);
        console.log('Success:' , data)
      })
      .catch((error) => {
        
        console.error('Error:' , error)
        
      })
    
  }

  return (
    <li className="question stack-small">
      <div className="c-cb">
        <label className="question-label" htmlFor={param.id}>
          {param.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={handleViewing}>
          View
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={handleDeletion}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
