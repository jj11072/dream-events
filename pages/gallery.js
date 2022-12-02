import React, { useState } from "react";

const image1 = "kids-party.jpg";
const image2 = "party.jpg";
const image3 = "gender.jpg";
const image4 = "dinner-party.jpg";
const image5 = "babyshower.jpg";
const image6 = "dinner.jpg";
const images = [image1, image2, image3, image4, image5, image6];

const gallery = () => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const imageCards = images.map(image => (
    <img
      className="image-card"
      onClick={() => showImage(image)}
      src={image}
    />
  ));

  const showImage = image => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = e => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = e => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="mt-8 grid grid-rows-3 gap-16 grid-flow-col ">{imageCards}</div>

      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <button className="lightbox_btn" onClick={showPrev}>
            ⭠
          </button>
          <img id="lightbox-img" src={imageToShow}></img>
          <button className="lightbox_btn" onClick={showNext}>
            ⭢
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default gallery