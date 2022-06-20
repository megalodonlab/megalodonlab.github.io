import { Link } from "react-router-dom"
import { teams } from "../../assets/data/team.data"
import { LINK_ROUTES } from "../../assets/js/LINK_ROUTES"

export function ProjectHeader( {project} ) {
    return (
        <>
            <p className="section-title text-center"> {project.title} </p>
            <p>&nbsp;</p>
            <p><strong>Start date</strong>: {project.startDate} </p>
            <p><strong>End date:</strong> {project.endDate} </p>
            <p>&nbsp;</p>

            <p><strong>Team member:</strong></p>
            <ul>
                {teams.map( person => {
                    if ( project.team.includes(person.linkName) )
                    return (
                        <li key={person.personalEmail}> 
                            <Link to={`${LINK_ROUTES.TEAM}/${person.linkName}`} > {person.name} </Link>
                        </li>
                    );
                })}
            </ul>

            <p>&nbsp;</p>
        </>
    )
}