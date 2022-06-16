import { Link } from "react-router-dom";
import { EnvelopeSimple,LinkedinLogo, GithubLogo} from 'phosphor-react'
import { LINK_ROUTES } from "../../assets/js/LINK_ROUTES"


export function Footer() {
  return (
    <>
      <div className="blue-divider effect1">
            <div className="dark-blue-bg"></div>
            <div className="blue-divider-bg-graphic"></div>
            <div className="blue-bg"></div> 
      </div>
      <section className="templatemo-container blue-bg footer-nav effect1">
            <div className="container">
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 footer-block">
                    <nav className=" templatemo-nav-2">
                        <ul>
                            <li><Link to={LINK_ROUTES.TEAM}  target="_self">Creative Team</Link></li>
                            <li><Link to={LINK_ROUTES.PRIVACY} target="_self">Privacy</Link></li>
                            <li><Link to={LINK_ROUTES.ABOUT} target="_self">About</Link></li>
                        </ul>
                    </nav>   
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 footer-block">
                    <ul>
                        <li><Link to={LINK_ROUTES.SOLUTION} target="_self">Solution</Link></li>
                        <li><Link to={LINK_ROUTES.RESEARCH_INDEX} target="_self">Research</Link></li>
                        <li><Link to={LINK_ROUTES.NEWS_N_BLOGS} target="_self">News &amp; Blog</Link></li>
                    </ul>
                </div>   
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 footer-block">
                    <ul>
                        <li><Link to={LINK_ROUTES.SPONSORS} target="_self">Sponsors</Link></li>
                        <li><Link to={LINK_ROUTES.SPONSOR_US} target="_self">Sponsor Us</Link></li>
                        <li><a rel="noreferrer" href={LINK_ROUTES.a_TAG_CAREER} target="_blank">Career</a></li>   
                    </ul>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 footer-block">
                    <ul>
                        <li><Link to={LINK_ROUTES.TEAM_RESOURCES} target="_self">Team Resources</Link></li>
                        <li><a href={LINK_ROUTES.VERIFY} target="blank">Verify Member</a></li>
                        <li><Link to={LINK_ROUTES.LOGIN} target="_self">Login EMS</Link></li>
                    </ul>
                </div>
				<div className="col-lg-2 col-md-2 col-sm-6 col-6 footer-block footer-icon"> 
					<p>Get in touch</p>
                        <a rel="noreferrer" href={LINK_ROUTES.mail_A_TAG} target="_blank">
                            <EnvelopeSimple />
                        </a>&nbsp;&nbsp;
					<a rel="noreferrer" href={LINK_ROUTES.a_TAG_LINKEDIN} target="_blank">
                        <LinkedinLogo />
                    </a> 
					&nbsp;&nbsp;<a rel="noreferrer" href={LINK_ROUTES.a_TAG_GIHUB} target="_blank">
                        <GithubLogo />
                    </a>

                </div>                           
            </div>
      </section>


        <footer className="text-center">
            <p className="small copyright-text">Copyright © Megalodon Lab</p>
        </footer>

    </>
  )
}