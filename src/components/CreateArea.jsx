import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import {Button, Modal} from 'react-bootstrap';
import {HuePicker} from "react-color";

const CreateArea = (props) => {
  let [isExpanded, setExpanded] = useState(false);
  const handleClose = () => setExpanded(false);
  const handleShow = () => {
    setBanner({
      title: "",
      content: "",
      url: "",
      color:"#000"
    });
    setExpanded(true);
  };

  let [banner, setBanner] = useState({
    title: "",
    content: "",
    url: "",
    color:"#000"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBanner(prevBanner => {
      return {
        ...prevBanner,
        [name]: value
      };
    });
  }

  const submitNote = (event) => {
    props.onAdd(banner);
    handleClose();
    event.preventDefault();
  }

  const handleColor = (updatedColor) => {
    setColor(updatedColor.hex);
    setBanner(prevBanner => {
      return {
        ...prevBanner,
        color: updatedColor.hex
      };
    });

  }
  let [color, setColor] = useState("#fff");

  return (
    <div className="note">
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
              autoComplete="off"
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
          <HuePicker color = {color} onChange = {handleColor} />
          <h2>The color you picked: {color} </h2>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CreateArea;
