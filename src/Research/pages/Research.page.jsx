import { Link } from 'react-router-dom'
import { teams } from '../../assets/data/team.data'
import { LINK_ROUTES } from '../../assets/js/LINK_ROUTES'

import {ResearchPageContainer} from "./../components/ResearchPageContainer";


export function Research(){

  const TEAM_MEMBERS_NAMES = ["jayed", "zihan", "parsh"];


  return (
        <ResearchPageContainer title="Research Index">
            <h2> Research Members </h2>
            <h4>Team:
            {
              teams.map( team => {
                if ( TEAM_MEMBERS_NAMES.includes(team.linkName) )
                  return (
                    <Link className='mr-3 text-info' to={LINK_ROUTES.TEAM + "/" + team.linkName}>  {team.name} </Link>
                  )
              return <></>;
              } )
            }
            </h4>

            <p className='lead'> <strong>NOTE: </strong> We are still in the process of documenting our on-going research.</p>
              
        </ResearchPageContainer>
  )
}