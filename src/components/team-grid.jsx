import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './team-grid.css'
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export const TeamGrid = (props) => {
  return (
    <div id='team-grid' className="team-container">
      <section>
        <span>meet our</span>
        <h2>Team</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, praesentium veritatis voluptatibus ut consequuntur quas consequatur omnis id rem obcaecati.</p>
        <span className="bg-watermark">team</span>
        <div className="cards">
          {props.data 
            ? props.data.map(({ img, name, job, twitter, linkedin }, index) => (
              <div className="card">
                <img key={index} src={img} alt={name}/>
                <div className="card-content">
                  <h3>{name}</h3>
                  <p>{job}</p>
                  <ul>
                    <li><a href={twitter} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                    <li><a href={linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                  </ul>
                </div>
              </div>
            ))
            : "no team data"
          }
        </div>
      </section>
    </div>

  )
}
