import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logoMega.png'
import Cube from '../../assets/img/rubic.png';
import { LINK_ROUTES } from '../../assets/js/LINK_ROUTES'
import { ProgressLeft } from '../../Components/Progress/ProgressLeft'
import { ProgressRight } from '../../Components/Progress/ProgressRight'


export function Home() {
  return (
    <>

        <section className="templatemo-container">
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-6 col-md-6">
                        <div className="carousel-container">
                            <div className="crsl-items" data-navigation="navbtns">
                                <div className="crsl-wrap">
                                    <figure className="crsl-item">
                                        <img src={Logo} alt="logo" className="img-responsive" />
                                    </figure>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p>Megalodon Lab is an open-source platform created by students aiming to build, test and introduce new technologies. Our research and solution cover multiple areas, including automation, data processing and analysis, machine learning and accessible web technology. The research term we use in our platform indicates the pre-stage of our final product (solution). Our goal is to experiment with new ways of software integration and create innovative prototypes. We run as a non-profit open-source platform. Currently, we are privately funded and looking for sponsors to maintain our platform and research solutions. We are also open to teaming up with other research groups and finding a better solution for a better world.</p>
						<br/>
                        <Link to={LINK_ROUTES.ABOUT} className="btn-blue-gradient">KNOW MORE</Link>
                        <Link to={LINK_ROUTES.TEAM} className="btn-transparent">THE TEAM</Link>
                    </div>
                </div>
                
            </div>
        </section>

        <section className="templatemo-container light-gray-bg">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title"> Solve Problem </h2>
                    </div>
                </div>
                <div className="row">

                    <div className="col-lg-6 col-md-6">
                        <p className="justify-text">We are always open to working for organizations looking for a better solution for automation, data processing and visualization or web technologies. Also, if you are a Lab or a research group and want to collaborate with us, leave us a message at <a href={LINK_ROUTES.mail_A_TAG} target="new"> {LINK_ROUTES.mail_OFFICE} </a>.</p>
                        <p className="justify-text">
						One of our mission is to take challenges and solve problems for small organizations, university clubs or groups or any non-profit firm which needs support in terms of customized technologies and can use our products for people's benefit. 
                        </p>
                        <p className="justify-text">The most exciting part we do in our lab is the experiment with automation technologies. We love automation and making solutions using machine learning and AI to improve product quality and work efficiency. Even though we are in our primary stage, our in-progress prototypes can solve multiple real-life problems. Interestingly all of these projects are based on our solution/libraries from start to end, which makes our solution more unique. </p>
						<br/>
                    </div>
					
                    <div className="col-lg-6 col-md-6">
                        <div className="carousel-container">
                            <div className="crsl-items" data-navigation="navbtns">
                                <div className="crsl-wrap">
                                    <figure className="crsl-item">
                                        <img src={Cube} alt="logo" className="img-responsive" />
                                    </figure>
                                </div>
                            </div>
                        </div>   
                    </div>

                </div>
            </div>
        </section>

        <section className="templatemo-container">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title"> Activity </h2>
                    </div>
                </div>
                <div className="row posts-container">

                   <ProgressLeft date="2022" month="June" title="Income Tracker - Budgeting Tool" description="" url="/" />
                   <ProgressRight date="2022" month="May" title="Product Prediction and Evaluation - Software" description="" url={LINK_ROUTES.RESEARCH_PROJ_1} />
                   <ProgressLeft date="2022" month="April" title="Website - Dev Transformation" description="" url={LINK_ROUTES.SOLUTION_PROJ_1} />

                </div>
				
            </div>
			<br/><br/>
        </section>

    </>
  )
}