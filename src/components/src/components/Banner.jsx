import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import GetAppIcon from '@material-ui/icons/GetApp';

function Banner(props) {

  function handleDelete(event) {
    props.onDelete(props.id);
    event.stopPropagation()
  }

  function handleDownload(event) {
    props.onDelete(props.id);
    event.stopPropagation()
  }

  function handleClick() {
    props.onBannerClick(props.id);
  }

  let urlString = props.url;
  return (
    <div onClick={handleClick} className="note" style = {{position: "relative"}}>
      <img src={urlString} alt="image"></img> 
      <h1>{props.title}</h1>
      <button className="delete-button" onClick={handleDelete}>
        <DeleteIcon />
      </button>
      <button className="download-button" onClick={handleDownload}>
        <GetAppIcon />
      </button>
    </div>
  );
}

export default Banner;
