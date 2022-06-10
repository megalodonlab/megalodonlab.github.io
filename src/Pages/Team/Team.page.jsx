import { teams } from '../../assets/data/team.data';
import { HeaderImage } from '../../Components/Header/HeaderImage'

import { UserCard } from '../../Components/UserCard/UserCard'


export function Team(){
  return (

    <>
      <HeaderImage />
      <section className="team__container">
          <h1 className="team__title">Our Team</h1>
          <p className="team__subtitle">Find out more about our cool team and their contribution at the lab !</p>

          <div className="usercard__container">
              {
                teams.map( (userData)=> {

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
          
      </section>
    </>
  )
}