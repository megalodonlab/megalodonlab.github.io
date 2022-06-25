import { Link } from "react-router-dom"; 
import { SOLUTION_PROJECTS } from "../../assets/data/solution_projects.data"
import {ProjectHeader} from "./../../Components/ProjectsContainer/ProjectHeader";
import Screenshot1 from "./../../assets/img/solution/project-1-web-transformation/solution-1.1.png";
import Screenshot2 from "./../../assets/img/solution/project-1-web-transformation/solution-1.2.png";
import Screenshot3 from "./../../assets/img/solution/project-1-web-transformation/solution-1.3.png";
import { LINK_ROUTES } from "../../assets/js/LINK_ROUTES"
import { teams } from "../../assets/data/team.data"

export function SolutionProject1() {

    const project = SOLUTION_PROJECTS[0];
    const person  = teams[2];

    return (
        <div className="container mb-5 ">
            <ProjectHeader project={project} />

            <div class="solution-tools">
                <b>Tools Used: </b>
                <span className="ml-2">React</span>
                <span>JavaScript</span>
                <span>AJAX</span>
                <span>JSON</span>
                <span>Database</span>
            </div>

            <p>
                This seems like a normal website, but internally it is built as the data based app. To update the most parts of the website, we don't create new HTML pages or change the static content, all we have to do is change the data values in the JSON format, and the website is updated accordingly.
                This is keeping in mind the maintainability and readability of the code.
            </p>

            <p className="mt-5"> <b> How the website uses data? </b></p>
            <div class='solution-image mb-2'>
                <img src={Screenshot1} alt="Data File" />
            </div>
            <p>This image shows how the data is stored for this page, updating the data in this, will automatically update the website.</p>
            <div class='solution-image mt-5 mb-2'>
                <img src={Screenshot2} alt="Data File" />
            </div>
            <p>This image shows how the data of team members is stored. This data is used to create this Page (<Link to={`${LINK_ROUTES.TEAM}/${person.linkName}`} > {person.name} </Link>).</p>


            <p className="mt-5"> <b>Modules</b> </p>
            <p>All the parts of the website, which would remain same on all the pages, are made into a module (React Component). So, let's say we want to change a link in footer, instead of changing making changes on all the pages, we just need to make a change to the module, and changes would be reflected all over the website.</p>
             <div class='solution-image mt-2 mb-2'>
                <img src={Screenshot3} alt="Modules" />
            </div>
            <p>This image shows how almost everything is made into modules to divide content into smaller files. This is done for reusability purposes.</p>


        </div>
    )
}