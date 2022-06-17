import { useParams } from 'react-router-dom'
import { teams } from '../../assets/data/team.data';

export function TeamProfile(){

    let params = useParams();

    const userData = teams.find( (userData) => {
        return userData.linkName === params.link;
    } );



  return (
    <>

      <section className="templatemo-container section-shadow-bottom">
        <div className="container">

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className='usercard__container'>
                <img src={userData.image} alt="Welcome divider" className="profile-picture" />
              </div>
            </div>
            
            <div className="col-lg-8 col-md-8 col-sm-8">
              <p className="text-left  h1"> {userData.name} </p>
              <p className="text-left "><strong> {userData.department} </strong> <small> [ {userData.duration} ] </small> </p> 
              <small  className="text-left"> <span className='hg-color'> {userData.email}  </span> | <span className='hg-color'> {userData.personalEmail && userData.personalEmail}</span> </small>
              <p className="justify-text "> {userData.bio}  </p>
            </div>

          </div>
          
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <br/>
              <p className="text-left  h4">Connect</p>

              { userData.email &&  ( <p className='d-flex align-items-center justify-content-center'>
                <a href={`mailto:${userData.email}`}> <i className="fa-solid fa-envelope"></i> Email</a>
              </p> )
              }
             
              { userData.personalSite &&  ( 
                <p>
                  <a href={userData.personalSite}><i className="fa fa-globe" aria-hidden="true"></i> Website</a>
                </p> 
                ) }

              { userData.linkedIn &&  ( 
                <p>
                  <a href={userData.linkedIn}> <i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                </p>
               ) }
              

              { userData.github &&  ( 
                <p>
                  <a href={userData.github}> <i className="fa-brands fa-github"></i> GitHub</a>
                </p>
               ) }

             

            </div>
            
            <div className="col-lg-8 col-md-8 col-sm-8">
              <br/>
              <p className="text-left h4">Projects in Megalodon Lab</p>

              <ul className="">
                
                {
                  userData && userData.projects && userData.projects.map( project => {
                    return (
                      <li>{project}</li>
                    )
                  } )
                }

              </ul>

            </div>
          </div>

        </div>
      </section>

    </>
  )
}