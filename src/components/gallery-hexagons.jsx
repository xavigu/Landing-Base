import React from "react";

export const GalleryHexa = (props) => {
  console.log('props: ', props)

  return (
    <div id="portfolio-hexa" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <div className="row">
          <div className="portfolio-hexa-items">
            <div class="gallery">
                {props.data 
                  ? props.data.map(({ thumb, alt }, index) => (
                          <img key={index} src={thumb}  alt={alt} />
                  ))
                  : "no gallery data"
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
