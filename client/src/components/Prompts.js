import React, { useEffect, useState } from 'react';


export default function Prompts(param) {
  const [viewer, setViewer] = useState(param.name)
  const [word, setWord] = useState("");
  const [size, setSize] = useState(200);
  const [qrCode, setQrCode] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
	setQrCode
(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}`);
}, [word, size]);

  function handleViewing(e) {
    e.preventDefault();
    setWord(viewer);
    setIsOpened(wasOpened => !wasOpened);
    //alert(viewer)
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

  function handleComposite(e) {
    e.preventDefault();
    alert("img")
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
          onClick={handleViewing}
        >
          Toggle QR View
        </button>

        <button
          type="button"
          className="btn"
          onClick={handleComposite}
        >
          Final Image
        </button>

        <button
          type="button"
          className="btn btn__danger"
          onClick={handleDeletion}
        >
          Delete
        </button>

      </div>
      {isOpened && <img src={qrCode} alt="" />}
      <div className="finalIMG-display">

      </div>
    </li>
  );
}
