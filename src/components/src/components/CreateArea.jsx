import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import {Button, Modal} from 'react-bootstrap';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const handleClose = () => setExpanded(false);
  const handleShow = () => {
    setBanner({
      title: "",
      content: "",
      url: ""
    });
    setExpanded(true);
  };

  const [banner, setBanner] = useState({
    title: "",
    content: "",
    url: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setBanner(prevBanner => {
      return {
        ...prevBanner,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(banner);
    handleClose();
    event.preventDefault();
  }

  return (
    <div className="note" style = {{position: "relative"}}>
      <Button onClick = {handleShow}><AddIcon /></Button>
      <Modal centered= {true} show={isExpanded} onHide={handleClose}>
        <Modal.Body>
          <p className = "form-title">Enter the parameters of a new banner!</p>
          <form className="create-note">
            <input
                name="title"
              onChange={handleChange}
              value={banner.title}
              placeholder="Title"
              autocomplete="off"
            />
            <hr/>
            <textarea
              name="content"
              onChange={handleChange}
              value={banner.content}
              placeholder="Content"
              rows="3"
            />
            <hr/>
            <textarea
              name="url"
              onChange={handleChange}
              value={banner.url}
              placeholder="URL of an image"
              rows="1"
            />
            <Zoom in={isExpanded}>
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CreateArea;
