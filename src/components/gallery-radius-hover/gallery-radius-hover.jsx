import './gallery-radius-hover.css'

export const GalleryRadiusHover = (props) => {
  return (
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

  )
}
