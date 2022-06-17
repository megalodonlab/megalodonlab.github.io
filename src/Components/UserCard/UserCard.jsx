import { Envelope, LinkedinLogo, ArrowCircleRight } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { LINK_ROUTES } from "./../../assets/js/LINK_ROUTES"



export function UserCard( props ) {
  return (
    <div className="usercard__subcontainer">
      <img src={props.image} alt={props.name} />

      <div className="usercard__content">
        <h2 className='m-0 text-center'>{props.name}</h2>
        <p className="usercard__subtitle text-center">{props.department}</p>
        <div className="usercard__icons">

        {/* { props.googleEmail && (
           <a href={props.googleEmail} target="new">
            <Envelope size={25}/>
          </a> 
        ) }

          { props.linkedInLink && ( 
            <a href={props.linkedInLink} target="new">  
              <LinkedinLogo size={25}/>
            </a>
          ) } */}
        </div>

        <Link className="button_profile" to={`${LINK_ROUTES.TEAM}/${props.link}`} > Profile <ArrowCircleRight className='ml-2' size={32} /> </Link>
      </div>
    </div>
  )
}