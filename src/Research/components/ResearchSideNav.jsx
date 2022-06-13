import { Link } from "react-router-dom"
import { LINK_ROUTES } from "../../assets/js/LINK_ROUTES"

export function ResearchSideNav() {
    return (
        //  <div className="research-nav">
        //     <p><Link to={LINK_ROUTES.RESEARCH_INDEX}>Index</Link></p>
        //     <p><Link to={LINK_ROUTES.RESEARCH_PROG}>What is going on?</Link></p>
        //     <p><Link to={LINK_ROUTES.RESEARCH_TEAM}>Team</Link></p>
        //     <p><Link to={LINK_ROUTES.INDEX}>Return Website</Link></p>
        // </div>

        <ul class="nav d-flex py-5">
            <li class="nav-item">
                <Link class="nav-link" to={LINK_ROUTES.RESEARCH_INDEX}>Index</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to={LINK_ROUTES.RESEARCH_PROG}>What's going on?</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to={LINK_ROUTES.RESEARCH_TEAM}>Team</Link>
            </li>
        </ul>
    );
}