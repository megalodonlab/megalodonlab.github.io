import { Envelope, LinkedinLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { LINK_ROUTES } from "./../../assets/js/LINK_ROUTES"



export function UserCard( props ) {
  return (
    <div className="usercard__subcontainer">
      <img src={props.image} alt={props.name} />

      <div className="usercard__content">
        <h1 className="usercard__title">{props.name}</h1>
        <p className="usercard__subtitle">{props.department}</p>
        <div className="usercard__icons">

        { props.googleEmail && (
           <a href={props.googleEmail} target="new">
            <Envelope size={25}/>
          </a> 
        ) }

          { props.linkedInLink && ( 
            <a href={props.linkedInLink} target="new">  
              <LinkedinLogo size={25}/>
            </a>
          ) }

          <div>
            <Link className="button_profile" to={`${LINK_ROUTES.TEAM}/${props.link}`} > Profile </Link>
          </div>
        </div>
      </div>
    </div>
  )
}