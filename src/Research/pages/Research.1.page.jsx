import { RESEARCH_PROJECTS } from "../../assets/data/research_projects.data"
import {ProjectHeader} from "./../../Components/ProjectsContainer/ProjectHeader";

export function ResearchProject1() {

    const project = RESEARCH_PROJECTS[0];

    return (
    <div className="container mb-5 ">

        <ProjectHeader project={project} />
        
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