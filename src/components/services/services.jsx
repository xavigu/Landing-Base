import './services.css'
export const Services = ({ services }) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          {services
            ? services.map((service, i) => (
                <div key={`${service.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={service.icon}></i>
                  <div className='service-desc'>
                    <h3>{service.name}</h3>
                    <p>{service.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
