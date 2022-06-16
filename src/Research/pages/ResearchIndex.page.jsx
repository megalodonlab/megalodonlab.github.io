import { Link } from 'react-router-dom'
import { LINK_ROUTES } from '../../assets/js/LINK_ROUTES'



export function ResearchIndex(){

  return (
    <div className='container research'>

      <h2 className='section-title text-center'> Research </h2>

      <div className='py-2 pb-5 container border border-primary'>
        
        <div className="row">

          <div className="col-md-3">
            <div className="side-nav-filters">
              <h3 className='mt-0 text-uppercase '> Filters </h3>

              <div className="forms">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="currentBox" />
                  <label class="form-check-label" for="currentBox">
                    Current
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="completedBox" />
                  <label class="form-check-label" for="completedBox">
                    Completed
                  </label>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-9">
            <div className='form-container mb-5'>
              <input type="text" className='form-control' placeholder='Search by Title' />
            </div>

            <div className='projects'>

              <div className="project">
                <h2 className='project-title'> Software on Product Prediction and Evaluation </h2>
                <small>Duration: April 2022 - Current</small>
                <p>Description</p>
                
                <div className='mt-5 mb-3'>
                  <Link class="btn-transparent" to={LINK_ROUTES.RESEARCH_PROJ_1}>Learn More</Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      
      </div>

    </div>
  )
}