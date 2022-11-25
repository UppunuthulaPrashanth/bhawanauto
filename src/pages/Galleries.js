import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ASSETS } from "../config/Constants";
import { getGallery } from "../redux/features/cms/bannerSlice";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Loader from "../components/loader/Loader";

export default function Galleries() {
  const [photos, setPhotos] = useState([]);
  const [isPhotos, setIsPhotos]=useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGallery()).then((response) => {
      var oldJson=response.payload;
      if(oldJson){
        var newJson = oldJson.map(rec => {
          return {
            'src':ASSETS+"gallery/"+ rec.image,
            'width': 4,
            'height': 3,
             }
          })
          setPhotos(newJson)
      }
    });
  }, []);
  


  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };



  return (
    <>
      <section>
        <div className="slider_section_description mb-5">
          <div className="auto-container">
            <div className="inner-container pt-5">
              <div className="sec-title text-center mb-3">
                <h2>Image Gallery</h2>
              </div>
            </div>

            <div className="row">
              <Gallery photos={photos} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map((x) => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
