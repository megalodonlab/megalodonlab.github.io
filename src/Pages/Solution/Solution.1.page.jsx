import { SOLUTION_PROJECTS } from "../../assets/data/solution_projects.data"
import {ProjectHeader} from "./../../Components/ProjectsContainer/ProjectHeader";

export function SolutionProject1() {

    const project = SOLUTION_PROJECTS[0];

    return (
        <div className="container mb-5 ">
            <ProjectHeader project={project} />
            <div>
                Note: In Development
            </div>
        </div>
    )
}