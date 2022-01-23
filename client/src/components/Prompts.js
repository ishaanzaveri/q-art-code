import React, { useEffect, useState } from 'react';
import ImageGrid from './ImageGrid';
import QRCode from "react-qr-code";
import { Link } from 'react-router-dom';

export default function Prompts(param) {
  const [viewer, setViewer] = useState(param.name)
  const [url, setUrl] = useState(param.url);
  const [word, setWord] = useState("");
  const [size, setSize] = useState(200);
  const [qrCode, setQrCode] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  // useEffect(() => {
  //   setQrCode
  //     (`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&charset-source="UTF-8"`);
  // }, [word, size]);

  function handleViewing(e) {
    e.preventDefault();
    console.log(window.location + url);
    setWord(window.location + '#/' + url + "/edit");
    setIsOpened(wasOpened => !wasOpened);
    //alert(viewer)
  }

  function handleDeletion(e) {
    e.preventDefault();
    console.log(param);
    fetch("api/qurl/" + param._id, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(data => {
        param.updateList(data);
        console.log('Success:', data)
      })
      .catch((error) => {

        console.error('Error:', error)

      })

  }

  function handleComposite(e) {
    e.preventDefault();
    setShowFinal(showFinal => !showFinal);
    //alert("img")
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
      {/* {isOpened && <img className="photo" src={qrCode} alt="" />} */}
      {isOpened && <Link to={param.url + "/edit"} target="_blank"><QRCode value={word} /></Link>}
      <div className="finalIMG-display">
        {showFinal && <div className='photo'>
          <ImageGrid id={url} />
        </div>}
      </div>
    </li>
  );
}
