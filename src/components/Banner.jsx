import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import GetAppIcon from '@material-ui/icons/GetApp';
import {Modal} from 'react-bootstrap';

function Banner(props) {

  function handleDeleteClick(event) {
    props.onDelete(props.id);
    event.stopPropagation()
  }

  function handleDownloadClick(event) {
    setExpanded2(true);
    event.stopPropagation();
  }
  

  function handleClick(event) {
    props.onBannerClick(props.id);
    event.stopPropagation();
  }

  function handleDownload2(event) {
      const el = document.createElement('textarea');
      el.value = props.url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
  }

  function handleDownload3(event) {
    const el = document.createElement('textarea');
      el.value = JSON.stringify({
        title: props.title,
        content: props.content,
        url: props.url
      });
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    
    
  }

  const [isExpanded2, setExpanded2] = useState(false);
  function handleCloseDownload(event) {
    setExpanded2(false);
  }
 
  return (
    <div>
      <div onClick={handleClick} className="note">
        <img src={props.url} alt={props.id}></img> 
        <h1 style = {{color: props.color}}>{props.title.substring(0, 30)}</h1>
        <button className="delete-button" onClick={handleDeleteClick}>
          <DeleteIcon />
        </button>
        <button className="download-button" onClick={handleDownloadClick}>
          <GetAppIcon />
        </button>
      </div>
      <Modal centered= {true} show={isExpanded2} onHide={handleCloseDownload}>
          <Modal.Body>
          <div className="download-field">
            <ul>
              <li>
                <p>Скачать как .png</p>
                <a href={props.url} download={props.id + ".png"}><button><GetAppIcon /></button></a>
              </li>
            </ul>
            <ul>
              <li>
                <p>Скопировать ссылку на картинку</p>
                <button onClick={handleDownload2}>
                  <GetAppIcon />
                </button>
              </li>
            </ul>
            <ul>
              <li>
                <p>Скопировать json</p>
                <button onClick={handleDownload3}>
                  <GetAppIcon />
               </button>
              </li>
            </ul>
            </div>
          </Modal.Body>
        </Modal>
      </div>
  );
}

export default Banner;
