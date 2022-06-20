import { useState } from 'react'
import { Link } from 'react-router-dom'



export function ProjectsContainer(props){

  const [userInput, setUserInput]     = useState("");
  const [isCompleted, setIsCompleted] = useState("");

  let filteredProjects = props.projects;

  if (userInput.length > 0)
    filteredProjects = props.projects.filter( project => project.title.toLowerCase().includes(userInput) )

  if (isCompleted === true || isCompleted === false)
     filteredProjects = filteredProjects.filter( project => project.completed === isCompleted )


  function clearHandler() {
    setIsCompleted("");
    const inputs = document.querySelectorAll( "#clear-buttons input" );
    inputs.forEach( input => input.checked = false )
  }

  return (
    <div className='container research'>

      <h2 className='section-title text-center'> {props.title} </h2>

      <div className='py-2 pb-5 container border border-primary'>
        
        <div className="row">

          <div className="col-md-3">
            <div className="side-nav-filters mb-5">
              <h3 className='mt-0 text-uppercase '> Filters </h3>

              <div id='clear-buttons' className="forms">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="selectorCheckbox" value="" id="currentBox" onChange={ ()=> setIsCompleted(false) } />
                  <label className="form-check-label" htmlFor="currentBox">
                    Current
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="selectorCheckbox" value="" id="completedBox" onChange={ ()=> setIsCompleted(true) } />
                  <label className="form-check-label" htmlFor="completedBox">
                    Completed
                  </label>
                </div>

                <button className='clear-button' onClick={ clearHandler }>Clear</button>
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
                    <small> Duration: {project.startDate} | { project.completed ? "Completed" : "In Progress" } </small>
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