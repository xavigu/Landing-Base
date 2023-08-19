import React from "react";

export const GalleryHexa = props => {

  const data = [
    { thumb: "https://picsum.photos/id/1040/300/300", alt: "a house on a mountain" },
    { thumb: "https://picsum.photos/id/106/300/300", alt: "sime pink flowers" },
    { thumb: "https://picsum.photos/id/136/300/300", alt: "big rocks with some trees" },
    { thumb: "https://picsum.photos/id/1039/300/300", alt: "a waterfall, a lot of tree and a great view" },
    { thumb: "https://picsum.photos/id/110/300/300", alt: "a cool landscape" },
    { thumb: "https://picsum.photos/id/1047/300/300", alt: "inside a town between two big buildings" },
    { thumb: "https://picsum.photos/id/1057/300/300", alt: "a great view of the sea above the mountain" },
  ];

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
                {data.map(({ thumb, alt }, index) => (
                        <img key={index} src={thumb}  alt={alt} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
