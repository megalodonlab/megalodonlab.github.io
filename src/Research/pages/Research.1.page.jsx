import { Link } from "react-router-dom"
import { teams } from "../../assets/data/team.data"
import { LINK_ROUTES } from "../../assets/js/LINK_ROUTES"

export function ResearchProject1() {

    const names = ["jayed", "parsh", "zihan"];


    return (
    <div className="container mb-5 ">
        <p className="section-title text-center">Software on Product Prediction and Evaluation (Prototype)</p>
        <p>&nbsp;</p>
        <p><strong>Start date</strong>: May 2022</p>
        <p><strong>End date:</strong> Present</p>
        <p>&nbsp;</p>

        <p><strong>Team member:</strong></p>
        <ul>
            {teams.map( (person) => {
                if ( names.includes(person.linkName) )
                return (
                    <li> 
                        <Link to={`${LINK_ROUTES.TEAM}/${person.linkName}`} > {person.name} </Link>
                    </li>
                );
            })}
        </ul>

        <p>&nbsp;</p>
        <p><strong>Project - Overview:</strong></p>
        <p>This project is focused on the development of algorithms that can analyze retail data and make a prediction based on its understanding. For demonstration purposes, we have picked java as our primary language and the prototype is a desktop application capable of running on macOS, Windows, and Linux environments.</p>
        <p><strong>Project - stage 1:</strong></p>
        <p>Details</p>
        <p><strong>Project - stage 2:</strong></p>
        <p>Details</p>
        <p><strong>Project - stage 3:</strong></p>
        <p>Details</p>
        <p><strong>Project - stage 4:</strong></p>
        <p>Details</p>
        <p><strong>Result(s):</strong></p>
        <p>Details</p>
        <p>&nbsp;</p>
        <p><strong>Data sheet:</strong></p>
        <p><strong>Reference:</strong></p>
        <p>&nbsp;</p>
        <p><strong>Product information (PDF): </strong>Download (Coming Soon)</p> 
        <p><strong>Source code: </strong>GitHub</p>
        <p><strong>Package: </strong>Download</p>
        <p>&nbsp;</p>
        <p><strong>Updates:</strong></p>

        <ul>
            <li>1 May 2022 - Initial panning</li>
            <li>19 June 2022 - Complete stage 1</li>
        </ul>
    </div>
    )
}