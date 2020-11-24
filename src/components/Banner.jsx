import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import GetAppIcon from '@material-ui/icons/GetApp';
import {Modal} from 'react-bootstrap';

function Banner(props) {

  const handleDeleteClick = (event) => {
    props.onDelete(props.id);
    event.stopPropagation()
  }

  const handleDownloadClick = (event) => {
    setExpanded2(true);
    event.stopPropagation();
  }
  

  const openStories = (event) => {
    props.onBannerClick(props.id);
    event.stopPropagation();
  }

  const handleDownload2 = (event) => {
      const el = document.createElement('textarea');
      el.value = props.url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
  }

  const handleDownload3 = event => {
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

  let [isExpanded2, setExpanded2] = useState(false);
  const closeModal = (event) => {
    setExpanded2(false);
  }
 
  return (
    <div>
      <div onClick={openStories} className="note">
        <img src={props.url} alt={props.id}></img> 
        <h1 style = {{color: props.color}}>{props.title.substring(0, 30)}</h1>
        <button className="delete-button" onClick={handleDeleteClick}>
          <DeleteIcon />
        </button>
        <button className="download-button" onClick={handleDownloadClick}>
          <GetAppIcon />
        </button>
      </div>
      <Modal centered= {true} show={isExpanded2} onHide={closeModal}>
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
