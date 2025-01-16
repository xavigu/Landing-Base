import './gallery-rotate-3d.css';
import React from "react";

export const GalleryRotate3D = ({ data }) => {
  return (
    <div id='portfolio' className="carousel-container">
      <div className="carousel">
        <div className="carousel-control-button left">
          <input type="radio" name="carousel-control-input" />
        </div>
        <div className="carousel-control-button right">
          <input type="radio" name="carousel-control-input" checked />
        </div>

        <div className="carousel-rotation-direction">
          <ul className="carousel-item-wrapper" style={{ '--_num-elements': 11 }}>
            {data && data.map(({ title, image, ref }, index) => (
                <li key={index + 1} className="carousel-item"
                  style={{
                    '--_index': index + 1,
                    '--_image-url': `url(${image})`,
                  }}
                >
                  <a href={ref} target="_blank">
                    {title}
                  </a>
                </li>
            ))}
            <li className="carousel-ground" />
          </ul>
        </div>
      </div>
    </div>
  );
};
