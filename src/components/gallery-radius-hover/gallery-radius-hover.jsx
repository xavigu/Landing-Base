import './gallery-radius-hover.css'

export const GalleryRadiusHover = (props) => {
  return (
    <div id='portfolio' className="portfolio-container">
      <div className="section-title">
        <h2>Gallery</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
      </div>
      <div className="gallery">
            {props.data 
              ? props.data.map(({ thumb, alt }, index) => (
                <figure key={index} className={index % 2 !== 0 ? "alt" : ""}>
                  <img src={thumb} alt={alt} />
                  <figcaption>{alt}</figcaption>
                </figure>
              ))
              : "no gallery data"
            }
      </div>
    </div>

  )
}
