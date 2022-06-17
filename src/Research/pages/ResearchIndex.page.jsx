import { useState } from 'react'
import { Link } from 'react-router-dom'
import { researchProjects } from '../../assets/data/research_projects.data'
import { LINK_ROUTES } from '../../assets/js/LINK_ROUTES'



export function ResearchIndex(){

  const [userInput, setUserInput] = useState("");
  let filteredProjects = researchProjects;

  if (userInput.length > 0) {
    filteredProjects = researchProjects.filter( project => project.title.toLowerCase().includes(userInput) )
  }

  return (
    <div className='container research'>

      <h2 className='section-title text-center'> Research </h2>

      <div className='py-2 pb-5 container border border-primary'>
        
        <div className="row">

          <div className="col-md-3">
            <div className="side-nav-filters">
              <h3 className='mt-0 text-uppercase '> Filters </h3>

              <div className="forms">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="currentBox" />
                  <label className="form-check-label" htmlFor="currentBox">
                    Current
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="completedBox" />
                  <label className="form-check-label" htmlFor="completedBox">
                    Completed
                  </label>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-9">
            <div className='form-container mb-5'>
              <input type="text" value={userInput} onChange={(e)=> setUserInput(e.target.value.toLowerCase()) } className='form-control' placeholder='Search by Title' />
            </div>

            <div className='projects'>

            {
              filteredProjects.map( (project)=> {
                return (
                  <div className="project" key={project.title}>
                    <h2 className='project-title'> {project.title} </h2>
                    <small> Duration: {project.title} </small>
                    <p>Description: {project.description} </p>
                    
                    <div className='mt-5 mb-3'>
                      <Link className="btn-transparent" to={project.url}>Learn More</Link>
                    </div>
                  </div>
                );
              } )
            }

            </div>

          </div>

        </div>
      
      </div>

    </div>
  )
}