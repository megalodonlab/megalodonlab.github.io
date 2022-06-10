import { Link } from "react-router-dom"
import { LINK_ROUTES } from "../../assets/js/LINK_ROUTES"

export function ResearchSideNav() {
    return (
         <div className="side-nav-left">
            <p><Link to={LINK_ROUTES.RESEARCH_INDEX}>Index</Link></p>
            <p><Link to={LINK_ROUTES.RESEARCH_PROG}>What is going on?</Link></p>
            <p><Link to={LINK_ROUTES.RESEARCH_TEAM}>Team</Link></p>
            <p><Link to={LINK_ROUTES.INDEX}>Return Website</Link></p>
        </div>
    );
}