import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import startingBanners from "./startingBanners";
import CreateArea from "./CreateArea";
import {Modal, Carousel} from 'react-bootstrap';

function App() {
  console.log(startingBanners);
  const [banners, setBanners] = useState([...startingBanners]);

  function addBanner(newBanner) {
    setBanners(prevBanners => {
      return [...prevBanners, newBanner];
    });
  }

  function deleteBanner(id) {
    setBanners(prevNotes => {
      return prevNotes.filter((bannerItem, index) => {
        return index !== id;
      });
    });
  }

  const [isExpanded, setExpanded] = useState(false);
  const [index, setIndex] = useState(0);
  const handleClose = () => setExpanded(false);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  function onBannerClick(id) {
    setIndex(id);
    setExpanded(true);
  }

  return (
    <div>
      <Header />
      {banners.map((bannerItem, index) => {
        return (
          <Banner
            key={index}
            id={index}
            title={bannerItem.title}
            content={bannerItem.content}
            url={bannerItem.url}
            onDelete={deleteBanner}
            onBannerClick = {onBannerClick}
          />
        );
      })}
      <CreateArea onAdd={addBanner} />
      <Modal centered= {true} show={isExpanded} onHide={handleClose}>
        <Modal.Body>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        {banners.map((bannerItem, index) => {
          return (
            <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={bannerItem.url}
                  alt="A slide"
              />
              <Carousel.Caption>
                  <h3>{bannerItem.title}</h3>
                  <p>{bannerItem.content}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        </Carousel>
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
}

export default App;
