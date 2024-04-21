import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = props.data ? props.data.map(obj => obj.thumb.replace("-small", "-large")) : props.data;

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data 
              ? props.data.map(({ title, thumb }, index) => (
                <div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item cursor">
                    <div className="hover-bg">
                      <div className="hover-text">
                        <h4>{title}</h4>
                      </div>
                      <img src={thumb} className="img-responsive" alt="Project Title" />{" "}
                    </div>
                  </div>
                </div>
              ))
              : "no gallery data"
            }
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 9 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
