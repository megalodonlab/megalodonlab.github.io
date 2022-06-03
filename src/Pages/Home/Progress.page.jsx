import { HeaderImage } from "../../Components/Header/HeaderImage";
import { ProgressLeft } from "../../Components/Progress/ProgressLeft"
import { ProgressRight } from "../../Components/Progress/ProgressRight"



export function Progress() {
    return (

        <>

        <HeaderImage />

         <section className="templatemo-container">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title">What is happening at Meg Laboratory?</h2>
                        <hr className="section-title-underline" />
                    </div>
                </div>
                <div className="row posts-container">
                   <ProgressLeft date="1" month="May" title="Intra System Being Developed" description="We are using React JS, and Node JS to develop the System" />
                   <ProgressRight date="10" month="May" title="Product Evaluation System" description="Using advanced AI to train computer using sample data to make predictions how a product would sell." />
                   <ProgressLeft date="28" month="May" title="Frontend Website full completed" description="All the frontend completed using React, and keeping readability, maintainability in mind." />
                </div>
				
            </div>
			<br/>
        </section>
       
        </>

    );
}