import { useState } from "react"
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
    const [show, setShow] = useState(false);

    return (
        <div className="container mb-5 ">
            <ProjectHeader project={project} />

            <p className="mt-4"> <b> What is the Purpose? </b></p>
            <p>This project (website) is the front face of our platform (<Link to={LINK_ROUTES.INDEX}>Megalodon Lab</Link>). The main purpose of the website is to be transparent about what we are doing on our platform, what projects we are working on, and what we have worked on. This is our main source of communication to the outside world about the contribution that the platform is making in the software industry. The website also have the <Link to={LINK_ROUTES.CONTACT}>contact</Link> information to discuss new ideas or projects. </p>
            <p>This website serves as a primary resource for the <Link to={LINK_ROUTES.TEAM}>team members</Link> to set up their development environment. The  website also provides a ( <a href={LINK_ROUTES.VERIFY} target="blank">tool</a> ) for the recruiters to check the references if a person has worked or works with us.</p>


            <p className="mt-5"> <b> Technology Part </b></p>
            <div class="solution-tools">
                Tools Used: 
                <span className="ml-2">User Experience</span>
                <span >React</span>
                <span>JavaScript</span>
                <span>AJAX</span>
                <span>JSON</span>
                <span>Database</span>
            </div>

            <p className="mt-4"> <b>User Experience</b> </p>
            <p> We made the website keeping in mind our audience. We understand that not everyone who visits our website would be tech-savvy, so we made considerable efforts to keep the description of most of our research and solutions projects as simple as possible. We constantly get our content reviewed from non-technical people to make sure our ideas are communicated effectively and simple to understand way. </p>


            <p className="mt-4"> <b>Why we used REACT instead of HTML?</b> </p>
            <p> As simple as it is to get started with HTML in the short term, it degrades the user experience as they might have to wait for the page to load every time a new link is clicked, whereas in React, every page is loaded at starting, so users don't have to wait for any new pages to be loaded. </p>

            <p className="mt-4"> <b>Open Source</b> </p>
            <p> We are an open-source platform. This website is an open source <a href={LINK_ROUTES.SOLUTION_PROJ_1_GITHUB}>project</a>, so anyone with access to internet could look into the code. </p>

            <button onClick={ ()=> { setShow(!show) } } className="btn-transparent my-4 d-flex justify-content-center align-items-center">Get Technical (Developer Friendly) </button>

            {
                show &&
                (
                    <div className="mt-5">
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
        </div>
    )
}