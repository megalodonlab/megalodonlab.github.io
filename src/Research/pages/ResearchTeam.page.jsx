import { Link } from 'react-router-dom'
import { teams } from '../../assets/data/team.data'
import { LINK_ROUTES } from '../../assets/js/LINK_ROUTES'
import { UserCard } from '../../Components/UserCard/UserCard'

import {ResearchPageContainer} from "./../components/ResearchPageContainer";

export function ResearchTeam(){

  const TEAM_MEMBERS_NAMES = ["jayed", "zihan", "parsh"];


  return (
        <ResearchPageContainer title="Research - Team">
            <h2 className='text-center'> Research Members </h2>
            <div className="usercard__container">
              {
                teams.map( (userData)=> {
                  if ( TEAM_MEMBERS_NAMES.includes(userData.linkName) ) 
                    return (
                        <UserCard
                            key={userData.email}
                            link={userData.linkName} 
                            image={userData.image} 
                            name={userData.name} 
                            department={userData.department} 
                            googleEmail={"mailto:" +userData.email }
                            linkedInLink = {userData.linkedIn} 
                        />
                    )
                } )
              }
          </div>
        </ResearchPageContainer>
  )
}