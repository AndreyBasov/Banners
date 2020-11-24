import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import startingBanners from "./startingBanners";
import CreateArea from "./CreateArea";
import {Modal, Carousel} from "react-bootstrap";

const App = () => {
  let [banners, setBanners] = useState([...startingBanners]);

  const addBanner = (newBanner) => {
    setBanners(prevBanners => {
      return [...prevBanners, newBanner];
    });
  }

  const deleteBanner = (id) => {
    setBanners(prevNotes => {
      return prevNotes.filter((bannerItem, index) => {
        return index !== id;
      });
    });
  }

  let [index, setIndex] = useState(0);
  const selectStory = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let [isExpanded, setExpanded] = useState(false);
  const closeModal = () => setExpanded(false);


  const onBannerClick = (id) => {
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
            color = {bannerItem.color}
            onDelete={deleteBanner}
            onBannerClick = {onBannerClick}
          />
        );
      })}
      <CreateArea onAdd={addBanner} />
      <Modal centered= {true} show={isExpanded} onHide={closeModal}>
        <Modal.Body>
          <Carousel activeIndex={index} onSelect={selectStory}>
          {banners.map((bannerItem, index) => {
            return (
              <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerItem.url}
                    alt="A slide"
                />
                <Carousel.Caption>
                    <h3 style ={{color : bannerItem.color}}>{bannerItem.title.substring(0, 30)}</h3>
                    <p style={{color : bannerItem.color, textAlign: "justify"}}>{bannerItem.content.substring(0, 400)}</p>
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
