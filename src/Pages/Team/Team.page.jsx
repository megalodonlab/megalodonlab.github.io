import { teams } from '../../assets/data/team.data';

import { UserCard } from '../../Components/UserCard/UserCard'


export function Team(){
  return (

    <>
      <section className="team__container">
          <h1 className="section-title text-center mb-5">Our Team</h1>

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